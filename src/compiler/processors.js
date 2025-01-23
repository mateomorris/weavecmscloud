import _ from 'lodash-es'
import PromiseWorker from 'promise-worker'
import { get } from 'svelte/store'
// import { render } from 'svelte/server'
// import { render } from './lib/svelte-5/server/index.js'
import { site } from '$lib/builder/stores/data'
import { locale } from '$lib/builder/stores/app'
import rollupWorker from './workers/rollup.worker.js?worker'
import postCSSWorker from './workers/postcss.worker.js?worker'

const postcss_worker = new PromiseWorker(new postCSSWorker())
const rollup_worker = new PromiseWorker(new rollupWorker())

const COMPILED_COMPONENTS_CACHE = new Map()

/**
 * Compiles and renders a given component or page, caching the result.
 * @async
 * @param {Object} options - The options for rendering.
 * @param {Object|Object[]} options.component - The component(s) to be rendered. Can be a single component or an array of components for a page.
 * @param {{ code: string, data: Object }} options.head 
 * @param {boolean} [options.buildStatic=true] - Indicates whether to build the component statically or not.
 * @param {string} [options.format='esm'] - The module format to use, such as 'esm' for ES Modules.
 * @param {boolean} [options.dev_mode=false] - Whether Svelte should be compiled in dev mode (i.e. attaches LOC for inspecting) or not
 * @returns {Promise<Object>} Returns a payload containing the rendered HTML, CSS, JS, and other relevant data.
 * @throws {Error} Throws an error if the compilation or rendering fails.
 */
export async function html({ component, head, buildStatic = true, format = 'esm', dev_mode = false }) {
	let cache_key
	if (!buildStatic) {
		cache_key = JSON.stringify({
			component,
			format
		})
		if (COMPILED_COMPONENTS_CACHE.has(cache_key)) {
			return COMPILED_COMPONENTS_CACHE.get(cache_key)
		}
	}

	const compile_page = Array.isArray(component)

	let res
	try {
		const has_js = compile_page ? component.some((s) => s.js) : !!component.js
		res = await rollup_worker.postMessage({
			component: _.cloneDeep(component),
			head,
			hydrated: buildStatic && has_js,
			buildStatic,
			format,
			dev_mode
		})
	} catch (e) {
		console.log('error', e)
		res = {
			error: e.toString()
		}
	}

	let payload

	if (!res) {
		payload = {
			html: '<h1 style="text-align: center">could not render</h1>'
		}
		res = {}
	} else if (res.error) {
		payload = {
			error: escapeHtml(res.error)
		}
		function escapeHtml(unsafe) {
			return unsafe.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;')
		}
	} else if (buildStatic) {
		const blob = new Blob([res.ssr], { type: 'text/javascript' })
		const url = URL.createObjectURL(blob)
		const { default: App } = await import(/* @vite-ignore */ url)
		URL.revokeObjectURL(url)

		let component_data
		if (compile_page) {
			// get the component data for the page
			component_data = component.reduce((accumulator, item, i) => {
				if (!_.isEmpty(item.data)) {
					accumulator[`component_${i}_props`] = item.data
				}
				return accumulator
			}, {})
			component_data.head_props = head.data
		} else {
			component_data = component.data
		}

		const rendered = App.render(component_data)
		// const rendered = render(App, { props: component_data })

		payload = {
			head: rendered.head,
			html: rendered.html,
			css: rendered.css.code,
			js: res.dom
		}
	} else {
		payload = {
			js: res.dom
		}
	}

	if (!buildStatic) {
		COMPILED_COMPONENTS_CACHE.set(cache_key, payload)
	}

	return payload
}

const cssMap = new Map()
export async function css(raw) {
	// return {
	//   css: ''
	// }
	if (cssMap.has(raw)) {
		return { css: cssMap.get(raw) }
	}
	const processed = await postcss_worker.postMessage({
		css: raw
	})
	if (processed.message) {
		return {
			error: processed.message
		}
	}
	cssMap.set(raw, processed)
	return {
		css: processed
	}
}

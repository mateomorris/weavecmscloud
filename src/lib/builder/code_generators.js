import { find as _find, chain as _chain, flattenDeep as _flattenDeep } from 'lodash-es'
import _ from 'lodash-es'
import { get } from 'svelte/store'
import { processors } from './component.js'
import stores from './stores/data'
import { site as activeSite } from './stores/data/site.js'
import sections from './stores/data/sections.js'
import symbols from './stores/data/symbols.js'
import pages from './stores/data/pages.js'
import active_page from './stores/data/page.js'
import { get_content_with_synced_values, get_page_data, get_site_data } from './stores/helpers.js'
import { design_tokens } from './constants.js'

export async function block_html({ code, data }) {
	const { html, css: postcss, js } = code
	const { css, error } = await processors.css(postcss || '')
	const res = await processors.html({
		component: { html, css, js, data }
	})
	return res
}

/**
 * @param {{
 *  page?: import('$lib').Page
 *  site?: import('$lib').Site
 *  page_sections?: import('$lib').Section[]
 *  page_symbols?: import('$lib').Symbol[]
 *  page_list?: import('$lib').Page[]
 *  page_types?: import('$lib').Page_Type[]
 *  locale?: string
 *  no_js?: boolean
 * }} details
 * @returns {Promise<{ html: string, js: string}>}
 * */
export async function page_html({ page = get(active_page), site = get(activeSite), page_sections = get(sections), page_symbols = get(symbols), page_list = get(pages), page_types = get(stores.page_types), locale = 'en', no_js = false }) {
	const hydratable_symbols_on_page = page_symbols.filter((s) => s.code.js && page_sections.some((section) => section.symbol === s.id || section.master?.symbol === s.id))
	const component = await Promise.all([
		(async () => {
			const data = get_page_data({ page, site, loc: locale })
			return {
				html: `
         <svelte:head>
           ${site.code.head}
           ${page?.page_type.code.head}
           ${site_design_css(site.design)}
         </svelte:head>`,
				css: ``,
				js: ``,
				data
			}
		})(),
		...page_sections
			.filter((s) => s.symbol || s.master?.symbol) // exclude palette sections
			.map(async (section) => {
				const symbol = page_symbols.find((symbol) => symbol.id === (section.symbol || section.master.symbol))
				const { html, css: postcss, js } = symbol.code

				const data = get_content_with_synced_values({
					entries: section.entries,
					fields: symbol.fields,
					page,
					site,
					pages: page_list,
					page_types
				})[locale]

				const { css, error } = await processors.css(postcss || '')
				return {
					html: `
         <div data-section="${section.id}" id="section-${section.id}" data-symbol="${symbol.id}">
           ${html}
         </div>`,
					js,
					css,
					data
				}
			}),
		(async () => {
			const data = get_site_data({ site, loc: locale })
			return {
				html: site.code.foot,
				css: ``,
				js: ``,
				data
			}
		})()
	])

	const res = await processors.html({
		component,
		locale
	})

	const final = `\
 <!DOCTYPE html>
 <html lang="${locale}">
   <head>
     <meta name="generator" content="Primo" />
     ${res.head}
     <style>${res.css}</style>
   </head>
   <body id="page">
     ${res.html}
     ${no_js ? `` : `<script type="module">${fetch_modules(hydratable_symbols_on_page)}</script>`}
   </body>
 </html>
 `

	return {
		html: final,
		js: res.js
	}

	// fetch module to hydrate component, include hydration data
	function fetch_modules(symbols) {
		return symbols
			.map(
				(symbol) => `
     import('/_symbols/${symbol.id}.js')
     .then(({default:App}) => {
       ${page_sections
					.filter((section) => section.symbol === symbol.id || section.master?.symbol === symbol.id)
					.map((section) => {
						const instance_content = get_content_with_synced_values({
							entries: section.entries,
							fields: symbol.fields,
							page,
							site,
							pages: page_list,
							page_types
						})[locale]
						return `
           new App({
             target: document.querySelector('#section-${section.id}'),
             hydrate: true,
             props: ${JSON.stringify(instance_content)}
           })
         `
					})
					.join('\n')}
     })
     .catch(e => console.error(e));
   `
			)
			.join('\n')
	}
}

export function site_design_css(values) {
	return `
		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link href="https://fonts.googleapis.com/css2?family=${values['heading_font'].replace(/ /g, '+')}:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=${values['body_font'].replace(
		/ /g,
		'+'
	)}:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700" rel="stylesheet">
	<style>
	:root {\n${Object.entries(design_tokens)
		.map(([token, { variable }]) => `--${variable}: ${values[token]};`)
		.join('\n')}}
	</style>
	`
}
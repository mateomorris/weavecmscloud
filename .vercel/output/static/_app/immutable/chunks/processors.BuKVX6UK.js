import{g as v,q as M}from"./modal.DQW4ZWZ4.js";var j=0;function k(e,r){var a=r.data;if(!(!Array.isArray(a)||a.length<2)){var c=a[0],n=a[1],l=a[2],s=e._callbacks[c];s&&(delete e._callbacks[c],s(n,l))}}function w(e){var r=this;r._worker=e,r._callbacks={},e.addEventListener("message",function(a){k(r,a)})}w.prototype.postMessage=function(e){var r=this,a=j++,c=[a,e];return new Promise(function(n,l){if(r._callbacks[a]=function(t,o){if(t)return l(new Error(t.message));n(o)},typeof r._worker.controller<"u"){var s=new MessageChannel;s.port1.onmessage=function(t){k(r,t)},r._worker.controller.postMessage(c,[s.port2])}else r._worker.postMessage(c)})};var W=w;const h=v(W);function L(e){return new Worker(""+new URL("../workers/rollup.worker-C1Up4F3i.js",import.meta.url).href,{name:e==null?void 0:e.name})}function U(e){return new Worker(""+new URL("../workers/postcss.worker-D3H5YghU.js",import.meta.url).href,{name:e==null?void 0:e.name})}const C=new h(new U),E=new h(new L),i=new Map;async function A({component:e,buildStatic:r=!0,format:a="esm",dev_mode:c=!1}){let n;if(!r&&(n=JSON.stringify({component:e,format:a}),i.has(n)))return i.get(n);const l=Array.isArray(e);let s;try{const o=l?e.some(p=>p.js):!!e.js;s=await E.postMessage({component:e,hydrated:r&&o,buildStatic:r,format:a,dev_mode:c})}catch(o){console.log("error",o),s={error:o.toString()}}let t;if(!s)t={html:'<h1 style="text-align: center">could not render</h1>'},s={};else if(s.error)t={error:function(p){return p.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}(s.error)};else if(r){const o=new Blob([s.ssr],{type:"text/javascript"}),p=URL.createObjectURL(o),{default:_}=await import(p);URL.revokeObjectURL(p);let f;l?f=e.reduce((u,d,y)=>(M.isEmpty(d.data)||(u[`component_${y}_props`]=d.data),u),{}):f=e.data;const g=_.render(f);t={head:g.head,html:g.html,css:g.css.code,js:s.dom}}else t={js:s.dom};return r||i.set(n,t),t}const m=new Map;async function O(e){if(m.has(e))return{css:m.get(e)};const r=await C.postMessage({css:e});return r.message?{error:r.message}:(m.set(e,r),{css:r})}export{O as css,A as html};
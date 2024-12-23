import{a as S,t as E,c as W}from"../chunks/disclose-version.DwtFBC9D.js";import{p as U,c as r,s as d,r as i,t as j,a as I,f as q,S as R,J as X,g as P,q as H,d as Y}from"../chunks/runtime.B-tQERhy.js";import{s as J,b as D,d as Z,a as aa}from"../chunks/store.hrIEzNxT.js";import{i as M,p as T}from"../chunks/if.DYHPrnE1.js";import{I as z,a as B,k as ta}from"../chunks/Icon.CwQkWwrI.js";import{r as L,b as C,c as G,t as ea,f as sa}from"../chunks/index.CapXeD3F.js";import{n as K,p as N}from"../chunks/stores.Djv4k36v.js";import{p as F}from"../chunks/props.Pqwi89p5.js";import{p as ra,i as ia,a as na}from"../chunks/entry.Cv1PstCO.js";import{c as oa}from"../chunks/index-client.BfaqMVnR.js";import{S as la}from"../chunks/ServerLogo.B562j9Sy.js";function ca(e){const n=JSON.parse(e);return n.data&&(n.data=ra(n.data)),n}function O(e){return HTMLElement.prototype.cloneNode.call(e)}function Q(e,n=()=>{}){const h=async({action:a,result:p,reset:f=!0,invalidateAll:s=!0})=>{p.type==="success"&&(f&&HTMLFormElement.prototype.reset.call(e),s&&await ia()),(location.origin+location.pathname===a.origin+a.pathname||p.type==="redirect"||p.type==="error")&&na(p)};async function w(a){var $,u,b,A,k;if((($=a.submitter)!=null&&$.hasAttribute("formmethod")?a.submitter.formMethod:O(e).method)!=="post")return;a.preventDefault();const f=new URL((u=a.submitter)!=null&&u.hasAttribute("formaction")?a.submitter.formAction:O(e).action),s=(b=a.submitter)!=null&&b.hasAttribute("formenctype")?a.submitter.formEnctype:O(e).enctype,l=new FormData(e),g=(A=a.submitter)==null?void 0:A.getAttribute("name");g&&l.append(g,((k=a.submitter)==null?void 0:k.getAttribute("value"))??"");const m=new AbortController;let c=!1;const y=await n({action:f,cancel:()=>c=!0,controller:m,formData:l,formElement:e,submitter:a.submitter})??h;if(c)return;let v;try{const t=new Headers({accept:"application/json","x-sveltekit-action":"true"});s!=="multipart/form-data"&&t.set("Content-Type",/^(:?application\/x-www-form-urlencoded|text\/plain)$/.test(s)?s:"application/x-www-form-urlencoded");const _=s==="multipart/form-data"?l:new URLSearchParams(l),o=await fetch(f,{method:"POST",headers:t,cache:"no-store",body:_,signal:m.signal});v=ca(await o.text()),v.type==="error"&&(v.status=o.status)}catch(t){if((t==null?void 0:t.name)==="AbortError")return;v={type:"error",error:t}}y({action:f,formData:l,formElement:e,update:t=>h({action:f,result:v,reset:t==null?void 0:t.reset,invalidateAll:t==null?void 0:t.invalidateAll}),result:v})}return HTMLFormElement.prototype.addEventListener.call(e,"submit",w),{destroy(){HTMLFormElement.prototype.removeEventListener.call(e,"submit",w)}}}var va=E('<span class="svelte-f85yva">Sign in</span>'),da=E('<div class="icon svelte-f85yva"><!></div>'),pa=E('<form class="form svelte-f85yva" method="POST" action="?/sign_in"><div class="fields svelte-f85yva"><label class="svelte-f85yva"><span class="svelte-f85yva">Email</span> <input data-test-id="email" type="text" name="email" class="svelte-f85yva"></label> <label class="svelte-f85yva"><span class="svelte-f85yva">Password</span> <input data-test-id="password" type="password" name="password" class="svelte-f85yva"></label> <input name="invitation_id" type="text" class="hidden svelte-f85yva"></div> <button class="button svelte-f85yva" type="submit" data-test-id="submit"><!></button></form>');function ma(e,n){U(n,!0);const h=J(),w=()=>D(N,"$page",h),a=()=>D(K,"$navigating",h);let p=F(n,"email",15),f=F(n,"password",15);var s=pa(),l=r(s),g=r(l),m=d(r(g),2);L(m),i(g);var c=d(g,2),x=d(r(c),2);L(x),i(c);var y=d(c,2);L(y),j(()=>G(y,w().url.searchParams.get("join"))),i(l);var v=d(l,2),$=r(v);M($,()=>!a(),u=>{var b=va();S(u,b)},u=>{var b=da(),A=r(b);z(A,{icon:"gg:spinner"}),i(b),S(u,b)}),i(v),i(s),C(m,p),C(x,f),B(s,u=>Q(u)),S(e,s),I()}var ua=E('<span class="svelte-dbb2im">Create account</span>'),ba=E('<div class="icon svelte-dbb2im"><!></div>'),fa=(e,n)=>n("switch"),ga=E('<form class="form svelte-dbb2im" method="POST" action="?/sign_up"><div class="fields svelte-dbb2im"><label class="svelte-dbb2im"><span class="svelte-dbb2im">Email</span> <input name="email" type="text" class="svelte-dbb2im"></label> <label class="svelte-dbb2im"><span class="svelte-dbb2im">Password</span> <input name="password" type="password" class="svelte-dbb2im"></label> <input name="invitation_id" type="text" class="hidden svelte-dbb2im"></div> <button class="button svelte-dbb2im" type="submit"><!></button></form> <span class="footer-text svelte-dbb2im">Already have an account? <button class="svelte-dbb2im">Sign in</button></span>',1);function _a(e,n){U(n,!0);const h=J(),w=()=>D(N,"$page",h),a=()=>D(K,"$navigating",h),p=oa();let f=F(n,"email",15),s=F(n,"password",15);var l=ga(),g=q(l),m=r(g),c=r(m),x=d(r(c),2);L(x),i(c);var y=d(c,2),v=d(r(y),2);L(v),i(y);var $=d(y,2);L($),j(()=>G($,w().url.searchParams.get("join"))),i(m);var u=d(m,2),b=r(u);M(b,()=>!a(),t=>{var _=ua();S(t,_)},t=>{var _=ba(),o=r(_);z(o,{icon:"gg:spinner"}),i(_),S(t,_)}),i(u),i(g);var A=d(g,2),k=d(r(A));k.__click=[fa,p],i(A),C(x,f),C(v,s),B(g,t=>Q(t)),S(e,l),I()}Z(["click"]);var ya=E('<div class="error svelte-176c2p3"> </div>'),ha=E('<main class="primo-reset svelte-176c2p3"><div class="left svelte-176c2p3"><div class="logo svelte-176c2p3"><div class="logo-container svelte-176c2p3"><!></div></div> <div class="box svelte-176c2p3"><header class="svelte-176c2p3"><h1 class="svelte-176c2p3"></h1></header> <!> <!></div></div></main>');function Ha(e,n){U(n,!0);const h=J(),w=()=>D(N,"$page",h);let a=R(T(w().url.searchParams.get("email")||"")),p=R(""),f=Y(()=>{var m;return(m=n.form)==null?void 0:m.error}),s;X(()=>{s=!w().url.searchParams.has("signup")});var l=W(),g=q(l);ta(g,()=>s,m=>{var c=ha(),x=r(c),y=r(x),v=r(y),$=r(v);la($),i(v),i(y);var u=d(y,2),b=r(u),A=r(b);A.textContent=s?"Sign in":"Sign Up",i(b);var k=d(b,2);M(k,()=>P(f),_=>{var o=ya(),V=r(o,!0);i(o),j(()=>aa(V,P(f))),S(_,o)});var t=d(k,2);M(t,()=>s,_=>{ma(_,{get email(){return P(a)},set email(o){H(a,T(o))},get password(){return P(p)},set password(o){H(p,T(o))},$$events:{switch:()=>s=!1}})},_=>{_a(_,{get email(){return P(a)},set email(o){H(a,T(o))},get password(){return P(p)},set password(o){H(p,T(o))},$$events:{switch:()=>s=!0}})}),i(u),i(x),i(c),ea(1,c,()=>sa),S(m,c)}),S(e,l),I()}export{Ha as component};
const Cn=!0;var Dn=Array.isArray,bn=Array.from,Mn=Object.defineProperty,ct=Object.getOwnPropertyDescriptor,zt=Object.getOwnPropertyDescriptors,qn=Object.prototype,Ln=Array.prototype,Jt=Object.getPrototypeOf;function Pn(t){return typeof t=="function"}const Fn=()=>{};function Hn(t){return typeof(t==null?void 0:t.then)=="function"}function Yn(t){return t()}function Et(t){for(var n=0;n<t.length;n++)t[n]()}const m=2,yt=4,Y=8,rt=16,w=32,Z=64,g=128,V=256,p=512,x=1024,b=2048,D=4096,B=8192,Qt=16384,wt=32768,Bn=65536,tn=1<<18,Tt=1<<19,vt=Symbol("$state"),Un=Symbol("");function mt(t){return t===this.v}function nn(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function At(t){return!nn(t,this.v)}function rn(t){throw new Error("effect_in_teardown")}function en(){throw new Error("effect_in_unowned_derived")}function sn(t){throw new Error("effect_orphan")}function an(){throw new Error("effect_update_depth_exceeded")}function jn(){throw new Error("hydration_failed")}function Vn(t){throw new Error("props_invalid_value")}function Gn(){throw new Error("state_descriptors_fixed")}function Kn(){throw new Error("state_prototype_fixed")}function on(){throw new Error("state_unsafe_local_read")}function un(){throw new Error("state_unsafe_mutation")}function et(t){return{f:0,v:t,reactions:null,equals:mt,version:0}}function Wn(t){return It(et(t))}function ln(t,n=!1){var e;const r=et(t);return n||(r.equals=At),l!==null&&l.l!==null&&((e=l.l).s??(e.s=[])).push(r),r}function $n(t,n=!1){return It(ln(t,n))}function It(t){return i!==null&&i.f&m&&(y===null?In([t]):y.push(t)),t}function Zn(t,n){return st(t,Xt(()=>it(t))),n}function st(t,n){return i!==null&&lt()&&i.f&(m|rt)&&(y===null||!y.includes(t))&&un(),fn(t,n)}function fn(t,n){return t.equals(n)||(t.v=n,t.version=Vt(),xt(t,x),lt()&&u!==null&&u.f&p&&!(u.f&w)&&(_!==null&&_.includes(t)?(E(u,x),X(u)):I===null?xn([t]):I.push(t))),n}function xt(t,n){var r=t.reactions;if(r!==null)for(var e=lt(),s=r.length,a=0;a<s;a++){var o=r[a],f=o.f;f&x||!e&&o===u||(E(o,n),f&(p|g)&&(f&m?xt(o,b):X(o)))}}const Xn=1,zn=2,Jn=4,Qn=8,tr=16,nr=1,rr=2,er=4,sr=8,ar=16,or=1,ur=2,lr=4,ir=1,fr=2,_n="[",cn="[!",vn="]",Rt={},_r=Symbol(),cr="http://www.w3.org/2000/svg",vr="http://www.w3.org/1998/Math/MathML",pr=["state_snapshot_uncloneable","binding_property_non_reactive","hydration_attribute_changed","hydration_html_changed","ownership_invalid_binding","ownership_invalid_mutation"];function St(t){console.warn("hydration_mismatch")}let S=!1;function hr(t){S=t}let d;function P(t){if(t===null)throw St(),Rt;return d=t}function dr(){return P(N(d))}function Er(t){if(S){if(N(d)!==null)throw St(),Rt;d=t}}function yr(t=1){if(S){for(var n=t,r=d;n--;)r=N(r);d=r}}function wr(){for(var t=0,n=d;;){if(n.nodeType===8){var r=n.data;if(r===vn){if(t===0)return n;t-=1}else(r===_n||r===cn)&&(t+=1)}var e=N(n);n.remove(),n=e}}var pt,gt,Nt;function Tr(){if(pt===void 0){pt=window;var t=Element.prototype,n=Node.prototype;gt=ct(n,"firstChild").get,Nt=ct(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function z(t=""){return document.createTextNode(t)}function J(t){return gt.call(t)}function N(t){return Nt.call(t)}function mr(t,n){if(!S)return J(t);var r=J(d);if(r===null)r=d.appendChild(z());else if(n&&r.nodeType!==3){var e=z();return r==null||r.before(e),P(e),e}return P(r),r}function Ar(t,n){if(!S){var r=J(t);return r instanceof Comment&&r.data===""?N(r):r}return d}function Ir(t,n=1,r=!1){let e=S?d:t;for(;n--;)e=N(e);if(!S)return e;var s=e.nodeType;if(r&&s!==3){var a=z();return e==null||e.before(a),P(a),a}return P(e),e}function xr(t){t.textContent=""}function pn(t){var n=m|x;u===null?n|=g:u.f|=Tt;const r={children:null,ctx:l,deps:null,equals:mt,f:n,fn:t,reactions:null,v:null,version:0,parent:u};if(i!==null&&i.f&m){var e=i;(e.children??(e.children=[])).push(r)}return r}function Rr(t){const n=pn(t);return n.equals=At,n}function Ot(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&m?at(e):q(e)}}}function kt(t){var n,r=u;$(t.parent);try{Ot(t),n=Gt(t)}finally{$(r)}return n}function Ct(t){var n=kt(t),r=(O||t.f&g)&&t.deps!==null?b:p;E(t,r),t.equals(n)||(t.v=n,t.version=Vt())}function at(t){Ot(t),H(t,0),E(t,B),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Dt(t){u===null&&i===null&&sn(),i!==null&&i.f&g&&en(),ut&&rn()}function hn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function M(t,n,r,e=!0){var s=(t&Z)!==0,a=u,o={ctx:l,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|x,first:null,fn:n,last:null,next:null,parent:s?null:a,prev:null,teardown:null,transitions:null,version:0};if(r){var f=k;try{ht(!0),U(o),o.f|=Qt}catch(c){throw q(o),c}finally{ht(f)}}else n!==null&&X(o);var T=r&&o.deps===null&&o.first===null&&o.nodes_start===null&&o.teardown===null&&(o.f&Tt)===0;if(!T&&!s&&e&&(a!==null&&hn(o,a),i!==null&&i.f&m)){var A=i;(A.children??(A.children=[])).push(o)}return o}function Sr(t){const n=M(Y,null,!1);return E(n,p),n.teardown=t,n}function gr(t){Dt();var n=u!==null&&(u.f&w)!==0&&l!==null&&!l.m;if(n){var r=l;(r.e??(r.e=[])).push({fn:t,effect:u,reaction:i})}else{var e=bt(t);return e}}function Nr(t){return Dt(),ot(t)}function Or(t){const n=M(Z,t,!0);return()=>{q(n)}}function bt(t){return M(yt,t,!1)}function kr(t,n){var r=l,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=ot(()=>{t(),!e.ran&&(e.ran=!0,st(r.l.r2,!0),Xt(n))})}function Cr(){var t=l;ot(()=>{if(it(t.l.r2)){for(var n of t.l.r1){var r=n.effect;r.f&p&&E(r,b),L(r)&&U(r),n.ran=!1}t.l.r2.v=!1}})}function ot(t){return M(Y,t,!0)}function Dr(t){return dn(t)}function dn(t,n=0){return M(Y|rt|n,t,!0)}function br(t,n=!0){return M(Y|w,t,!0,n)}function Mt(t){var n=t.teardown;if(n!==null){const r=ut,e=i;dt(!0),W(null);try{n.call(null)}finally{dt(r),W(e)}}}function qt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)at(n[r])}}function Lt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;q(r,n),r=e}}function En(t){for(var n=t.first;n!==null;){var r=n.next;n.f&w||q(n),n=r}}function q(t,n=!0){var r=!1;if((n||t.f&tn)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var a=e===s?null:N(e);e.remove(),e=a}r=!0}qt(t),Lt(t,n&&!r),H(t,0),E(t,B);var o=t.transitions;if(o!==null)for(const T of o)T.stop();Mt(t);var f=t.parent;f!==null&&f.first!==null&&Pt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function Pt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function Mr(t,n){var r=[];Ft(t,r,!0),yn(r,()=>{q(t),n&&n()})}function yn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function Ft(t,n,r){if(!(t.f&D)){if(t.f^=D,t.transitions!==null)for(const o of t.transitions)(o.is_global||r)&&n.push(o);for(var e=t.first;e!==null;){var s=e.next,a=(e.f&wt)!==0||(e.f&w)!==0;Ft(e,n,a?r:!1),e=s}}}function qr(t){Ht(t,!0)}function Ht(t,n){if(t.f&D){t.f^=D,L(t)&&U(t);for(var r=t.first;r!==null;){var e=r.next,s=(r.f&wt)!==0||(r.f&w)!==0;Ht(r,s?n:!1),r=e}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&a.in()}}const wn=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let G=!1,K=!1,Q=[],tt=[];function Yt(){G=!1;const t=Q.slice();Q=[],Et(t)}function Bt(){K=!1;const t=tt.slice();tt=[],Et(t)}function Lr(t){G||(G=!0,queueMicrotask(Yt)),Q.push(t)}function Pr(t){K||(K=!0,wn(Bt)),tt.push(t)}function Tn(){G&&Yt(),K&&Bt()}function Fr(){throw new Error("invalid_default_snippet")}function mn(t){throw new Error("lifecycle_outside_component")}const Ut=0,An=1;let j=Ut,F=!1,k=!1,ut=!1;function ht(t){k=t}function dt(t){ut=t}let R=[],C=0;let i=null;function W(t){i=t}let u=null;function $(t){u=t}let y=null;function In(t){y=t}let _=null,h=0,I=null;function xn(t){I=t}let jt=0,O=!1,l=null;function Hr(t){l=t}function Vt(){return++jt}function lt(){return l!==null&&l.l===null}function L(t){var o,f;var n=t.f;if(n&x)return!0;if(n&b){var r=t.deps,e=(n&g)!==0;if(r!==null){var s;if(n&V){for(s=0;s<r.length;s++)((o=r[s]).reactions??(o.reactions=[])).push(t);t.f^=V}for(s=0;s<r.length;s++){var a=r[s];if(L(a)&&Ct(a),e&&u!==null&&!O&&!((f=a==null?void 0:a.reactions)!=null&&f.includes(t))&&(a.reactions??(a.reactions=[])).push(t),a.version>t.version)return!0}}e||E(t,p)}return!1}function Rn(t,n,r){throw t}function Gt(t){var _t;var n=_,r=h,e=I,s=i,a=O,o=y,f=l,T=t.f;_=null,h=0,I=null,i=T&(w|Z)?null:t,O=!k&&(T&g)!==0,y=null,l=t.ctx;try{var A=(0,t.fn)(),c=t.deps;if(_!==null){var v;if(H(t,h),c!==null&&h>0)for(c.length=h+_.length,v=0;v<_.length;v++)c[h+v]=_[v];else t.deps=c=_;if(!O)for(v=h;v<c.length;v++)((_t=c[v]).reactions??(_t.reactions=[])).push(t)}else c!==null&&h<c.length&&(H(t,h),c.length=h);return A}finally{_=n,h=r,I=e,i=s,O=a,y=o,l=f}}function Sn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&m&&(_===null||!_.includes(n))&&(E(n,b),n.f&(g|V)||(n.f^=V),H(n,0))}function H(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Sn(t,r[e])}function U(t){var n=t.f;if(!(n&B)){E(t,p);var r=u;u=t;try{qt(t),n&rt?En(t):Lt(t),Mt(t);var e=Gt(t);t.teardown=typeof e=="function"?e:null,t.version=jt}catch(s){Rn(s)}finally{u=r}}}function Kt(){C>1e3&&(C=0,an()),C++}function Wt(t){var n=t.length;if(n!==0){Kt();var r=k;k=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&p||(s.f^=p);var a=[];$t(s,a),gn(a)}}finally{k=r}}}function gn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(B|D))&&L(e)&&(U(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Pt(e):e.fn=null))}}function Nn(){if(F=!1,C>1001)return;const t=R;R=[],Wt(t),F||(C=0)}function X(t){j===Ut&&(F||(F=!0,queueMicrotask(Nn)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(Z|w)){if(!(r&p))return;n.f^=p}}R.push(n)}function $t(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,a=(s&w)!==0,o=a&&(s&p)!==0;if(!o&&!(s&D))if(s&Y){a?r.f^=p:L(r)&&U(r);var f=r.first;if(f!==null){r=f;continue}}else s&yt&&e.push(r);var T=r.next;if(T===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var A=v.next;if(A!==null){r=A;continue t}v=v.parent}}r=T}for(var c=0;c<e.length;c++)f=e[c],n.push(f),$t(f,n)}function Zt(t){var n=j,r=R;try{Kt();const s=[];j=An,R=s,F=!1,Wt(r);var e=t==null?void 0:t();return Tn(),(R.length>0||s.length>0)&&Zt(),C=0,e}finally{j=n,R=r}}async function Yr(){await Promise.resolve(),Zt()}function it(t){var f;var n=t.f,r=(n&m)!==0;if(r&&n&B){var e=kt(t);return at(t),e}if(i!==null){y!==null&&y.includes(t)&&on();var s=i.deps;_===null&&s!==null&&s[h]===t?h++:_===null?_=[t]:_.push(t),I!==null&&u!==null&&u.f&p&&!(u.f&w)&&I.includes(t)&&(E(u,x),X(u))}else if(r&&t.deps===null){var a=t,o=a.parent;o!==null&&!((f=o.deriveds)!=null&&f.includes(a))&&(o.deriveds??(o.deriveds=[])).push(a)}return r&&(a=t,L(a)&&Ct(a)),t.v}function Xt(t){const n=i;try{return i=null,t()}finally{i=n}}const On=~(x|b|p);function E(t,n){t.f=t.f&On|n}function Br(t){return ft().get(t)}function Ur(t,n){return ft().set(t,n),n}function jr(t){return ft().has(t)}function ft(t){return l===null&&mn(),l.c??(l.c=new Map(kn(l)||void 0))}function kn(t){let n=t.p;for(;n!==null;){const r=n.c;if(r!==null)return r;n=n.p}return null}function Vr(t,n=1){var r=+it(t);return st(t,r+n),r}function Gr(t,n=!1,r){l={p:l,c:null,e:null,m:!1,s:t,x:null,l:null},n||(l.l={s:null,u:null,r1:[],r2:et(!1)})}function Kr(t){const n=l;if(n!==null){t!==void 0&&(n.x=t);const o=n.e;if(o!==null){var r=u,e=i;n.e=null;try{for(var s=0;s<o.length;s++){var a=o[s];$(a.effect),W(a.reaction),bt(a.fn)}}finally{$(r),W(e)}}l=n.p,n.m=!0}return t||{}}function Wr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(vt in t)nt(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&vt in r&&nt(r)}}}function nt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{nt(t[e],n)}catch{}const r=Jt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=zt(r);for(let s in e){const a=e[s].get;if(a)try{a.call(t)}catch{}}}}}export{Dn as $,Rr as A,w as B,i as C,B as D,wt as E,u as F,ar as G,ln as H,Pn as I,Nr as J,gr as K,Bn as L,l as M,Yn as N,Et as O,er as P,Wr as Q,Z as R,Wn as S,Yr as T,vt as U,qn as V,Ln as W,Gn as X,_r as Y,Kn as Z,Jt as _,Kr as a,Hr as a$,qr as a0,Mr as a1,dr as a2,cn as a3,wr as a4,P as a5,hr as a6,mn as a7,bt as a8,ot as a9,D as aA,Xn as aB,fn as aC,zn as aD,tr as aE,Ft as aF,yn as aG,Jn as aH,Qn as aI,Un as aJ,Pr as aK,zt as aL,rt as aM,Qt as aN,lr as aO,or as aP,ur as aQ,lt as aR,yr as aS,Br as aT,Fr as aU,pt as aV,Cn as aW,pr as aX,cr as aY,vr as aZ,Hn as a_,Lr as aa,J as ab,z as ac,ir as ad,fr as ae,Zt as af,Mn as ag,nn as ah,N as ai,St as aj,Rt as ak,kr as al,Cr as am,$n as an,Zn as ao,Sr as ap,W as aq,_n as ar,tn as as,Tr as at,vn as au,jn as av,xr as aw,bn as ax,Or as ay,Ur as az,dn as b,jr as b0,mr as c,pn as d,br as e,Ar as f,it as g,q as h,S as i,d as j,et as k,ct as l,Vn as m,Fn as n,At as o,Gr as p,st as q,Er as r,Ir as s,Dr as t,Xt as u,Vr as v,$ as w,nr as x,rr as y,sr as z};
import{k as y,l as m,m as N,L as U,P as C,o as Y,g as p,q as j,u as D,v as A,B as z,R as G,w as T,x as H,y as M,z as $,d as L,A as g,C as V,D as Z,F as q,G as J,H as Q,I as v}from"./runtime.B-tQERhy.js";import{p as W}from"./if.DYHPrnE1.js";import{c as X}from"./store.hrIEzNxT.js";const k={get(e,r){if(!e.exclude.includes(r))return e.props[r]},set(e,r){return!1},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function te(e,r,n){return new Proxy({props:e,exclude:r},k)}const ee={get(e,r){if(!e.exclude.includes(r))return p(e.version),r in e.special?e.special[r]():e.props[r]},set(e,r,n){return r in e.special||(e.special[r]=ne({get[r](){return e.props[r]}},r,C)),e.special[r](n),A(e.version),!0},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},deleteProperty(e,r){return e.exclude.includes(r)||(e.exclude.push(r),A(e.version)),!0},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function le(e,r){return new Proxy({props:e,exclude:r,special:{},version:y(0)},ee)}const re={get(e,r){let n=e.props.length;for(;n--;){let s=e.props[n];if(v(s)&&(s=s()),typeof s=="object"&&s!==null&&r in s)return s[r]}},set(e,r,n){let s=e.props.length;for(;s--;){let i=e.props[s];v(i)&&(i=i());const t=m(i,r);if(t&&t.set)return t.set(n),!0}return!1},getOwnPropertyDescriptor(e,r){let n=e.props.length;for(;n--;){let s=e.props[n];if(v(s)&&(s=s()),typeof s=="object"&&s!==null&&r in s){const i=m(s,r);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,r){for(let n of e.props)if(v(n)&&(n=n()),n!=null&&r in n)return!0;return!1},ownKeys(e){const r=[];for(let n of e.props){v(n)&&(n=n());for(const s in n)r.includes(s)||r.push(s)}return r}};function ae(...e){return new Proxy({props:e},re)}function B(e){for(var r=q,n=q;r!==null&&!(r.f&(z|G));)r=r.parent;try{return T(r),e()}finally{T(n)}}function ne(e,r,n,s){var S;var i=(n&H)!==0,t=(n&M)!==0,x=(n&$)!==0,F=(n&J)!==0,R=!1,a;x?[a,R]=X(()=>e[r]):a=e[r];var c=(S=m(e,r))==null?void 0:S.set,l=s,h=!0,P=!1,E=()=>(P=!0,h&&(h=!1,F?l=D(s):l=s),l);a===void 0&&s!==void 0&&(c&&t&&N(),a=E(),c&&c(a));var f;if(t)f=()=>{var u=e[r];return u===void 0?E():(h=!0,P=!1,u)};else{var I=B(()=>(i?L:g)(()=>e[r]));I.f|=U,f=()=>{var u=p(I);return u!==void 0&&(l=void 0),u===void 0?l:u}}if(!(n&C))return f;if(c){var K=e.$$legacy;return function(u,o){return arguments.length>0?((!t||!o||K||R)&&c(o?f():u),u):f()}}var w=!1,O=!1,b=Q(a),d=B(()=>L(()=>{var u=f(),o=p(b),_=V;return w||u===void 0&&_.f&Z?(w=!1,O=!0,o):(O=!1,b.v=u)}));return i||(d.equals=Y),function(u,o){if(arguments.length>0){const _=o?p(d):t&&x?W(u):u;return d.equals(_)||(w=!0,j(b,_),P&&l!==void 0&&(l=_),D(()=>p(d))),u}return p(d)}}export{le as l,ne as p,te as r,ae as s};
import{a as T,t as P,c as Dt}from"../chunks/disclose-version.DwtFBC9D.js";import{p as M,a as A,J as Et,K as st,g as t,q as s,f as K,c as rt,r as Y,s as j,t as lt,S as g,v as dt,T as ct,d as q}from"../chunks/runtime.B-tQERhy.js";import{i as E,p as D}from"../chunks/if.DYHPrnE1.js";import{d as Tt,s as ht,b as L,e as pt}from"../chunks/store.hrIEzNxT.js";import{e as Ct,s as B,t as Bt,f as St,a as Lt}from"../chunks/index.CapXeD3F.js";import{c as Pt,b as Ht}from"../chunks/preload-helper.Cgn74BMC.js";import{a as gt}from"../chunks/Icon.CwQkWwrI.js";import{U as Ot,v as It,s as F,w as Rt,m as mt,x as J,t as ft,a as Ut,f as jt,l as qt,c as zt}from"../chunks/modal.DQW4ZWZ4.js";import{D as Nt,B as Wt,m as _t,u as Xt,L as Yt,C as Ft}from"../chunks/DropIndicator.DVAXFL8c.js";import{i as Jt}from"../chunks/lifecycle.B6hsrwH2.js";import{c as Kt,a as Mt}from"../chunks/index-client.BfaqMVnR.js";import{a as ut}from"../chunks/hydration.BcoAblzY.js";import{dropTargetForElements as vt}from"../chunks/element-adapter.CmHsh92p.js";import{attachClosestEdge as bt,extractClosestEdge as S}from"../chunks/closest-edge.DKVUyjvI.js";import{c as At}from"../chunks/stores.BjTS3-Xp.js";var Gt=P('<div class="SymbolPalette svelte-p91nir">This is the drop zone for Blocks toggled for this Page Type. Drag any Blocks above or below this section that you want to appear on every page of this type.</div>');function Qt(v,d){M(d,!1);const c=Kt();Mt(()=>{c("mount")}),Jt();var r=Gt();T(v,r),A()}var Vt=P('<div class="spinner svelte-toghj7"><!></div>'),Zt=(v,d,c,r,b)=>{t(d).symbol&&!t(c)&&!t(r)&&b()},te=P("<!> <!>",1),ee=P('<div role="region" style="min-height: 3rem;overflow:hidden;position: relative;"><!></div>'),oe=P('<!> <!> <!> <main id="Page" class="svelte-toghj7"></main>',1);function ae(v,d){M(d,!0);const c=ht(),r=()=>L(F,"$sections",c),b=()=>L(Ut,"$locale",c),z=()=>L(qt,"$locked_blocks",c),N=()=>L(zt,"$symbols",c);ut(d.page);let C=g(!0),H=g(0);async function G(a){}function ne(){}let p=g(null),u=g(void 0),h=g(void 0),m=g(void 0),y=g(!1);async function Q(){s(y,!0),await ct(),V(),t(h).addEventListener("scroll",()=>{s(y,!1)})}function V(){if(!t(m))return;t(m).appendChild(t(u));const{top:a,left:e,bottom:o,right:i}=t(m).getBoundingClientRect(),n={top:(a<=43?43:a)+window.scrollY,bottom:o>=window.innerHeight?0:window.innerHeight-o,left:e,right:window.innerWidth-i-window.scrollX};t(u).style.top=`${n.top}px`,t(u).style.bottom=`${n.bottom}px`,t(u).style.left=`${n.left}px`,t(u).style.right=`${n.right}px`}function W(){s(y,!1)}function Z(a,e=!1){G();const o=Rt(a);mt.show("SECTION_EDITOR",{component:o,tab:e?"code":"content",header:{title:"Edit Block",icon:e?"fas fa-code":"fas fa-edit",onclose:()=>{},button:{icon:"fas fa-check",label:"Save",onclick:(i,n)=>{Xt(a,{updated_data:i,changes:n}),mt.hide()}}}},{showSwitch:!0,disabledBgClose:!0})}let k=g(!1),f=g(void 0),w=g(!1);async function tt(){t(w)||(s(w,!0),await ct(),t(h).addEventListener("scroll",O))}function O(){if(!t(m))return;t(m).appendChild(t(f));const{top:a,left:e,bottom:o,right:i}=t(m).getBoundingClientRect(),n={top:(a<=56?56:a)+window.scrollY,bottom:o>=window.innerHeight?0:window.innerHeight-o,left:e,right:window.innerWidth-i-window.scrollX};t(f).style.left=`${n.left}px`,t(f).style.right=`${n.right}px`,_.position==="top"||F.length===0?t(f).style.top=`${n.top}px`:t(f).style.top="initial",_.position==="bottom"||F.length===0?t(f).style.bottom=`${n.bottom}px`:t(f).style.bottom="initial"}function yt(){s(w,!1),t(h).removeEventListener("scroll",O)}let _={id:null,position:null};function I(){_={id:null,position:null},yt()}let R=!1;function kt(a){vt({element:a,getData({input:e,element:o}){return bt({},{element:o,input:e,allowedEdges:["top","bottom"]})},async onDrag({self:e,source:o}){var n;if(R)return;const i=(n=r()[r().length-1])==null?void 0:n.id;s(m,D(t(h).querySelector(`[data-section="${i}"]`))),t(w)||await tt(),O(),(_.id!==i||_.position!==S(e.data))&&(_={id:i,position:S(e.data)})},onDragLeave(){I()},async onDrop({source:e}){if(R)return;const o=e.data.block;J(o,r().length),I()}})}function wt(a,e){vt({element:a,getData({input:o,element:i}){return bt({section:e},{element:i,input:o,allowedEdges:["top","bottom"]})},async onDrag({self:o}){s(m,D(o.element)),t(w)||await tt(),O(),(_.id!==o.data.section.id||_.position!==S(o.data))&&(_={id:o.data.section.id,position:S(o.data)})},onDragEnter(){R=!0},onDragLeave(){I(),R=!1},onDrop({self:o,source:i}){const n=r().find(x=>x.id===o.data.section.id).index,U=i.data.block,l=S(o.data);l==="top"?J(U,n):l==="bottom"&&J(U,n+1),I()}})}Et(()=>{ut(d.page)}),st(()=>{}),st(()=>{t(H)===r().length&&t(H)!==0&&s(C,!0)});var et=oe(),ot=K(et);E(ot,()=>!t(C)&&r().length>0,a=>{var e=Vt(),o=rt(e);Pt(o,()=>Ot.Spinner,(i,n)=>{n(i,{variant:"loop"})}),Y(e),T(a,e)});var at=j(ot,2);E(at,()=>t(w),a=>{Nt(a,{get node(){return t(f)},set node(e){s(f,D(e))}})});var nt=j(at,2);E(nt,()=>t(y),a=>{Wt(a,{get node(){return t(u)},set node(e){s(u,D(e))},get id(){return t(p).id},get i(){return t(p).index},$$events:{delete:async()=>It(t(p).id),"edit-code":()=>Z(t(p).id,!0),"edit-content":()=>Z(t(p).id),moveUp:async()=>{s(k,!0),W(),await _t(t(p),t(p).index-1),setTimeout(()=>{s(k,!1)},300)},moveDown:async()=>{s(k,!0),W(),await _t(t(p),t(p).index+1),setTimeout(()=>{s(k,!1)},300)}}})});var $=j(nt,2);Ht($,a=>s(h,a),()=>t(h)),Ct($,13,()=>r().sort((a,e)=>a.index-e.index),a=>a.id,(a,e)=>{var o=ee();const i=q(()=>z().find(l=>l.active_block===t(e).id)),n=q(()=>!1);o.__mousemove=[Zt,e,k,y,Q];var U=rt(o);E(U,()=>!t(e).symbol,l=>{Qt(l,{get section(){return t(e)},$$events:{mount:()=>dt(H)}})},l=>{var x=te();const $t=q(()=>N().find(X=>X.id===t(e).symbol));var it=K(x);E(it,()=>t(i)&&!t(n),X=>{Yt(X,{get locked(){return t(i)}})});var xt=j(it,2);Ft(xt,{get section(){return t(e)},get block(){return t($t)},$$events:{lock:()=>G(t(e).id),unlock:()=>void 0,mount:()=>dt(H),resize:()=>{t(y)&&V()}}}),T(l,x)}),Y(o),lt(()=>{B(o,"data-section",t(e).id),B(o,"data-symbol",t(e).symbol),B(o,"id",`section-${t(e).id??""}`),B(o,"data-test-id",`page-type-section-${t(e).id??""}`),ft(o,"locked",t(i))}),pt("mouseenter",o,async({target:l})=>{t(e).symbol&&(s(p,D(t(e))),s(m,D(l)),t(k)||Q())}),pt("mouseleave",o,W),gt(o,(l,x)=>wt(l,x),()=>t(e)),Bt(1,o,()=>St,()=>({duration:100})),Lt(o,()=>jt,()=>({duration:100})),T(a,o)}),Y($),lt(()=>{B($,"lang",b()),ft($,"fadein",t(C))}),gt($,a=>kt(a)),T(v,et),A()}Tt(["mousemove"]);function ye(v,d){M(d,!0);const c=ht(),r=()=>L(At,"$compilers_registered",c);var b=Dt(),z=K(b);E(z,r,N=>{var C=q(()=>({...d.data.page_type,sections:d.data.sections}));ae(N,{get page(){return t(C)}})}),T(v,b),A()}export{ye as component};
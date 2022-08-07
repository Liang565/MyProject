import{k as Pt,l as Dt,B as ot,m as It,n as we,p as Se,q as k,s as Oe,t as Ae,v as P,x as ce,o as Te,y as st,z as it,A as $t,d as F,f as m,C as le,D as _t,E as rt,T as Nt,F as Lt}from"./user.0f0244cd.js";import{K as Be,i as at,g as oe,l as xe,h as Ft,I as zt,d as ue,o as Rt,T as kt,e as Mt,f as jt,Y as Ht,Z as ct,q as y,O as se,a as Kt,V as he}from"./reactivity.esm-bundler.f180a2dc.js";const Yt="http://www.w3.org/2000/svg",N=typeof document!="undefined"?document:null,Fe=N&&N.createElement("template"),Ut={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,o)=>{const s=t?N.createElementNS(Yt,e):N.createElement(e,n?{is:n}:void 0);return e==="select"&&o&&o.multiple!=null&&s.setAttribute("multiple",o.multiple),s},createText:e=>N.createTextNode(e),createComment:e=>N.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>N.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,o,s,i){const r=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Fe.innerHTML=o?`<svg>${e}</svg>`:e;const c=Fe.content;if(o){const a=c.firstChild;for(;a.firstChild;)c.appendChild(a.firstChild);c.removeChild(a)}t.insertBefore(c,n)}return[r?r.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function qt(e,t,n){const o=e._vtc;o&&(t=(t?[t,...o]:[...o]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Vt(e,t,n){const o=e.style,s=oe(n);if(n&&!s){for(const i in n)ye(o,i,n[i]);if(t&&!oe(t))for(const i in t)n[i]==null&&ye(o,i,"")}else{const i=o.display;s?t!==n&&(o.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(o.display=i)}}const ze=/\s*!important$/;function ye(e,t,n){if(ue(n))n.forEach(o=>ye(e,t,o));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const o=Wt(e,t);ze.test(n)?e.setProperty(Be(o),n.replace(ze,""),"important"):e[o]=n}}const Re=["Webkit","Moz","ms"],ve={};function Wt(e,t){const n=ve[t];if(n)return n;let o=Mt(t);if(o!=="filter"&&o in e)return ve[t]=o;o=jt(o);for(let s=0;s<Re.length;s++){const i=Re[s]+o;if(i in e)return ve[t]=i}return t}const ke="http://www.w3.org/1999/xlink";function Xt(e,t,n,o,s){if(o&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(ke,t.slice(6,t.length)):e.setAttributeNS(ke,t,n);else{const i=Ht(t);n==null||i&&!ct(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Zt(e,t,n,o,s,i,r){if(t==="innerHTML"||t==="textContent"){o&&r(o,s,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const a=n==null?"":n;(e.value!==a||e.tagName==="OPTION")&&(e.value=a),n==null&&e.removeAttribute(t);return}let c=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=ct(n):n==null&&a==="string"?(n="",c=!0):a==="number"&&(n=0,c=!0)}try{e[t]=n}catch{}c&&e.removeAttribute(t)}const[lt,Gt]=(()=>{let e=Date.now,t=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let Ee=0;const Jt=Promise.resolve(),Qt=()=>{Ee=0},en=()=>Ee||(Jt.then(Qt),Ee=lt());function tn(e,t,n,o){e.addEventListener(t,n,o)}function nn(e,t,n,o){e.removeEventListener(t,n,o)}function on(e,t,n,o,s=null){const i=e._vei||(e._vei={}),r=i[t];if(o&&r)r.value=o;else{const[c,a]=sn(t);if(o){const f=i[t]=rn(o,s);tn(e,c,f,a)}else r&&(nn(e,c,r,a),i[t]=void 0)}}const Me=/(?:Once|Passive|Capture)$/;function sn(e){let t;if(Me.test(e)){t={};let n;for(;n=e.match(Me);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[Be(e.slice(2)),t]}function rn(e,t){const n=o=>{const s=o.timeStamp||lt();(Gt||s>=n.attached-1)&&It(an(o,n.value),t,5,[o])};return n.value=e,n.attached=en(),n}function an(e,t){if(ue(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(o=>s=>!s._stopped&&o&&o(s))}else return t}const je=/^on[a-z]/,cn=(e,t,n,o,s=!1,i,r,c,a)=>{t==="class"?qt(e,o,s):t==="style"?Vt(e,n,o):Rt(t)?kt(t)||on(e,t,n,o,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):ln(e,t,o,s))?Zt(e,t,o,i,r,c,a):(t==="true-value"?e._trueValue=o:t==="false-value"&&(e._falseValue=o),Xt(e,t,o,s))};function ln(e,t,n,o){return o?!!(t==="innerHTML"||t==="textContent"||t in e&&je.test(t)&&at(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||je.test(t)&&oe(n)?!1:t in e}const B="transition",Y="animation",fe=(e,{slots:t})=>Dt(ot,un(e),t);fe.displayName="Transition";const ut={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};fe.props=xe({},ot.props,ut);const $=(e,t=[])=>{ue(e)?e.forEach(n=>n(...t)):e&&e(...t)},He=e=>e?ue(e)?e.some(t=>t.length>1):e.length>1:!1;function un(e){const t={};for(const l in e)l in ut||(t[l]=e[l]);if(e.css===!1)return t;const{name:n="v",type:o,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:r=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:a=i,appearActiveClass:f=r,appearToClass:u=c,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:v=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=e,h=fn(s),G=h&&h[0],me=h&&h[1],{onBeforeEnter:J,onEnter:Q,onEnterCancelled:ee,onLeave:j,onLeaveCancelled:p,onBeforeAppear:S=J,onAppear:R=Q,onAppearCancelled:H=ee}=t,K=(l,E,I)=>{_(l,E?u:c),_(l,E?f:r),I&&I()},$e=(l,E)=>{l._isLeaving=!1,_(l,d),_(l,g),_(l,v),E&&E()},_e=l=>(E,I)=>{const Ne=l?R:Q,Le=()=>K(E,l,I);$(Ne,[E,Le]),Ke(()=>{_(E,l?a:i),x(E,l?u:c),He(Ne)||Ye(E,o,G,Le)})};return xe(t,{onBeforeEnter(l){$(J,[l]),x(l,i),x(l,r)},onBeforeAppear(l){$(S,[l]),x(l,a),x(l,f)},onEnter:_e(!1),onAppear:_e(!0),onLeave(l,E){l._isLeaving=!0;const I=()=>$e(l,E);x(l,d),vn(),x(l,v),Ke(()=>{!l._isLeaving||(_(l,d),x(l,g),He(j)||Ye(l,o,me,I))}),$(j,[l,I])},onEnterCancelled(l){K(l,!1),$(ee,[l])},onAppearCancelled(l){K(l,!0),$(H,[l])},onLeaveCancelled(l){$e(l),$(p,[l])}})}function fn(e){if(e==null)return null;if(Ft(e))return[pe(e.enter),pe(e.leave)];{const t=pe(e);return[t,t]}}function pe(e){return zt(e)}function x(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function _(e,t){t.split(/\s+/).forEach(o=>o&&e.classList.remove(o));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function Ke(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let dn=0;function Ye(e,t,n,o){const s=e._endId=++dn,i=()=>{s===e._endId&&o()};if(n)return setTimeout(i,n);const{type:r,timeout:c,propCount:a}=mn(e,t);if(!r)return o();const f=r+"end";let u=0;const d=()=>{e.removeEventListener(f,v),i()},v=g=>{g.target===e&&++u>=a&&d()};setTimeout(()=>{u<a&&d()},c+1),e.addEventListener(f,v)}function mn(e,t){const n=window.getComputedStyle(e),o=h=>(n[h]||"").split(", "),s=o(B+"Delay"),i=o(B+"Duration"),r=Ue(s,i),c=o(Y+"Delay"),a=o(Y+"Duration"),f=Ue(c,a);let u=null,d=0,v=0;t===B?r>0&&(u=B,d=r,v=i.length):t===Y?f>0&&(u=Y,d=f,v=a.length):(d=Math.max(r,f),u=d>0?r>f?B:Y:null,v=u?u===B?i.length:a.length:0);const g=u===B&&/\b(transform|all)(,|$)/.test(n[B+"Property"]);return{type:u,timeout:d,propCount:v,hasTransform:g}}function Ue(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,o)=>qe(n)+qe(e[o])))}function qe(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function vn(){return document.body.offsetHeight}const pn=["ctrl","shift","alt","meta"],gn={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>pn.some(n=>e[`${n}Key`]&&!t.includes(n))},Lo=(e,t)=>(n,...o)=>{for(let s=0;s<t.length;s++){const i=gn[t[s]];if(i&&i(n,t))return}return e(n,...o)},hn={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Fo=(e,t)=>n=>{if(!("key"in n))return;const o=Be(n.key);if(t.some(s=>s===o||hn[s]===o))return e(n)},ft={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):U(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:o}){!t!=!n&&(o?t?(o.beforeEnter(e),U(e,!0),o.enter(e)):o.leave(e,()=>{U(e,!1)}):U(e,t))},beforeUnmount(e,{value:t}){U(e,t)}};function U(e,t){e.style.display=t?e._vod:"none"}const yn=xe({patchProp:cn},Ut);let Ve;function En(){return Ve||(Ve=Pt(yn))}const Cn=(...e)=>{const t=En().createApp(...e),{mount:n}=t;return t.mount=o=>{const s=bn(o);if(!s)return;const i=t._component;!at(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const r=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),r},t};function bn(e){return oe(e)?document.querySelector(e):e}function dt(){}const A=Object.assign,mt=typeof window!="undefined";function We(e,t){const n=t.split(".");let o=e;return n.forEach(s=>{var i;o=(i=o[s])!=null?i:""}),o}function wn(e,t,n){return t.reduce((o,s)=>((!n||e[s]!==void 0)&&(o[s]=e[s]),o),{})}const ie=null,C=[Number,String],L={type:Boolean,default:!0},Sn=e=>({type:Number,default:e}),zo=e=>({type:C,default:e}),w=e=>({type:String,default:e});var Z=typeof window!="undefined";function Xe(e){return Z?requestAnimationFrame(e):-1}function Ro(e){Xe(()=>Xe(e))}function ko(e){const t=we(e,null);if(t){const n=ce(),{link:o,unlink:s,internalChildren:i}=t;o(n),Se(()=>s(n));const r=k(()=>i.indexOf(n));return{parent:t,index:r}}return{parent:null,index:y(-1)}}function On(e){const t=[],n=o=>{Array.isArray(o)&&o.forEach(s=>{var i;$t(s)&&(t.push(s),(i=s.component)!=null&&i.subTree&&(t.push(s.component.subTree),n(s.component.subTree.children)),s.children&&n(s.children))})};return n(e),t}function An(e,t,n){const o=On(e.subTree.children);n.sort((i,r)=>o.indexOf(i.vnode)-o.indexOf(r.vnode));const s=n.map(i=>i.proxy);t.sort((i,r)=>{const c=s.indexOf(i),a=s.indexOf(r);return c-a})}function Mo(e){const t=se([]),n=se([]),o=ce();return{children:t,linkChildren:i=>{Oe(e,Object.assign({link:a=>{a.proxy&&(n.push(a),t.push(a.proxy),An(o,t,n))},unlink:a=>{const f=n.indexOf(a);t.splice(f,1),n.splice(f,1)},children:t,internalChildren:n},i))}}}function vt(e){let t;Te(()=>{e(),st(()=>{t=!0})}),it(()=>{t&&e()})}function Tn(e,t,n={}){if(!Z)return;const{target:o=window,passive:s=!1,capture:i=!1}=n;let r;const c=f=>{const u=he(f);u&&!r&&(u.addEventListener(e,t,{capture:i,passive:s}),r=!0)},a=f=>{const u=he(f);u&&r&&(u.removeEventListener(e,t,i),r=!1)};Se(()=>a(o)),Ae(()=>a(o)),vt(()=>c(o)),Kt(o)&&P(o,(f,u)=>{a(u),c(f)})}var te,ge;function Bn(){if(!te&&(te=y(0),ge=y(0),Z)){const e=()=>{te.value=window.innerWidth,ge.value=window.innerHeight};e(),window.addEventListener("resize",e,{passive:!0}),window.addEventListener("orientationchange",e,{passive:!0})}return{width:te,height:ge}}var xn=/scroll|auto/i,Pn=Z?window:void 0;function Dn(e){return e.tagName!=="HTML"&&e.tagName!=="BODY"&&e.nodeType===1}function In(e,t=Pn){let n=e;for(;n&&n!==t&&Dn(n);){const{overflowY:o}=window.getComputedStyle(n);if(xn.test(o))return n;n=n.parentNode}return t}var ne;function jo(){if(!ne&&(ne=y("visible"),Z)){const e=()=>{ne.value=document.hidden?"hidden":"visible"};e(),window.addEventListener("visibilitychange",e)}return ne}const D=e=>e!=null,Ce=e=>typeof e=="function",Pe=e=>e!==null&&typeof e=="object",$n=e=>Pe(e)&&Ce(e.then)&&Ce(e.catch),pt=e=>typeof e=="number"||/^\d+(\.\d+)?$/.test(e),_n=()=>mt?/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()):!1;_n();const Nn=e=>e.stopPropagation();function gt(e,t){(typeof e.cancelable!="boolean"||e.cancelable)&&e.preventDefault(),t&&Nn(e)}function Ho(e){const t=he(e);if(!t)return!1;const n=window.getComputedStyle(t),o=n.display==="none",s=t.offsetParent===null&&n.position!=="fixed";return o||s}const{width:Ko,height:Yo}=Bn();function T(e){if(D(e))return pt(e)?`${e}px`:String(e)}function Ln(e){if(D(e)){if(Array.isArray(e))return{width:T(e[0]),height:T(e[1])};const t=T(e);return{width:t,height:t}}}function Fn(e){const t={};return e!==void 0&&(t.zIndex=+e),t}const zn=/-(\w)/g,ht=e=>e.replace(zn,(t,n)=>n.toUpperCase()),Rn=e=>e.replace(/([A-Z])/g,"-$1").toLowerCase().replace(/^-/,""),Uo=(e,t,n)=>Math.min(Math.max(e,t),n),{hasOwnProperty:kn}=Object.prototype;function Mn(e,t,n){const o=t[n];!D(o)||(!kn.call(e,n)||!Pe(o)?e[n]=o:e[n]=yt(Object(e[n]),o))}function yt(e,t){return Object.keys(t).forEach(n=>{Mn(e,t,n)}),e}var jn={name:"\u59D3\u540D",tel:"\u7535\u8BDD",save:"\u4FDD\u5B58",confirm:"\u786E\u8BA4",cancel:"\u53D6\u6D88",delete:"\u5220\u9664",loading:"\u52A0\u8F7D\u4E2D...",noCoupon:"\u6682\u65E0\u4F18\u60E0\u5238",nameEmpty:"\u8BF7\u586B\u5199\u59D3\u540D",addContact:"\u6DFB\u52A0\u8054\u7CFB\u4EBA",telInvalid:"\u8BF7\u586B\u5199\u6B63\u786E\u7684\u7535\u8BDD",vanCalendar:{end:"\u7ED3\u675F",start:"\u5F00\u59CB",title:"\u65E5\u671F\u9009\u62E9",weekdays:["\u65E5","\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94","\u516D"],monthTitle:(e,t)=>`${e}\u5E74${t}\u6708`,rangePrompt:e=>`\u6700\u591A\u9009\u62E9 ${e} \u5929`},vanCascader:{select:"\u8BF7\u9009\u62E9"},vanPagination:{prev:"\u4E0A\u4E00\u9875",next:"\u4E0B\u4E00\u9875"},vanPullRefresh:{pulling:"\u4E0B\u62C9\u5373\u53EF\u5237\u65B0...",loosing:"\u91CA\u653E\u5373\u53EF\u5237\u65B0..."},vanSubmitBar:{label:"\u5408\u8BA1:"},vanCoupon:{unlimited:"\u65E0\u95E8\u69DB",discount:e=>`${e}\u6298`,condition:e=>`\u6EE1${e}\u5143\u53EF\u7528`},vanCouponCell:{title:"\u4F18\u60E0\u5238",count:e=>`${e}\u5F20\u53EF\u7528`},vanCouponList:{exchange:"\u5151\u6362",close:"\u4E0D\u4F7F\u7528",enable:"\u53EF\u7528",disabled:"\u4E0D\u53EF\u7528",placeholder:"\u8F93\u5165\u4F18\u60E0\u7801"},vanAddressEdit:{area:"\u5730\u533A",postal:"\u90AE\u653F\u7F16\u7801",areaEmpty:"\u8BF7\u9009\u62E9\u5730\u533A",addressEmpty:"\u8BF7\u586B\u5199\u8BE6\u7EC6\u5730\u5740",postalEmpty:"\u90AE\u653F\u7F16\u7801\u4E0D\u6B63\u786E",addressDetail:"\u8BE6\u7EC6\u5730\u5740",defaultAddress:"\u8BBE\u4E3A\u9ED8\u8BA4\u6536\u8D27\u5730\u5740"},vanAddressList:{add:"\u65B0\u589E\u5730\u5740"}};const Ze=y("zh-CN"),Ge=se({"zh-CN":jn}),Hn={messages(){return Ge[Ze.value]},use(e,t){Ze.value=e,this.add({[e]:t})},add(e={}){yt(Ge,e)}};var Kn=Hn;function Yn(e){const t=ht(e)+".";return(n,...o)=>{const s=Kn.messages(),i=We(s,t+n)||We(s,n);return Ce(i)?i(...o):i}}function be(e,t){return t?typeof t=="string"?` ${e}--${t}`:Array.isArray(t)?t.reduce((n,o)=>n+be(e,o),""):Object.keys(t).reduce((n,o)=>n+(t[o]?be(e,o):""),""):""}function Un(e){return(t,n)=>(t&&typeof t!="string"&&(n=t,t=""),t=t?`${e}__${t}`:e,`${t}${be(t,n)}`)}function z(e){const t=`van-${e}`;return[t,Un(t),Yn(t)]}const De="van-hairline",qo=`${De}--top`,Vo=`${De}--left`,Wo=`${De}--surround`,qn="van-haptics-feedback";function Vn(e,{args:t=[],done:n,canceled:o}){if(e){const s=e.apply(null,t);$n(s)?s.then(i=>{i?n():o&&o()}).catch(dt):s?n():o&&o()}else n()}function M(e){return e.install=t=>{const{name:n}=e;t.component(n,e),t.component(ht(`-${n}`),e)},e}function Et(e){const t=ce();t&&A(t.proxy,e)}const[Wn,Je]=z("badge"),Xn={dot:Boolean,max:C,tag:w("div"),color:String,offset:Array,content:C,showZero:L,position:w("top-right")};var Zn=F({name:Wn,props:Xn,setup(e,{slots:t}){const n=()=>{if(t.content)return!0;const{content:r,showZero:c}=e;return D(r)&&r!==""&&(c||r!==0)},o=()=>{const{dot:r,max:c,content:a}=e;if(!r&&n())return t.content?t.content():D(c)&&pt(a)&&+a>c?`${c}+`:a},s=k(()=>{const r={background:e.color};if(e.offset){const[c,a]=e.offset;t.default?(r.top=T(a),typeof c=="number"?r.right=T(-c):r.right=c.startsWith("-")?c.replace("-",""):`-${c}`):(r.marginTop=T(a),r.marginLeft=T(c))}return r}),i=()=>{if(n()||e.dot)return m("div",{class:Je([e.position,{dot:e.dot,fixed:!!t.default}]),style:s.value},[o()])};return()=>{if(t.default){const{tag:r}=e;return m(r,{class:Je("wrapper")},{default:()=>[t.default(),i()]})}return i()}}});const Gn=M(Zn),[Ct,Jn]=z("config-provider"),bt=Symbol(Ct),Qn={tag:w("div"),themeVars:Object,iconPrefix:String};function eo(e){const t={};return Object.keys(e).forEach(n=>{t[`--van-${Rn(n)}`]=e[n]}),t}F({name:Ct,props:Qn,setup(e,{slots:t}){const n=k(()=>{if(e.themeVars)return eo(e.themeVars)});return Oe(bt,e),()=>m(e.tag,{class:Jn(),style:n.value},{default:()=>{var o;return[(o=t.default)==null?void 0:o.call(t)]}})}});const[to,Qe]=z("icon"),no=e=>e==null?void 0:e.includes("/"),oo={dot:Boolean,tag:w("i"),name:String,size:C,badge:C,color:String,badgeProps:Object,classPrefix:String};var so=F({name:to,props:oo,setup(e,{slots:t}){const n=we(bt,null),o=k(()=>e.classPrefix||(n==null?void 0:n.iconPrefix)||Qe());return()=>{const{tag:s,dot:i,name:r,size:c,badge:a,color:f}=e,u=no(r);return m(Gn,le({dot:i,tag:s,class:[o.value,u?"":`${o.value}-${r}`],style:{color:f,fontSize:T(c)},content:a},e.badgeProps),{default:()=>{var d;return[(d=t.default)==null?void 0:d.call(t),u&&m("img",{class:Qe("image"),src:r},null)]}})}}});const wt=M(so),[io,X]=z("loading"),ro=Array(12).fill(null).map((e,t)=>m("i",{class:X("line",String(t+1))},null)),ao=m("svg",{class:X("circular"),viewBox:"25 25 50 50"},[m("circle",{cx:"50",cy:"50",r:"20",fill:"none"},null)]),co={size:C,type:w("circular"),color:String,vertical:Boolean,textSize:C,textColor:String};var lo=F({name:io,props:co,setup(e,{slots:t}){const n=k(()=>A({color:e.color},Ln(e.size))),o=()=>{var s;if(t.default)return m("span",{class:X("text"),style:{fontSize:T(e.textSize),color:(s=e.textColor)!=null?s:e.color}},[t.default()])};return()=>{const{type:s,vertical:i}=e;return m("div",{class:X([s,{vertical:i}]),"aria-live":"polite","aria-busy":!0},[m("span",{class:X("spinner",s),style:n.value},[s==="spinner"?ro:ao]),o()])}}});const uo=M(lo),St={show:Boolean,zIndex:C,overlay:L,duration:C,teleport:[String,Object],lockScroll:L,lazyRender:L,beforeClose:Function,overlayStyle:Object,overlayClass:ie,transitionAppear:Boolean,closeOnClickOverlay:L},Xo=Object.keys(St);function fo(e,t){return e>t?"horizontal":t>e?"vertical":""}function mo(){const e=y(0),t=y(0),n=y(0),o=y(0),s=y(0),i=y(0),r=y(""),c=()=>r.value==="vertical",a=()=>r.value==="horizontal",f=()=>{n.value=0,o.value=0,s.value=0,i.value=0,r.value=""};return{move:v=>{const g=v.touches[0];n.value=(g.clientX<0?0:g.clientX)-e.value,o.value=g.clientY-t.value,s.value=Math.abs(n.value),i.value=Math.abs(o.value);const h=10;(!r.value||s.value<h&&i.value<h)&&(r.value=fo(s.value,i.value))},start:v=>{f(),e.value=v.touches[0].clientX,t.value=v.touches[0].clientY},reset:f,startX:e,startY:t,deltaX:n,deltaY:o,offsetX:s,offsetY:i,direction:r,isVertical:c,isHorizontal:a}}let q=0;const et="van-overflow-hidden";function vo(e,t){const n=mo(),o=a=>{n.move(a);const f=n.deltaY.value>0?"10":"01",u=In(a.target,e.value),{scrollHeight:d,offsetHeight:v,scrollTop:g}=u;let h="11";g===0?h=v>=d?"00":"01":g+v>=d&&(h="10"),h!=="11"&&n.isVertical()&&!(parseInt(h,2)&parseInt(f,2))&&gt(a,!0)},s=()=>{document.addEventListener("touchstart",n.start),document.addEventListener("touchmove",o,{passive:!1}),q||document.body.classList.add(et),q++},i=()=>{q&&(document.removeEventListener("touchstart",n.start),document.removeEventListener("touchmove",o),q--,q||document.body.classList.remove(et))},r=()=>t()&&s(),c=()=>t()&&i();vt(r),Ae(c),_t(c),P(t,a=>{a?s():i()})}function Ot(e){const t=y(!1);return P(e,n=>{n&&(t.value=n)},{immediate:!0}),n=>()=>t.value?n():null}const At=Symbol();function Zo(e){const t=we(At,null);t&&P(t,n=>{n&&e()})}const[po,go]=z("overlay"),ho={show:Boolean,zIndex:C,duration:C,className:ie,lockScroll:L,lazyRender:L,customStyle:Object};var yo=F({name:po,props:ho,setup(e,{slots:t}){const n=Ot(()=>e.show||!e.lazyRender),o=i=>{gt(i,!0)},s=n(()=>{var i;const r=A(Fn(e.zIndex),e.customStyle);return D(e.duration)&&(r.animationDuration=`${e.duration}s`),rt(m("div",{style:r,class:[go(),e.className],onTouchmove:e.lockScroll?o:dt},[(i=t.default)==null?void 0:i.call(t)]),[[ft,e.show]])});return()=>m(fe,{name:"van-fade",appear:!0},{default:s})}});const Eo=M(yo),Co=A({},St,{round:Boolean,position:w("center"),closeIcon:w("cross"),closeable:Boolean,transition:String,iconPrefix:String,closeOnPopstate:Boolean,closeIconPosition:w("top-right"),safeAreaInsetTop:Boolean,safeAreaInsetBottom:Boolean}),[bo,tt]=z("popup");let nt=2e3;var wo=F({name:bo,inheritAttrs:!1,props:Co,emits:["open","close","opened","closed","keydown","update:show","click-overlay","click-close-icon"],setup(e,{emit:t,attrs:n,slots:o}){let s,i;const r=y(),c=y(),a=Ot(()=>e.show||!e.lazyRender),f=k(()=>{const p={zIndex:r.value};if(D(e.duration)){const S=e.position==="center"?"animationDuration":"transitionDuration";p[S]=`${e.duration}s`}return p}),u=()=>{s||(e.zIndex!==void 0&&(nt=+e.zIndex),s=!0,r.value=++nt,t("open"))},d=()=>{s&&Vn(e.beforeClose,{done(){s=!1,t("close"),t("update:show",!1)}})},v=p=>{t("click-overlay",p),e.closeOnClickOverlay&&d()},g=()=>{if(e.overlay)return m(Eo,{show:e.show,class:e.overlayClass,zIndex:r.value,duration:e.duration,customStyle:e.overlayStyle,onClick:v},{default:o["overlay-content"]})},h=p=>{t("click-close-icon",p),d()},G=()=>{if(e.closeable)return m(wt,{role:"button",tabindex:0,name:e.closeIcon,class:[tt("close-icon",e.closeIconPosition),qn],classPrefix:e.iconPrefix,onClick:h},null)},me=()=>t("opened"),J=()=>t("closed"),Q=p=>t("keydown",p),ee=a(()=>{var p;const{round:S,position:R,safeAreaInsetTop:H,safeAreaInsetBottom:K}=e;return rt(m("div",le({ref:c,style:f.value,class:[tt({round:S,[R]:R}),{"van-safe-area-top":H,"van-safe-area-bottom":K}],onKeydown:Q},n),[(p=o.default)==null?void 0:p.call(o),G()]),[[ft,e.show]])}),j=()=>{const{position:p,transition:S,transitionAppear:R}=e,H=p==="center"?"van-fade":`van-popup-slide-${p}`;return m(fe,{name:S||H,appear:R,onAfterEnter:me,onAfterLeave:J},{default:ee})};return P(()=>e.show,p=>{p&&!s&&(u(),n.tabindex===0&&st(()=>{var S;(S=c.value)==null||S.focus()})),!p&&s&&(s=!1,t("close"))}),Et({popupRef:c}),vo(c,()=>e.show&&e.lockScroll),Tn("popstate",()=>{e.closeOnPopstate&&(d(),i=!1)}),Te(()=>{e.show&&u()}),it(()=>{i&&(t("update:show",!0),i=!1)}),Ae(()=>{e.show&&(d(),i=!0)}),Oe(At,()=>e.show),()=>e.teleport?m(Nt,{to:e.teleport},{default:()=>[g(),j()]}):m(Lt,null,[g(),j()])}});const So=M(wo);function Oo(){const e=se({show:!1}),t=s=>{e.show=s},n=s=>{A(e,s,{transitionAppear:!0}),t(!0)},o=()=>t(!1);return Et({open:n,close:o,toggle:t}),{open:n,close:o,state:e,toggle:t}}function Ao(e){const t=Cn(e),n=document.createElement("div");return document.body.appendChild(n),{instance:t.mount(n),unmount(){t.unmount(),document.body.removeChild(n)}}}let V=0;function To(e){e?(V||document.body.classList.add("van-toast--unclickable"),V++):V&&(V--,V||document.body.classList.remove("van-toast--unclickable"))}const[Bo,W]=z("toast"),xo=["show","overlay","teleport","transition","overlayClass","overlayStyle","closeOnClickOverlay"],Po={icon:String,show:Boolean,type:w("text"),overlay:Boolean,message:C,iconSize:C,duration:Sn(2e3),position:w("middle"),teleport:[String,Object],className:ie,iconPrefix:String,transition:w("van-fade"),loadingType:String,forbidClick:Boolean,overlayClass:ie,overlayStyle:Object,closeOnClick:Boolean,closeOnClickOverlay:Boolean};var Tt=F({name:Bo,props:Po,emits:["update:show"],setup(e,{emit:t}){let n,o=!1;const s=()=>{const u=e.show&&e.forbidClick;o!==u&&(o=u,To(o))},i=u=>t("update:show",u),r=()=>{e.closeOnClick&&i(!1)},c=()=>clearTimeout(n),a=()=>{const{icon:u,type:d,iconSize:v,iconPrefix:g,loadingType:h}=e;if(u||d==="success"||d==="fail")return m(wt,{name:u||d,size:v,class:W("icon"),classPrefix:g},null);if(d==="loading")return m(uo,{class:W("loading"),size:v,type:h},null)},f=()=>{const{type:u,message:d}=e;if(D(d)&&d!=="")return u==="html"?m("div",{key:0,class:W("text"),innerHTML:String(d)},null):m("div",{class:W("text")},[d])};return P(()=>[e.show,e.forbidClick],s),P(()=>[e.show,e.type,e.message,e.duration],()=>{c(),e.show&&e.duration>0&&(n=setTimeout(()=>{i(!1)},e.duration))}),Te(s),Se(s),()=>m(So,le({class:[W([e.position,{[e.type]:!e.icon}]),e.className],lockScroll:!1,onClick:r,onClosed:c,"onUpdate:show":i},wn(e,xo)),{default:()=>[a(),f()]})}});const Bt={icon:"",type:"text",message:"",className:"",overlay:!1,onClose:void 0,onOpened:void 0,duration:2e3,teleport:"body",iconSize:void 0,iconPrefix:void 0,position:"middle",transition:"van-fade",forbidClick:!1,loadingType:void 0,overlayClass:"",overlayStyle:void 0,closeOnClick:!1,closeOnClickOverlay:!1};let b=[],de=!1,re=A({},Bt);const ae=new Map;function xt(e){return Pe(e)?e:{message:e}}function Do(){const{instance:e,unmount:t}=Ao({setup(){const n=y(""),{open:o,state:s,close:i,toggle:r}=Oo(),c=()=>{de&&(b=b.filter(f=>f!==e),t())},a=()=>m(Tt,le(s,{onClosed:c,"onUpdate:show":r}),null);return P(n,f=>{s.message=f}),ce().render=a,{open:o,clear:i,message:n}}});return e}function Io(){if(!b.length||de){const e=Do();b.push(e)}return b[b.length-1]}function O(e={}){if(!mt)return{};const t=Io(),n=xt(e);return t.open(A({},re,ae.get(n.type||re.type),n)),t}const Ie=e=>t=>O(A({type:e},xt(t)));O.loading=Ie("loading");O.success=Ie("success");O.fail=Ie("fail");O.clear=e=>{var t;b.length&&(e?(b.forEach(n=>{n.clear()}),b=[]):de?(t=b.shift())==null||t.clear():b[0].clear())};function $o(e,t){typeof e=="string"?ae.set(e,t):A(re,e)}O.setDefaultOptions=$o;O.resetDefaultOptions=e=>{typeof e=="string"?ae.delete(e):(re=A({},Bt),ae.clear())};O.allowMultiple=(e=!0)=>{de=e};O.install=e=>{e.use(M(Tt)),e.config.globalProperties.$toast=O};export{ft as A,Wo as B,zo as C,De as D,Gn as E,mo as F,Ko as G,Yo as H,wt as I,jo as J,Zo as K,uo as L,Ho as M,Ro as N,Uo as O,So as P,O as T,M as a,ko as b,z as c,Et as d,A as e,St as f,ie as g,Xo as h,wn as i,T as j,Fo as k,Vo as l,w as m,C as n,qo as o,gt as p,Vn as q,dt as r,Ce as s,L as t,Mo as u,mt as v,Lo as w,Ao as x,Oo as y,D as z};
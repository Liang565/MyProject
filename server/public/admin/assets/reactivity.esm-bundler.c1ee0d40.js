function F(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const It="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Me=F(It);function Te(t){return!!t||t===""}function Ot(t){if(f(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=y(r)?zt(r):Ot(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(y(t))return t;if(g(t))return t}}const xt=/;(?![^(]*\))/g,Pt=/:(.+)/;function zt(t){const e={};return t.split(xt).forEach(n=>{if(n){const r=n.split(Pt);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function jt(t){let e="";if(y(t))e=t;else if(f(t))for(let n=0;n<t.length;n++){const r=jt(t[n]);r&&(e+=r+" ")}else if(g(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const ye=t=>y(t)?t:t==null?"":f(t)||g(t)&&(t.toString===lt||!N(t.toString))?JSON.stringify(t,ft,2):String(t),ft=(t,e)=>e&&e.__v_isRef?ft(t,e.value):T(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Ct(e)?{[`Set(${e.size})`]:[...e.values()]}:g(e)&&!f(e)&&!Ht(e)?String(e):e,Ie={},Oe=[],Kt=()=>{},xe=()=>!1,At=/^on[^a-z]/,Pe=t=>At.test(t),ze=t=>t.startsWith("onUpdate:"),Nt=Object.assign,je=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Bt=Object.prototype.hasOwnProperty,B=(t,e)=>Bt.call(t,e),f=Array.isArray,T=t=>C(t)==="[object Map]",Ct=t=>C(t)==="[object Set]",N=t=>typeof t=="function",y=t=>typeof t=="string",Y=t=>typeof t=="symbol",g=t=>t!==null&&typeof t=="object",Ke=t=>g(t)&&N(t.then)&&N(t.catch),lt=Object.prototype.toString,C=t=>lt.call(t),Vt=t=>C(t).slice(8,-1),Ht=t=>C(t)==="[object Object]",L=t=>y(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ae=F(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),V=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Ut=/-(\w)/g,Ne=V(t=>t.replace(Ut,(e,n)=>n?n.toUpperCase():"")),Dt=/\B([A-Z])/g,Be=V(t=>t.replace(Dt,"-$1").toLowerCase()),$t=V(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ce=V(t=>t?`on${$t(t)}`:""),J=(t,e)=>!Object.is(t,e),Ve=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Gt=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},He=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let et;const Ue=()=>et||(et=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let p;class De{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&p&&(this.parent=p,this.index=(p.scopes||(p.scopes=[])).push(this)-1)}run(e){if(this.active){const n=p;try{return p=this,e()}finally{p=n}}}on(){p=this}off(){p=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function Wt(t,e=p){e&&e.active&&e.effects.push(t)}const Z=t=>{const e=new Set(t);return e.w=0,e.n=0,e},ut=t=>(t.w&b)>0,ht=t=>(t.n&b)>0,Ft=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=b},Yt=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];ut(s)&&!ht(s)?s.delete(t):e[n++]=s,s.w&=~b,s.n&=~b}e.length=n}},D=new WeakMap;let M=0,b=1;const $=30;let u;const S=Symbol(""),G=Symbol("");class Lt{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Wt(this,r)}run(){if(!this.active)return this.fn();let e=u,n=m;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=u,u=this,m=!0,b=1<<++M,M<=$?Ft(this):nt(this),this.fn()}finally{M<=$&&Yt(this),b=1<<--M,u=this.parent,m=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){u===this?this.deferStop=!0:this.active&&(nt(this),this.onStop&&this.onStop(),this.active=!1)}}function nt(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let m=!0;const pt=[];function Jt(){pt.push(m),m=!1}function Zt(){const t=pt.pop();m=t===void 0?!0:t}function h(t,e,n){if(m&&u){let r=D.get(t);r||D.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Z()),dt(s)}}function dt(t,e){let n=!1;M<=$?ht(t)||(t.n|=b,n=!ut(t)):n=!t.has(u),n&&(t.add(u),u.deps.push(t))}function R(t,e,n,r,s,i){const o=D.get(t);if(!o)return;let c=[];if(e==="clear")c=[...o.values()];else if(n==="length"&&f(t))o.forEach((l,d)=>{(d==="length"||d>=r)&&c.push(l)});else switch(n!==void 0&&c.push(o.get(n)),e){case"add":f(t)?L(n)&&c.push(o.get("length")):(c.push(o.get(S)),T(t)&&c.push(o.get(G)));break;case"delete":f(t)||(c.push(o.get(S)),T(t)&&c.push(o.get(G)));break;case"set":T(t)&&c.push(o.get(S));break}if(c.length===1)c[0]&&W(c[0]);else{const l=[];for(const d of c)d&&l.push(...d);W(Z(l))}}function W(t,e){const n=f(t)?t:[...t];for(const r of n)r.computed&&st(r);for(const r of n)r.computed||st(r)}function st(t,e){(t!==u||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const qt=F("__proto__,__v_isRef,__isVue"),_t=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Y)),vt=q(),Qt=q(!1,!0),Xt=q(!0),rt=kt();function kt(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=a(this);for(let i=0,o=this.length;i<o;i++)h(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(a)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Jt();const r=a(this)[e].apply(this,n);return Zt(),r}}),t}function q(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?_e:Rt:e?bt:mt).get(r))return r;const o=f(r);if(!t&&o&&B(rt,s))return Reflect.get(rt,s,i);const c=Reflect.get(r,s,i);return(Y(s)?_t.has(s):qt(s))||(t||h(r,"get",s),e)?c:_(c)?o&&L(s)?c:c.value:g(c)?t?Et(c):St(c):c}}const te=gt(),ee=gt(!0);function gt(t=!1){return function(n,r,s,i){let o=n[r];if(I(o)&&_(o)&&!_(s))return!1;if(!t&&!I(s)&&(me(s)||(s=a(s),o=a(o)),!f(n)&&_(o)&&!_(s)))return o.value=s,!0;const c=f(n)&&L(r)?Number(r)<n.length:B(n,r),l=Reflect.set(n,r,s,i);return n===a(i)&&(c?J(s,o)&&R(n,"set",r,s):R(n,"add",r,s)),l}}function ne(t,e){const n=B(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&R(t,"delete",e,void 0),r}function se(t,e){const n=Reflect.has(t,e);return(!Y(e)||!_t.has(e))&&h(t,"has",e),n}function re(t){return h(t,"iterate",f(t)?"length":S),Reflect.ownKeys(t)}const wt={get:vt,set:te,deleteProperty:ne,has:se,ownKeys:re},ie={get:Xt,set(t,e){return!0},deleteProperty(t,e){return!0}},oe=Nt({},wt,{get:Qt,set:ee}),v=t=>t,H=t=>Reflect.getPrototypeOf(t);function P(t,e,n=!1,r=!1){t=t.__v_raw;const s=a(t),i=a(e);n||(e!==i&&h(s,"get",e),h(s,"get",i));const{has:o}=H(s),c=r?v:n?tt:O;if(o.call(s,e))return c(t.get(e));if(o.call(s,i))return c(t.get(i));t!==s&&t.get(e)}function z(t,e=!1){const n=this.__v_raw,r=a(n),s=a(t);return e||(t!==s&&h(r,"has",t),h(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function j(t,e=!1){return t=t.__v_raw,!e&&h(a(t),"iterate",S),Reflect.get(t,"size",t)}function it(t){t=a(t);const e=a(this);return H(e).has.call(e,t)||(e.add(t),R(e,"add",t,t)),this}function ot(t,e){e=a(e);const n=a(this),{has:r,get:s}=H(n);let i=r.call(n,t);i||(t=a(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?J(e,o)&&R(n,"set",t,e):R(n,"add",t,e),this}function ct(t){const e=a(this),{has:n,get:r}=H(e);let s=n.call(e,t);s||(t=a(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&R(e,"delete",t,void 0),i}function at(){const t=a(this),e=t.size!==0,n=t.clear();return e&&R(t,"clear",void 0,void 0),n}function K(t,e){return function(r,s){const i=this,o=i.__v_raw,c=a(o),l=e?v:t?tt:O;return!t&&h(c,"iterate",S),o.forEach((d,E)=>r.call(s,l(d),l(E),i))}}function A(t,e,n){return function(...r){const s=this.__v_raw,i=a(s),o=T(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,d=s[t](...r),E=n?v:e?tt:O;return!e&&h(i,"iterate",l?G:S),{next(){const{value:x,done:U}=d.next();return U?{value:x,done:U}:{value:c?[E(x[0]),E(x[1])]:E(x),done:U}},[Symbol.iterator](){return this}}}}function w(t){return function(...e){return t==="delete"?!1:this}}function ce(){const t={get(i){return P(this,i)},get size(){return j(this)},has:z,add:it,set:ot,delete:ct,clear:at,forEach:K(!1,!1)},e={get(i){return P(this,i,!1,!0)},get size(){return j(this)},has:z,add:it,set:ot,delete:ct,clear:at,forEach:K(!1,!0)},n={get(i){return P(this,i,!0)},get size(){return j(this,!0)},has(i){return z.call(this,i,!0)},add:w("add"),set:w("set"),delete:w("delete"),clear:w("clear"),forEach:K(!0,!1)},r={get(i){return P(this,i,!0,!0)},get size(){return j(this,!0)},has(i){return z.call(this,i,!0)},add:w("add"),set:w("set"),delete:w("delete"),clear:w("clear"),forEach:K(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=A(i,!1,!1),n[i]=A(i,!0,!1),e[i]=A(i,!1,!0),r[i]=A(i,!0,!0)}),[t,n,e,r]}const[ae,fe,le,ue]=ce();function Q(t,e){const n=e?t?ue:le:t?fe:ae;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(B(n,s)&&s in r?n:r,s,i)}const he={get:Q(!1,!1)},pe={get:Q(!1,!0)},de={get:Q(!0,!1)},mt=new WeakMap,bt=new WeakMap,Rt=new WeakMap,_e=new WeakMap;function ge(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function we(t){return t.__v_skip||!Object.isExtensible(t)?0:ge(Vt(t))}function St(t){return I(t)?t:X(t,!1,wt,he,mt)}function $e(t){return X(t,!1,oe,pe,bt)}function Et(t){return X(t,!0,ie,de,Rt)}function X(t,e,n,r,s){if(!g(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=we(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function k(t){return I(t)?k(t.__v_raw):!!(t&&t.__v_isReactive)}function I(t){return!!(t&&t.__v_isReadonly)}function me(t){return!!(t&&t.__v_isShallow)}function Ge(t){return k(t)||I(t)}function a(t){const e=t&&t.__v_raw;return e?a(e):t}function We(t){return Gt(t,"__v_skip",!0),t}const O=t=>g(t)?St(t):t,tt=t=>g(t)?Et(t):t;function Mt(t){m&&u&&(t=a(t),dt(t.dep||(t.dep=Z())))}function Tt(t,e){t=a(t),t.dep&&W(t.dep)}function _(t){return!!(t&&t.__v_isRef===!0)}function Fe(t){return yt(t,!1)}function Ye(t){return yt(t,!0)}function yt(t,e){return _(t)?t:new be(t,e)}class be{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:a(e),this._value=n?e:O(e)}get value(){return Mt(this),this._value}set value(e){e=this.__v_isShallow?e:a(e),J(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:O(e),Tt(this))}}function Re(t){return _(t)?t.value:t}const Se={get:(t,e,n)=>Re(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return _(s)&&!_(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Le(t){return k(t)?t:new Proxy(t,Se)}class Ee{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Lt(e,()=>{this._dirty||(this._dirty=!0,Tt(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=a(this);return Mt(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Je(t,e,n=!1){let r,s;const i=N(t);return i?(r=t,s=Kt):(r=t.get,s=t.set),new Ee(r,s,i||!s,n)}export{xe as A,Ue as B,Ae as C,Ve as D,Ie as E,De as F,h as G,He as H,Ce as I,Be as J,a as K,B as L,St as M,Kt as N,Gt as O,$e as P,R as Q,Lt as R,ze as S,Ye as T,Re as U,Fe as V,Et as W,ye as X,Me as Y,Te as Z,_ as a,me as b,k as c,f as d,Ne as e,$t as f,y as g,g as h,N as i,Oe as j,Ge as k,Nt as l,Ot as m,jt as n,Pe as o,Je as p,J as q,je as r,Ct as s,T as t,Ht as u,Jt as v,Zt as w,Le as x,We as y,Ke as z};

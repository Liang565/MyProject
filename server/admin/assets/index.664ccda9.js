import{o as f,c as _,r as h,a as v,b as y,d as g,e as b,f as E,A as P}from"./vendor.afef0b8c.js";const L=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}};L();var m=(c,n)=>{const o=c.__vccOpts||c;for(const[t,e]of n)o[t]=e;return o};const k={};function O(c,n){const o=h("RouterView");return f(),_(o)}var A=m(k,[["render",O]]);const $="modulepreload",l={},w="/",u=function(n,o){return!o||o.length===0?n():Promise.all(o.map(t=>{if(t=`${w}${t}`,t in l)return;l[t]=!0;const e=t.endsWith(".css"),r=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${r}`))return;const s=document.createElement("link");if(s.rel=e?"stylesheet":$,e||(s.as="script",s.crossOrigin=""),s.href=t,document.head.appendChild(s),e)return new Promise((d,p)=>{s.addEventListener("load",d),s.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>n())},R={};function S(c,n){return f(),v("div",null,"home")}var x=m(R,[["render",S]]);const a=y({history:g("/"),routes:[{path:"/home",name:"home",component:x},{path:"/about",name:"about",component:()=>u(()=>import("./b.c6ee1349.js"),["assets/b.c6ee1349.js","assets/vendor.afef0b8c.js"])},{path:"/login",name:"login",meta:{title:"\u767B\u5F55\u9875",isPublic:!0},component:()=>u(()=>import("./login.ce1bfbfd.js"),["assets/login.ce1bfbfd.js","assets/vendor.afef0b8c.js"])}]});a.beforeEach((c,n,o)=>{if(c.meta.isPublic||localStorage.token)return o();a.push("/login")});const i=b(A);i.use(E());i.use(a);i.use(P);i.mount("#app");export{m as _};

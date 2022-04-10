import{o as A,c as R,r as l,a as C,m as i,u as L,b as m,d as O,e as S,f as P,g as F,h as b,t as U,i as x,j as p,w as _,F as B,k as v,l as V,n as N,p as $,q as D,A as I}from"./vendor.845bcacb.js";const q=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(e){if(e.ep)return;e.ep=!0;const n=t(e);fetch(e.href,n)}};q();var M=(o,r)=>{const t=o.__vccOpts||o;for(const[a,e]of r)t[a]=e;return t};const T={};function j(o,r){const t=l("RouterView");return A(),R(t)}var H=M(T,[["render",j]]);const K="modulepreload",w={},W="/",k=function(r,t){return!t||t.length===0?r():Promise.all(t.map(a=>{if(a=`${W}${a}`,a in w)return;w[a]=!0;const e=a.endsWith(".css"),n=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${n}`))return;const s=document.createElement("link");if(s.rel=e?"stylesheet":K,e||(s.as="script",s.crossOrigin=""),s.href=a,document.head.appendChild(s),e)return new Promise((u,c)=>{s.addEventListener("load",u),s.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>r())},d=C.create({baseURL:"http://localhost:3001/admin/api/"});d.interceptors.request.use(o=>(o.headers={Authorization:"Bearer "+localStorage.token},o));d.interceptors.response.use(o=>o.data,o=>{var r;return i.error(((r=o.response)==null?void 0:r.data.message)||"\u8BF7\u7A0D\u540E"),Promise.reject(o)});const z=()=>{const o=L();let r=m(!1),t=m({username:"",password:""});const a=()=>{console.log("\u6267\u884Cregister"),r.value=!0},e=async()=>{await d.post("auth/register",t.value),i.success("\u6CE8\u518C\u6210\u529F"),s.value.username=t.value.username,r.value=!1},n=()=>{console.log("RegisterOk"),t.value.password==""||t.value.username==""?i.error("\u8D26\u53F7\u6216\u8005\u5BC6\u7801\u4E3A\u7A7A"):e()};let s=m({username:"",password:""});const u=async()=>{console.log("\u6267\u884CloginUser");const g=await d.post("auth/login",s.value);i.success("\u767B\u9646\u6210\u529F"),localStorage.setItem("token",g.token),o.push("/home")},c=()=>{console.log("\u6267\u884ClogOut"),i.success("\u9000\u51FA"),localStorage.removeItem("token"),o.push("/")},E=O(()=>!(s.value.username&&s.value.password));let y=m();return{RegisterUser:a,regModel:t,LoginUser:u,logModel:s,registerVisibel:r,LogOut:c,RegisterSub:n,disabled:E,getUser:async()=>{const g=await d.get("auth/user");y.value=g.username},getUser_name:y}},G=v(" Header "),J=v("Content "),Q=v("Footer"),X=S({setup(o){const{getUser_name:r,getUser:t}=z();return P(()=>{t()}),(a,e)=>{const n=l("a-layout-header"),s=l("a-layout-content"),u=l("a-layout-footer"),c=l("a-layout");return A(),F(B,null,[b("div",null,U(x(r)),1),b("div",null,[p(c,null,{default:_(()=>[p(n,{class:"bg-red-500 text-white"},{default:_(()=>[G]),_:1}),p(s,null,{default:_(()=>[J]),_:1}),p(u,{class:"bg-white"},{default:_(()=>[Q]),_:1})]),_:1})])],64)}}}),h=V({history:N("/"),routes:[{path:"/home",name:"home",component:X},{path:"/about",name:"about",component:()=>k(()=>import("./b.49113050.js"),["assets/b.49113050.js","assets/vendor.845bcacb.js"])},{path:"/",name:"login",meta:{title:"\u767B\u5F55\u9875",isPublic:!0},component:()=>k(()=>import("./login.cda6d359.js"),["assets/login.cda6d359.js","assets/vendor.845bcacb.js"])}]});h.beforeEach((o,r,t)=>{if(o.meta.isPublic||localStorage.token)return t();h.push("/")});const f=$(H);f.use(D());f.use(h);f.use(I);f.mount("#app");export{z as R,M as _};

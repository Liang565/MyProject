import{d as p,r as u,o as _,c as s,e as c,j as l,h as d,F as f,k as v,n as h,p as E,_ as a}from"./index.ca94e480.js";import{h as k}from"./http.c785b6bf.js";/* empty css              *//* empty css              */function C(n){switch(n){case"../../components/components/grid.vue":return a(()=>import("./grid.b1766920.js"),["assets/grid.b1766920.js","assets/grid.02638d9d.css","assets/index.25f7f9da.css","assets/index.50f389b1.css","assets/index.08db7891.css","assets/index.11320eac.css","assets/index.9727babe.css","assets/http.c785b6bf.js","assets/http.06cfd034.css","assets/index.ca94e480.js","assets/index.831eb0f8.css"]);case"../../components/components/shopCard.vue":return a(()=>import("./shopCard.0f37b61c.js"),["assets/shopCard.0f37b61c.js","assets/index.25f7f9da.css","assets/index.50f389b1.css","assets/index.08db7891.css","assets/index.11320eac.css","assets/index.9727babe.css","assets/index.6502498e.css","assets/http.c785b6bf.js","assets/http.06cfd034.css","assets/index.ca94e480.js","assets/index.831eb0f8.css"]);case"../../components/components/swipe.vue":return a(()=>import("./swipe.132db3d2.js"),["assets/swipe.132db3d2.js","assets/swipe.8a05e310.css","assets/index.25f7f9da.css","assets/index.cee5ebe4.css","assets/index.9727babe.css","assets/index.7658a957.css","assets/index.ca94e480.js","assets/index.831eb0f8.css"]);default:return new Promise(function(o,t){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(t.bind(null,new Error("Unknown variable dynamic import: "+n)))})}}const b=p({__name:"hotGoods",setup(n){let o=u(),t=u();const i=e=>E(()=>C(`../../components/components/${e}.vue`)),m=async()=>{const e=await k.post("build-home/findone",{name:"\u5546\u54C1\u63A8\u8350"});t.value=e,o.value=e.components};return _(()=>{m()}),(e,w)=>(s(!0),c(f,null,l(d(o),r=>(s(),c("div",null,[(s(),v(h(i(r.name)),{option:r.option,content:r.content},null,8,["option","content"]))]))),256))}});export{b as default};

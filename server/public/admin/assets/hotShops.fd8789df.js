import{_ as i}from"./index.550ade87.js";import{h as p}from"./http.b40e557a.js";import{d as _,o as l,b as o,c as a,F as d,g as f,h as v,i as h,j as E}from"./user.dc7ceeb0.js";import{q as c,V as k}from"./reactivity.esm-bundler.f180a2dc.js";import"./vendor.21c9141e.js";import"./http.72fb258c.js";import"./api.491a85e5.js";import"./admin-store.0a078265.js";import"./crud-api.fca6ec91.js";function w(n){switch(n){case"../../components/components/grid.vue":return i(()=>import("./grid.9559247c.js"),["assets/grid.9559247c.js","assets/grid.02638d9d.css","assets/user.dc7ceeb0.js","assets/vendor.21c9141e.js","assets/http.72fb258c.js","assets/api.491a85e5.js","assets/admin-store.0a078265.js","assets/crud-api.fca6ec91.js","assets/reactivity.esm-bundler.f180a2dc.js","assets/index.550ade87.js","assets/index.10fb4167.css","assets/http.b40e557a.js","assets/use-route.bed03084.js"]);case"../../components/components/shopCard.vue":return i(()=>import("./shopCard.23bd4930.js"),["assets/shopCard.23bd4930.js","assets/user.dc7ceeb0.js","assets/vendor.21c9141e.js","assets/http.72fb258c.js","assets/api.491a85e5.js","assets/admin-store.0a078265.js","assets/crud-api.fca6ec91.js","assets/reactivity.esm-bundler.f180a2dc.js","assets/index.550ade87.js","assets/index.10fb4167.css"]);case"../../components/components/swipe.vue":return i(()=>import("./swipe.fabb4457.js"),["assets/swipe.fabb4457.js","assets/swipe.8a05e310.css","assets/user.dc7ceeb0.js","assets/vendor.21c9141e.js","assets/http.72fb258c.js","assets/api.491a85e5.js","assets/admin-store.0a078265.js","assets/crud-api.fca6ec91.js","assets/reactivity.esm-bundler.f180a2dc.js","assets/index.550ade87.js","assets/index.10fb4167.css","assets/http.b40e557a.js"]);default:return new Promise(function(t,r){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(r.bind(null,new Error("Unknown variable dynamic import: "+n)))})}}const y={class:"h-100vh"},T=_({setup(n){let t=c(),r=c();const m=e=>E(()=>w(`../../components/components/${e}.vue`)),u=async()=>{const e=await p.post("build-home/findone",{name:"\u5546\u94FA\u63A8\u8350"});r.value=e,t.value=e.components};return l(()=>{u()}),(e,A)=>(o(),a("div",y,[(o(!0),a(d,null,f(k(t),s=>(o(),a("div",null,[(o(),v(h(m(s.name)),{option:s.option,content:s.content},null,8,["option","content"]))]))),256))]))}});export{T as default};

import{_ as s}from"./index.7751537c.js";import{h as p}from"./http.4fa9714c.js";import{d as _,o as l,b as i,c as a,g as d,F as f,h as v,i as h,j as E}from"./user.340dd589.js";import{q as m,V as C}from"./reactivity.esm-bundler.f180a2dc.js";import"./vendor.21c9141e.js";import"./http.72fb258c.js";import"./api.491a85e5.js";import"./admin-store.0a078265.js";import"./crud-api.fca6ec91.js";function k(e){switch(e){case"../../components/components/grid.vue":return s(()=>import("./grid.569b2c5a.js"),["assets/grid.569b2c5a.js","assets/grid.02638d9d.css","assets/user.340dd589.js","assets/vendor.21c9141e.js","assets/http.72fb258c.js","assets/api.491a85e5.js","assets/admin-store.0a078265.js","assets/crud-api.fca6ec91.js","assets/reactivity.esm-bundler.f180a2dc.js","assets/index.7751537c.js","assets/index.635f6096.css","assets/http.4fa9714c.js","assets/use-route.f2805df4.js"]);case"../../components/components/shopCard.vue":return s(()=>import("./shopCard.270e141f.js"),["assets/shopCard.270e141f.js","assets/user.340dd589.js","assets/vendor.21c9141e.js","assets/http.72fb258c.js","assets/api.491a85e5.js","assets/admin-store.0a078265.js","assets/crud-api.fca6ec91.js","assets/reactivity.esm-bundler.f180a2dc.js","assets/index.7751537c.js","assets/index.635f6096.css"]);case"../../components/components/swipe.vue":return s(()=>import("./swipe.0bfb5000.js"),["assets/swipe.0bfb5000.js","assets/swipe.8a05e310.css","assets/user.340dd589.js","assets/vendor.21c9141e.js","assets/http.72fb258c.js","assets/api.491a85e5.js","assets/admin-store.0a078265.js","assets/crud-api.fca6ec91.js","assets/reactivity.esm-bundler.f180a2dc.js","assets/index.7751537c.js","assets/index.635f6096.css","assets/http.4fa9714c.js"]);default:return new Promise(function(n,t){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(t.bind(null,new Error("Unknown variable dynamic import: "+e)))})}}const O=_({setup(e){let n=m(),t=m();const c=o=>E(()=>k(`../../components/components/${o}.vue`)),u=async()=>{const o=await p.post("build-home/findone",{name:"\u5546\u54C1\u63A8\u8350"});console.log(o),t.value=o,n.value=o.components};return l(()=>{u()}),(o,w)=>(i(!0),a(f,null,d(C(n),r=>(i(),a("div",null,[(i(),v(h(c(r.name)),{option:r.option,content:r.content},null,8,["option","content"]))]))),256))}});export{O as default};

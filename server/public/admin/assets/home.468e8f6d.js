import{_ as u}from"./index.50ffbeab.js";import{d as v,u as f,o as h,r as C,b as e,c as a,e as c,f as E,F as B,g as D,h as k,i as b,j as g}from"./user.d35c86f9.js";import{h as w}from"./http.f71bceac.js";import{q as i,V as y}from"./reactivity.esm-bundler.f180a2dc.js";import"./vendor.bebcfb65.js";import"./http.47838019.js";import"./api.85fdd14d.js";import"./admin-store.b6bbf792.js";import"./crud-api.bf7f3228.js";function P(n){switch(n){case"../../components/components/grid.vue":return u(()=>import("./grid.ab4ad8f0.js"),["assets/grid.ab4ad8f0.js","assets/grid.02638d9d.css","assets/user.d35c86f9.js","assets/vendor.bebcfb65.js","assets/http.47838019.js","assets/api.85fdd14d.js","assets/admin-store.b6bbf792.js","assets/crud-api.bf7f3228.js","assets/reactivity.esm-bundler.f180a2dc.js","assets/index.50ffbeab.js","assets/index.635f6096.css","assets/http.f71bceac.js","assets/use-route.b821170e.js"]);case"../../components/components/shopCard.vue":return u(()=>import("./shopCard.9a418cdc.js"),["assets/shopCard.9a418cdc.js","assets/user.d35c86f9.js","assets/vendor.bebcfb65.js","assets/http.47838019.js","assets/api.85fdd14d.js","assets/admin-store.b6bbf792.js","assets/crud-api.bf7f3228.js","assets/reactivity.esm-bundler.f180a2dc.js","assets/index.50ffbeab.js","assets/index.635f6096.css"]);case"../../components/components/swipe.vue":return u(()=>import("./swipe.b8a68da9.js"),["assets/swipe.b8a68da9.js","assets/swipe.8a05e310.css","assets/user.d35c86f9.js","assets/vendor.bebcfb65.js","assets/http.47838019.js","assets/api.85fdd14d.js","assets/admin-store.b6bbf792.js","assets/crud-api.bf7f3228.js","assets/reactivity.esm-bundler.f180a2dc.js","assets/index.50ffbeab.js","assets/index.635f6096.css","assets/http.f71bceac.js"]);default:return new Promise(function(t,r){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(r.bind(null,new Error("Unknown variable dynamic import: "+n)))})}}const V={action:"/"},F={class:"mb-20"},S=v({setup(n){let t=i(),r=i();const m=f(),p=()=>{console.log("\u70B9\u51FB\u641C\u7D22\u6761"),m.push("/search")},l=o=>g(()=>P(`../../components/components/${o}.vue`)),_=async()=>{const o=await w.post("build-home/findone",{name:"\u9996\u9875"});console.log(o),r.value=o,t.value=o.components};return h(()=>{_()}),(o,I)=>{const d=C("van-search");return e(),a("div",null,[c("div",null,[c("form",V,[E(d,{onClickInput:p,placeholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD",shape:"round"})])]),c("div",F,[(e(!0),a(B,null,D(y(t),s=>(e(),a("div",null,[(e(),k(b(l(s.name)),{option:s.option,content:s.content},null,8,["option","content"]))]))),256))])])}}});export{S as default};

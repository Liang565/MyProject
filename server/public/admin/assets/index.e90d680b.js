import{d as h,u as b,a as g,r as o,b as u,c as i,e as a,f as n,w as p,F as V,g as k}from"./user.7a698f92.js";import{q as C,V as w,a as x,X as y}from"./reactivity.esm-bundler.f180a2dc.js";import"./vendor.21c9141e.js";import"./http.72fb258c.js";import"./api.491a85e5.js";import"./admin-store.0a078265.js";import"./crud-api.fca6ec91.js";import"./index.03bb2250.js";const E=h({props:{id:String},setup(m){const r=m;let c=b();g();const l=[{path:`/shop/${r.id}`,meta:{title:"\u5546\u94FA\u9996\u9875",key:"shop",icon:"home-o"}},{path:`/allGoods/${r.id}`,meta:{title:"\u6240\u6709\u5546\u54C1",key:"allGoods",icon:"gift-o"}}],d=()=>{console.log("change"),c.push(t.value)};let t=C(l[0].path);return(B,s)=>{const _=o("router-view"),v=o("van-tabbar-item"),f=o("van-tabbar");return u(),i("div",null,[a("div",null,[n(_)]),a("div",null,[n(f,{modelValue:w(t),"onUpdate:modelValue":s[0]||(s[0]=e=>x(t)?t.value=e:t=e),onClick:d,placeholder:!0},{default:p(()=>[(u(),i(V,null,k(l,e=>n(v,{name:e.path,icon:e.meta.icon},{default:p(()=>[a("div",null,y(e.meta.title),1)]),_:2},1032,["name","icon"])),64))]),_:1},8,["modelValue"])])])}}});export{E as default};
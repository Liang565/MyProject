import{d as h,u as b,a as g,o as k,r,b as n,c as u,e as s,f as i,w as m,F as V,g as R,h as w}from"./user.0f0244cd.js";import"./user-store.80d0fbbe.js";import{q as B,X as C,V as c,a as x}from"./reactivity.esm-bundler.f180a2dc.js";import"./vendor.1e3ef9c3.js";import"./http.3d895303.js";import"./api.e2fff66e.js";import"./admin-store.fe4adc91.js";import"./crud-api.b919ecb7.js";import"./index.016760bd.js";const y={class:"h-100vh"},j=h({setup(N){let o=b();g();let t=B("/");const p=()=>{console.log("change"),o.push(t.value)},d=o.getRoutes().map(e=>({title:e.meta.title,icon:e.meta.icon,key:e.meta.key,path:e.path,meta:e.meta})).filter(e=>e.meta.Nav);return t.value=o.currentRoute.value.path,k(()=>{}),(e,l)=>{const _=r("router-view"),v=r("van-tabbar-item"),f=r("van-tabbar");return n(),u("div",null,[s("div",y,[i(_)]),s("div",null,[i(f,{modelValue:c(t),"onUpdate:modelValue":l[0]||(l[0]=a=>x(t)?t.value=a:t=a),onClick:p,placeholder:!0},{default:m(()=>[(n(!0),u(V,null,R(c(d),a=>(n(),w(v,{name:a.path,icon:a.icon},{default:m(()=>[s("div",null,C(a.title),1)]),_:2},1032,["name","icon"]))),256))]),_:1},8,["modelValue"])])])}}});export{j as default};
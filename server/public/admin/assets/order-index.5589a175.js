import"./http.72fb258c.js";import{d as k,u as w,r as o,b as r,c as l,f as s,e as c,w as m,F as C,g as y,h as B}from"./user.dc7ceeb0.js";import{q as p,V as u,a as x}from"./reactivity.esm-bundler.f180a2dc.js";import"./vendor.21c9141e.js";import"./api.491a85e5.js";import"./admin-store.0a078265.js";import"./crud-api.fca6ec91.js";import"./index.550ade87.js";const O=k({setup(F){const n=w();p("");let e=p("");const _=()=>{n.push(e.value),console.log(e)},v=()=>{n.push("/my")},f=n.getRoutes().map(t=>({title:t.meta.title,icon:t.meta.icon,key:t.meta.key,path:t.path,meta:t.meta})).filter(t=>t.meta.navOrder);return(t,i)=>{const d=o("van-nav-bar"),b=o("router-view"),h=o("van-tab"),g=o("van-tabs");return r(),l("div",null,[s(d,{title:"order","left-text":"\u8FD4\u56DE","left-arrow":"",onClickLeft:v}),c("div",null,[s(g,{active:u(e),"onUpdate:active":i[0]||(i[0]=a=>x(e)?e.value=a:e=a),swipeable:"",onChange:_},{default:m(()=>[(r(!0),l(C,null,y(u(f),a=>(r(),B(h,{title:a.title,name:a.path},{default:m(()=>[c("div",null,[s(b)])]),_:2},1032,["title","name"]))),256))]),_:1},8,["active"])])])}}});export{O as default};

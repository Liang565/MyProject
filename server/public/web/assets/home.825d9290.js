import{d as v,r as i,u as h,o as f,b as C,c as o,e as u,f as a,g as E,F as k,j as B,h as D,k as b,n as g,p as w,_ as c}from"./index.ca94e480.js";import{h as y}from"./http.c785b6bf.js";/* empty css              *//* empty css              */function P(n){switch(n){case"../../components/components/grid.vue":return c(()=>import("./grid.b1766920.js"),["assets/grid.b1766920.js","assets/grid.02638d9d.css","assets/index.25f7f9da.css","assets/index.50f389b1.css","assets/index.08db7891.css","assets/index.11320eac.css","assets/index.9727babe.css","assets/http.c785b6bf.js","assets/http.06cfd034.css","assets/index.ca94e480.js","assets/index.831eb0f8.css"]);case"../../components/components/shopCard.vue":return c(()=>import("./shopCard.0f37b61c.js"),["assets/shopCard.0f37b61c.js","assets/index.25f7f9da.css","assets/index.50f389b1.css","assets/index.08db7891.css","assets/index.11320eac.css","assets/index.9727babe.css","assets/index.6502498e.css","assets/http.c785b6bf.js","assets/http.06cfd034.css","assets/index.ca94e480.js","assets/index.831eb0f8.css"]);case"../../components/components/swipe.vue":return c(()=>import("./swipe.132db3d2.js"),["assets/swipe.132db3d2.js","assets/swipe.8a05e310.css","assets/index.25f7f9da.css","assets/index.cee5ebe4.css","assets/index.9727babe.css","assets/index.7658a957.css","assets/index.ca94e480.js","assets/index.831eb0f8.css"]);default:return new Promise(function(t,s){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(s.bind(null,new Error("Unknown variable dynamic import: "+n)))})}}const F={action:"/"},I={class:"mb-20"},O=v({__name:"home",setup(n){let t=i(),s=i();const m=h(),p=()=>{console.log("\u70B9\u51FB\u641C\u7D22\u6761"),m.push("/search")},l=e=>w(()=>P(`../../components/components/${e}.vue`)),_=async()=>{const e=await y.post("build-home/findone",{name:"\u9996\u9875"});console.log(e),s.value=e,t.value=e.components};return f(()=>{_()}),(e,R)=>{const d=C("van-search");return o(),u("div",null,[a("div",null,[a("form",F,[E(d,{onClickInput:p,placeholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD",shape:"round"})])]),a("div",I,[(o(!0),u(k,null,B(D(t),r=>(o(),u("div",null,[(o(),b(g(l(r.name)),{option:r.option,content:r.content},null,8,["option","content"]))]))),256))])])}}});export{O as default};

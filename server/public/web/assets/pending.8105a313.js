import{h as r}from"./http.c785b6bf.js";import{d as a,r as n,o as u,c,e as d,f as p,t as i,h as l,x as f}from"./index.ca94e480.js";/* empty css              *//* empty css              */const m=f(" \u5F85\u4ED8\u6B3E "),D=a({__name:"pending",setup(_){let e=n();const o=()=>{r.post("orders/findOrder",{state:"\u672A\u652F\u4ED8"}).then(t=>{e.value=t}),console.log("\u5F85\u4ED8\u6B3E\u8BF7\u6C42")};return u(()=>{o()}),(s,t)=>(c(),d("div",null,[m,p("div",null,i(l(e)),1)]))}});export{D as default};

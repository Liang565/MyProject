import{d as B,r as c,y as D,b as l,c as i,e as m,f as a,g as u,h as r,i as v,w as _,t as p,F as f,j as F,k as V}from"./index.f3cf0a3d.js";const x={class:"flex"},y=a("div",null,null,-1),j=a("div",null,"asjajd",-1),N=B({__name:"order-index",setup(E){let s=c(""),n=c("");const b=()=>{console.log(n)},d=D.getRoutes().map(e=>({title:e.meta.title,icon:e.meta.icon,key:e.meta.key,path:e.path,meta:e.meta})).filter(e=>e.meta.navOrder);return(e,o)=>{const g=l("van-nav-bar"),h=l("van-search"),k=l("router-view"),C=l("van-tab"),w=l("van-tabs");return i(),m(f,null,[a("div",null,[u(g,{title:"order","left-text":"\u8FD4\u56DE","left-arrow":"",onClickLeft:o[0]||(o[0]=t=>e.$router.go(-1))}),a("div",x,[y,a("div",null,[u(h,{modelValue:r(s),"onUpdate:modelValue":o[1]||(o[1]=t=>v(s)?s.value=t:s=t),placeholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD"},null,8,["modelValue"])])]),a("div",null,[u(w,{active:r(n),"onUpdate:active":o[2]||(o[2]=t=>v(n)?n.value=t:n=t),swipeable:"",onChange:b},{default:_(()=>[(i(!0),m(f,null,F(r(d),t=>(i(),V(C,{title:t.title,name:t.path},{default:_(()=>[a("div",null,[u(k)]),j]),_:2},1032,["title","name"]))),256))]),_:1},8,["active"])])]),a("div",null,p(r(d)),1),a("div",null,p(r(n)),1)],64)}}});export{N as default};

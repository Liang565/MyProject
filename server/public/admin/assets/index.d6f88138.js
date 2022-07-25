import{R as E}from"./register-and-login.befb8532.js";import{a as z}from"./admin-store.b6bbf792.js";import{d as T,u as W,g as y,h as q,r as u,o as r,j as v,k as s,w as o,l,n as I,p as n,F as x,q as C,c as _,t as h,M as G,v as H,x as F,y as L,m as J}from"./vendor.bebcfb65.js";import{_ as b}from"./icon.f167505d.js";import"./http.47838019.js";const P={class:"translate-y-1"},Q={class:"text-lg"},X={class:"flex justify-between w-full"},Y={class:"-ml-12"},Z={class:"flex justify-end items-center"},$={class:"mx-3"},ee=L("\u9000\u51FA\u767B\u5F55"),te=L("\u8FD4\u56DE\u7BA1\u7406\u5458"),oe={class:"text-2xl mx-5 my-2"},ae={class:"px-5"},ce=T({setup(le){const p=W(),{getUser:w,LogOut:B}=E(),K=p.getRoutes().map(e=>({title:e.meta.title,icon:e.meta.icon,key:e.meta.key,path:e.path,meta:e.meta,children:e.children.map(a=>{var g;return{title:(g=a.meta)==null?void 0:g.title,url:a.path,meta:a.meta,icon:a.meta.icon}})})).filter(e=>e.meta.Menu),A=({key:e})=>{c.value[0]=e,p.push(e)};let c=y([]),m=y(),f=y(!1);const D=()=>{console.log("\u6267\u884CadminLogOut"),localStorage.setItem("userid",localStorage.getItem("adminId")),localStorage.setItem("username",localStorage.getItem("adminname")),localStorage.setItem("role",localStorage.getItem("adminrole")),localStorage.removeItem("adminId"),localStorage.removeItem("adminname"),localStorage.removeItem("adminrole"),f.value=!1,setTimeout(()=>{p.go(0)},1e3),J.success("\u8FD4\u56DE\u7BA1\u7406\u5458\u767B\u5F55"),p.push("/")};q(()=>{var e;localStorage.getItem("adminId")&&(f.value=!0),w(),c.value[0]=(e=p.currentRoute.value)==null?void 0:e.href,localStorage.getItem("role")=="user"?m.value=["home","shoper"]:m.value=["home","web","management"]});let i=y(!1);const M=()=>{i.value=!i.value};return(e,a)=>{const g=u("a-menu-item"),O=u("a-sub-menu"),R=u("a-menu"),j=u("a-layout-sider"),k=u("a-button"),U=u("a-layout-header"),N=u("router-view"),V=u("a-layout-content"),S=u("a-layout");return r(),v("div",null,[s(S,null,{default:o(()=>[s(j,{class:"h-100vh",theme:"dark",collapsed:l(i),"onUpdate:collapsed":a[2]||(a[2]=t=>I(i)?i.value=t:i=t),collapsible:""},{default:o(()=>[n("div",null,[n("div",null,[s(R,{mode:"inline",onClick:A,openKeys:l(m),"onUpdate:openKeys":a[0]||(a[0]=t=>I(m)?m.value=t:m=t),selectedKeys:l(c),"onUpdate:selectedKeys":a[1]||(a[1]=t=>I(c)?c.value=t:c=t),theme:"dark"},{default:o(()=>[(r(!0),v(x,null,C(l(K),t=>(r(),_(O,{key:t.key},{icon:o(()=>[n("span",P,[s(b,{type:t.icon,fill:"rgb(255, 255, 255)",theme:"outline",size:"24",spin:!1,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2},null,8,["type"])])]),title:o(()=>[n("span",Q,h(t.title),1)]),default:o(()=>[(r(!0),v(x,null,C(t.children,d=>(r(),_(g,{key:d.url},{icon:o(()=>[s(b,{type:d.icon,size:"20",fill:"rgb(255, 255, 255)",theme:"outline",spin:!1,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2},null,8,["type"])]),default:o(()=>[n("span",null,h(d.title),1)]),_:2},1024))),128))]),_:2},1024))),128))]),_:1},8,["openKeys","selectedKeys"])])])]),_:1},8,["collapsed"]),s(S,null,{default:o(()=>[s(U,{style:{"background-color":"#fff"}},{default:o(()=>{var t,d;return[n("div",X,[n("div",Y,[s(k,{type:"ghost",onClick:M},{default:o(()=>[l(i)?(r(),_(l(G),{key:0})):(r(),_(l(H),{key:1}))]),_:1})]),n("div",Z,[n("div",$," \u5F53\u524D\u7528\u6237\uFF1A "+h((d=(t=l(z).state)==null?void 0:t.admin)==null?void 0:d.username),1),l(f)?F("",!0):(r(),_(k,{key:0,onClick:l(B)},{default:o(()=>[ee]),_:1},8,["onClick"])),l(f)?(r(),_(k,{key:1,onClick:D},{default:o(()=>[te]),_:1})):F("",!0)])])]}),_:1}),s(V,null,{default:o(()=>[n("div",oe,h(e.$route.meta.title),1),n("div",ae,[s(N)])]),_:1})]),_:1})]),_:1})])}}});export{ce as default};

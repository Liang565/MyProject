import{h as l}from"./http.ad2d7282.js";/* empty css              *//* empty css              *//* empty css              */import{d as O,a as q,r as n,u as A,q as I,o as M,b as d,c as r,e as c,g as w,f as s,w as i,h as y,i as R,F as E,j as F,k as j,t as g,T as L}from"./index.fcff6f00.js";const T={class:"h-100vh"},S={class:"flex justify-center"},U={class:"w-90vw mb-3 bg-gray-100 rounded-lg"},V={class:"text-xl w-40 overflow-hidden text-ellipsis whitespace-nowrap"},z={class:"w-44 overflow-hidden text-ellipsis whitespace-nowrap"},X=O({__name:"order-index",setup(G){let x=q().query,a=n();a.value=x.state;let m=n(),v=n(),C=["\u5168\u90E8","\u672A\u652F\u4ED8","\u5F85\u53D1\u8D27","\u5F85\u6536\u8D27","\u9000\u8D27/\u552E\u540E"];const D=A(),b=async()=>{const e=await l.post("orders/findOrder",{state:v.value});e.length===0&&L.fail("\u65E0\u6570\u636E~"),m.value=e},k=e=>{D.push({path:"/orderDetails",query:{userInfo:e.userInfo,id:e._id,good:e.commodity._id}})},B=()=>{D.push("/my")};I(a,async(e,p)=>{if(e=="\u5168\u90E8")v=n(),await b();else if(e=="\u9000\u8D27/\u552E\u540E"){let o=n();const _=await l.post("orders/findOrder",{state:"\u5DF2\u6536\u8D27"});o.value=_;const f=await l.post("orders/findOrder",{state:"\u9000\u8D27\u7533\u8BF7"});o.value.push(...f);const h=await l.post("orders/findOrder",{state:"\u5DF2\u9000\u8D27"});o.value.push(...h),m.value=o.value}else v.value=e,await b()},{immediate:!0});const N=async e=>{a.value=e};return M(()=>{}),(e,p)=>{const o=d("van-nav-bar"),_=d("van-card"),f=d("van-tab"),h=d("van-tabs");return r(),c("div",null,[w(o,{title:"\u6211\u7684\u8BA2\u5355","left-text":"\u8FD4\u56DE","left-arrow":"",onClickLeft:B}),s("div",null,[w(h,{active:y(a),"onUpdate:active":p[0]||(p[0]=u=>R(a)?a.value=u:a=u),onChange:N,swipeable:!0},{default:i(()=>[(r(!0),c(E,null,F(y(C),u=>(r(),j(f,{title:u,name:u},{default:i(()=>[s("div",T,[(r(!0),c(E,null,F(y(m),t=>(r(),c("div",S,[s("div",U,[w(_,{num:t.goodsNum,thumb:t.commodity.image[0].url,tag:t.state,price:t.commodity.price,class:"rounded-t-lg",onClick:H=>k(t)},{title:i(()=>[s("div",V,g(t.commodity.commodityName),1)]),desc:i(()=>[s("div",z,g(t.commodity.commodityIntroduce),1)]),footer:i(()=>[s("div",null,"\u5408\u8BA1\uFFE5"+g(t.money),1)]),_:2},1032,["num","thumb","tag","price","onClick"])])]))),256))])]),_:2},1032,["title","name"]))),256))]),_:1},8,["active"])])])}}});export{X as default};

import"./admin-store.b6bbf792.js";import"./http.47838019.js";/* empty css                                               */import{d as z,g as y,h as L,r as i,o as c,j as d,l as v,p as t,k as n,w as l,x as g,F as w,q as k,t as F,c as U,n as I,V as T,y as _}from"./vendor.bebcfb65.js";const q={key:0,class:"flex items-center justify-center w-full my-2"},G={class:"flex justify-between bg-pink-100 h-20 w-3/4 rounded-2xl"},M={class:"flex items-center ml-3"},R=t("div",null,[t("div",null,"\u5546\u94FA\u540D\u79F0"),t("div",null,"\u5546\u94FA\u7B80\u4ECB")],-1),$={class:"mr-5"},H=_("\u8FDB\u5E97"),J={class:"flex items-center justify-center w-full my-2"},P={class:"flex justify-between bg-pink-100 h-20 w-3/4 rounded-2xl"},Q={class:"flex items-center ml-3"},W={class:"mr-5"},X=_("\u8FDB\u5E97"),Y={key:0},Z=_(" \u6DFB\u52A0\u5546\u94FA "),ee={class:"mb-3"},te={class:"mt-3"},ne=_(" \u5220\u9664 "),oe=_(" \u79FB\u9664\u7EC4\u4EF6"),ie=z({props:{option:{type:Object,default:()=>({})},content:{type:Object,default:()=>({})},index:{type:String,default:""},allshops:{type:Object,default:()=>[]}},emits:["removeComponent"],setup(r,{emit:B}){const a=r;let p=y("1"),u=y();a.allshops!==[]&&(u.value=a.allshops.map(e=>({label:e.title,value:e._id,Img:e.images,description:e.description,address:e.address,phone:e.phone})));const j=()=>{if(m.value=!1,!a.content.menu){a.content.menu=[],a.content.menu.push({});return}a.content.menu.push({})},E=e=>{a.content.menu.splice(a.content.menu.indexOf(e),1)},O=()=>{B("removeComponent")};let m=y(!1);const A=(e,o)=>o.label.toLowerCase().indexOf(e.toLowerCase())>=0,D=e=>{console.log(e);for(let o in u.value)u.value[o].value===e.id&&(e.title=u.value[o].label,e.images=u.value[o].Img,e.description=u.value[o].description,e.address=u.value[o].address,e.phone=u.value[o].phone)};return L(()=>{(!a.content.menu||a.content.menu.length==0)&&(m.value=!0)}),(e,o)=>{const b=i("van-image"),x=i("van-tag"),f=i("a-button"),S=i("a-select"),V=i("a-form-item"),K=i("a-form"),C=i("a-tab-pane"),N=i("a-tabs");return c(),d("div",null,[v(m)?(c(),d("div",q,[t("div",G,[t("div",M,[n(b,{round:"",width:"4rem",height:"4rem",src:"https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"}),R]),t("div",$,[n(x,{round:"",size:"medium",plain:!0,type:"warning"},{default:l(()=>[H]),_:1})])])])):g("",!0),v(m)?g("",!0):(c(!0),d(w,{key:1},k(r.content.menu,s=>(c(),d("div",J,[t("div",P,[t("div",Q,[n(b,{round:"",width:"4rem",height:"4rem",src:s.images},null,8,["src"]),t("div",null,[t("div",null,F(s.title),1),t("div",null,F(s.description),1)])]),t("div",W,[n(x,{round:"",size:"medium",plain:!0,type:"warning"},{default:l(()=>[X]),_:1})])])]))),256)),t("div",null,[(c(),U(T,{to:"#option"},[r.index==r.option.index?(c(),d("div",Y,[n(N,{activeKey:v(p),"onUpdate:activeKey":o[0]||(o[0]=s=>I(p)?p.value=s:p=s),class:"w-56"},{default:l(()=>[n(C,{key:"1",tab:"\u8BBE\u7F6E\u5185\u5BB9"},{default:l(()=>[n(f,{type:"link",onClick:j},{default:l(()=>[Z]),_:1}),n(K,null,{default:l(()=>[(c(!0),d(w,null,k(r.content.menu,s=>(c(),d("div",ee,[n(V,{label:"\u9009\u62E9\u5546\u94FA"},{default:l(()=>[n(S,{value:s.id,"onUpdate:value":h=>s.id=h,allowClear:!0,showSearch:!0,options:v(u),"filter-Option":A,onChange:h=>D(s)},null,8,["value","onUpdate:value","options","onChange"])]),_:2},1024),t("div",te,[n(f,{type:"primary",size:"small",onClick:h=>E(s)},{default:l(()=>[ne]),_:2},1032,["onClick"])])]))),256))]),_:1})]),_:1}),n(C,{key:"2",tab:"\u7F16\u8F91"},{default:l(()=>[n(f,{type:"link",onClick:O},{default:l(()=>[oe]),_:1})]),_:1})]),_:1},8,["activeKey"])])):g("",!0)]))])])}}});export{ie as default};

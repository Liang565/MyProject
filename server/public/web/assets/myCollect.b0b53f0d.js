import{A as q}from"./action-api.d937c44e.js";import{C as R}from"./curd.09cee783.js";import"./http.e29457af.js";import{_ as k}from"./iconPark.c9ac1e71.js";/* empty css             *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{d as U,r as a,p as I,o as H,b as p,c as i,e as _,f as e,t as g,h as n,g as c,w as v,i as B,k as f,q as h,n as y,T as V,F as J,j as K}from"./index.bc123074.js";/* empty css              */const O={class:"text-center pt-2"},P={class:"flex justify-evenly items-center"},Q={class:""},X={class:""},Y={class:""},Z=e("div",{class:"border-2 border-red-400 rounded-lg bg-red-200 text-sm"}," \u641C\u7D22 ",-1),ee={class:"w-16"},te={key:1},oe={class:"m-2 pb-11"},le={class:"flex justify-center"},se={class:"w-90vw mb-2"},ne={class:"text-xl"},ie=y(" \u5E93\u5B58\uFF1A "),ue={key:0},ae={key:1},ce={key:0,class:"fixed bottom-0 bg-white w-full h-11 flex justify-between items-center px-5"},re={class:"flex"},de=e("div",{class:"text-sm mt-1"},"\u5168\u9009",-1),_e={class:"flex items-center"},ve=y(" \u5DF2\u9009\uFF1A"),me={class:"mx-2"},pe=y("\u5220\u9664"),Ee=U({__name:"myCollect",setup(he){let C=a([]),r=a();const{goGoods:L}=R("commoditys"),{Collect:A,getCollect:ke,getMyAction:b,searchMyAction:x}=q();let m=a(!1);const D=()=>{m.value=!m.value};let u=a();const E=()=>{u.value==""||!u.value?V.fail("\u8BF7\u8F93\u5165\u5173\u952E\u8BCD"):setTimeout(()=>{x("like",u.value).then(l=>{r.value=l})},500)},N=()=>{b("like").then(l=>{r.value=l})};let s=a([]),d=a(!1);const j=a();a(0);const $=()=>{d.value=!d.value,j.value.toggleAll(d.value)};I(s,(l,t)=>{s.value.length==r.value.length?d.value=!0:d.value=!1});const w=l=>{l!==0&&l&&(s.value=[l],console.log(l),console.log("\u88AB\u6267\u884C")),console.log(s),V.loading("...");for(let t in s.value)A(s.value[t]);setTimeout(()=>{u.value&&u.value!=""?x("like",u.value).then(t=>{r.value=t}):b("like").then(t=>{r.value=t}),l!==0&&(s.value=[])},500)};return a({a:"\u963F"}),H(()=>{b("like").then(l=>{C.value=l,r.value=l})}),(l,t)=>{const z=p("van-search"),T=p("van-checkbox"),W=p("van-card"),F=p("van-button"),G=p("van-swipe-cell"),M=p("van-checkbox-group");return i(),_("div",null,[e("div",O,"\u6211\u7684\u6536\u85CF("+g(n(C).length)+")",1),e("div",P,[e("div",Q,[e("button",{onClick:t[0]||(t[0]=o=>l.$router.go(-1))},[c(k,{type:"back",theme:"outline",size:"24",spin:!1,fill:"#000000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2})])]),e("div",X,[e("button",{onClick:t[1]||(t[1]=o=>l.$router.push("/"))},[c(k,{type:"home",theme:"outline",size:"24",spin:!1,fill:"#000000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2})])]),e("div",null,[e("div",Y,[c(z,{clearable:"",shape:"round",modelValue:n(u),"onUpdate:modelValue":t[2]||(t[2]=o=>B(u)?u.value=o:u=o),placeholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD",onClickRightIcon:E,onClear:N},{"right-icon":v(()=>[Z]),_:1},8,["modelValue"])])]),e("div",ee,[e("button",{onClick:D},[n(m)?h("",!0):(i(),f(k,{key:0,type:"edit-two",theme:"outline",size:"24",spin:!1,fill:"#000000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2})),n(m)?(i(),_("span",te,"\u5B8C\u6210")):h("",!0)])])]),e("div",oe,[c(M,{modelValue:n(s),"onUpdate:modelValue":t[3]||(t[3]=o=>B(s)?s.value=o:s=o),ref_key:"checkboxGroup",ref:j},{default:v(()=>[(i(!0),_(J,null,K(n(r),o=>(i(),_("div",le,[n(m)?(i(),f(T,{key:0,name:o.object._id,class:"pr-3"},null,8,["name"])):h("",!0),e("div",se,[c(G,null,{right:v(()=>[c(F,{square:"",text:"\u5220\u9664",type:"danger",class:"delete-button",onClick:S=>w(o.object._id)},null,8,["onClick"])]),default:v(()=>[c(W,{price:o.object.price,desc:o.object._id,thumb:o.object.image[0].url,onClick:S=>n(L)(o.object)},{title:v(()=>[e("div",ne,g(o.object.commodityName),1)]),footer:v(()=>[e("div",null,[ie,o.object.commodityNum<10?(i(),_("span",ue,"\u4F4E~")):(i(),_("span",ae,"\u5145\u8DB3"))])]),_:2},1032,["price","desc","thumb","onClick"])]),_:2},1024)])]))),256))]),_:1},8,["modelValue"])]),n(m)?(i(),_("div",ce,[e("div",null,[e("button",{onClick:$},[e("div",re,[n(d)?h("",!0):(i(),f(k,{key:0,type:"full-selection",theme:"outline",size:"24",spin:!1,fill:"#000000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2})),n(d)?(i(),f(k,{key:1,type:"full-selection",theme:"filled",size:"24",spin:!1,fill:"#4a90e2",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2})):h("",!0),de])])]),e("div",_e,[e("div",null,[ve,e("span",null,g(n(s).length),1)]),e("div",me,[c(F,{round:"",type:"primary",onClick:t[4]||(t[4]=o=>w())},{default:v(()=>[pe]),_:1})])])])):h("",!0)])}}});export{Ee as default};
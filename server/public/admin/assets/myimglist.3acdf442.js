import"./user-store.80d0fbbe.js";import{R as M}from"./register-and-login.befb8532.js";import{d as U,g as a,P as B,z as O,h as V,r as F,o as r,j as d,k as g,w as y,l as o,R as P,x as k,n as j,p as e,F as D}from"./vendor.bebcfb65.js";const S={class:"clearfix"},z={key:0},A=e("div",{style:{"margin-top":"8px"}},"Upload",-1),N=["src"],de=U({props:{imgList:{type:Object,default:[]},resetList:{type:Boolean,default:!1}},emits:["on-success"],setup(C,{emit:u}){const c=C,{httpURL:L}=M();function x(t){return new Promise((p,w)=>{const l=new FileReader;l.readAsDataURL(t),l.onload=()=>p(l.result),l.onerror=f=>w(f)})}const n=a(!1),h=a(""),s=a("");let i=a([]),_=a([]);const R=()=>{n.value=!1,s.value=""},v=async t=>{!t.url&&!t.preview&&(t.preview=await x(t.originFileObj)),h.value=t.url||t.preview,n.value=!0,s.value=t.name||t.url.substring(t.url.lastIndexOf("/")+1)},b=(t,p,w)=>{t.file.status,t.file.status==="done"&&(_.value=t.fileList.map(l=>({url:l.response.url})),u("on-success",_.value)),t.file.status==="removed"&&(_.value=t.fileList.map(l=>({url:l.response.url})),u("on-success",_.value))},m=()=>{},E=()=>{i.value=c.imgList.map(t=>({url:t.url,status:"done",response:t}))};return B(()=>c.resetList,(t,p)=>{i.value=[],E()}),O(()=>{}),V(()=>{E()}),(t,p)=>{const w=F("a-upload"),l=F("a-modal");return r(),d("div",S,[g(w,{"file-list":o(i),"onUpdate:file-list":p[0]||(p[0]=f=>j(i)?i.value=f:i=f),action:o(L)+"/upload","list-type":"picture-card",multiple:!0,onPreview:v,onChange:b,onRemove:m},{default:y(()=>[o(i).length<8?(r(),d("div",z,[g(o(P)),A])):k("",!0)]),_:1},8,["file-list","action"]),g(l,{visible:n.value,title:s.value,footer:null,onCancel:R,centered:!0},{default:y(()=>[e("img",{alt:"example",style:{width:"100%"},src:h.value},null,8,N)]),_:1},8,["visible","title"])])}}});const $={class:"aaaaa"},H=["src"],I=e("span",null,"\u6D4F\u89C8",-1),Z=[I],T=e("div",null,null,-1),q={key:0,class:"tuku"},G={class:"main"},J={class:"leftSet"},K=["disabled"],Q=e("svg",{width:"40",height:"40",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("rect",{width:"48",height:"48",fill:"white","fill-opacity":"0.01"}),e("path",{d:"M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",fill:"none",stroke:"#333","stroke-width":"2","stroke-linejoin":"round"}),e("path",{d:"M32.4917 24.5H14.4917",stroke:"#333","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M23.4917 15.5L14.4917 24.5L23.4917 33.5",stroke:"#333","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),W=[Q],X={style:{width:"50px"}},Y={key:0,style:{"font-size":"20px"}},ee=["src"],te={class:"rightSet"},se={style:{width:"50px"}},oe={key:0,style:{"font-size":"20px"}},le=["disabled"],ne=e("svg",{width:"40",height:"40",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("rect",{width:"48",height:"48",fill:"white","fill-opacity":"0.01"}),e("path",{d:"M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",fill:"none",stroke:"#333","stroke-width":"2","stroke-linejoin":"round"}),e("path",{d:"M14.4917 24.5H32.4917",stroke:"#333","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M23.4917 15.5L32.4917 24.5L23.4917 33.5",stroke:"#333","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),ie=[ne],ce=U({props:{URL:Object},setup(C){const u=C;let c=a(!0);const L=()=>{c.value=!1},x=()=>{c.value=!0};let n=a(!1);const h=()=>{console.log("looooook"),n.value=!0};let s=a(0);const i=()=>{s.value==0?console.log("\u65E0\u4E0A\u4E00\u5F20"):s.value=s.value-1},_=()=>{s.value==u.URL.length-1?console.log("\u65E0\u4E0B\u4E00\u5F20"):s.value=s.value+1};return a(!1),(R,v)=>{const b=F("a-modal");return r(),d(D,null,[e("div",$,[e("div",{onMouseenter:L,onMouseleave:x,class:"fa"},[e("img",{src:u.URL[0].url},null,8,H),o(c)?k("",!0):(r(),d("button",{key:0,class:"aaa",onClick:h},Z))],32)]),g(b,{visible:o(n),"onUpdate:visible":v[0]||(v[0]=m=>j(n)?n.value=m:n=m),width:"100%",style:{top:"0px"}},{footer:y(()=>[T]),default:y(()=>[(r(),d("div",q,[e("div",G,[e("div",J,[e("button",{onClick:i,disabled:o(s)==0},W,8,K),e("div",X,[o(s)==0?(r(),d("span",Y,"\u5DF2\u7ECF\u662F\u7B2C\u4E00\u5F20\u4E86")):k("",!0)])]),e("img",{src:u.URL[o(s)].url,alt:"",class:"imgMain"},null,8,ee),e("div",te,[e("div",se,[o(s)==u.URL.length-1?(r(),d("span",oe," \u5DF2\u7ECF\u662F\u6700\u540E\u4E00\u5F20\u4E86 ")):k("",!0)]),e("button",{onClick:_,disabled:o(s)==u.URL.length-1},ie,8,le)])])]))]),_:1},8,["visible"])],64)}}});export{ce as _,de as a};

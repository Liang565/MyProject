import{C as h}from"./crud-api.7293b100.js";import{h as g}from"./http.fc6e7509.js";import{d as i,h as r,j as l,o as s,k as o,u as f,c as v,T as C,x as k,p as e,l as F,F as y}from"./vendor.ce4e530f.js";const N=e("div",null,"\u8FD9\u91CC\u662Fgrid",-1),j={key:0},x=e("div",null,"\u8FD9\u91CC\u662Fteleport",-1),B=i({props:{columnNum:{Number,default:4},goods:{Object,default:[{img:{url:"https://cdn.jsdelivr.net/npm/@vant/assets/apple-1.jpeg"}}]}},setup(d){let a=r(!1);return l(()=>{a.value=!0}),(u,c)=>(s(),o("div",null,[N,f(a)?(s(),o("div",j,[(s(),v(C,{to:"#option"},[x]))])):k("",!0)]))}}),$=e("div",null,[e("div",null,"testteestte")],-1),w=e("div",null,"111111111",-1),O=e("div",{id:"option"},null,-1),T=e("div",null,"111111111",-1),I=i({setup(d){const{remove:a,viss:u,editOk:c,addOk:V,fetch:m,data:b,query:D,where:q,search:E,pagination:M,pageChange:z}=h("commoditys");let p=r([]);const _=async()=>{const n=await g.get("commoditys",{params:{limit:999}});p.value=n.data.map(t=>({imgs:t.image,id:t._id,length:t.image.length,img:t.image[0]})).filter(t=>t.length!=0)};return l(()=>{m(),_()}),(n,t)=>(s(),o(y,null,[$,w,O,T,e("div",null,[F(B)])],64))}});export{I as default};
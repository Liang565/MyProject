import{i as e,y as K,d as T,p as E,r as m,o as N,h as x,j as i,t as I,w as a,l,F as D,n as h,g as ee,m as P,k as te}from"./vendor.fd5a6943.js";import{h as z}from"./http.7ef13b95.js";import{C as le}from"./crud-api.82cb9041.js";import"./admin-store.d62c6d54.js";var ue={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]},name:"upload",theme:"outlined"},ae=ue;function H(p){for(var d=1;d<arguments.length;d++){var n=arguments[d]!=null?Object(arguments[d]):{},c=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(c=c.concat(Object.getOwnPropertySymbols(n).filter(function(C){return Object.getOwnPropertyDescriptor(n,C).enumerable}))),c.forEach(function(C){oe(p,C,n[C])})}return p}function oe(p,d,n){return d in p?Object.defineProperty(p,d,{value:n,enumerable:!0,configurable:!0,writable:!0}):p[d]=n,p}var $=function(d,n){var c=H({},d,n.attrs);return e(K,H({},c,{icon:ae}),null)};$.displayName="UploadOutlined";$.inheritAttrs=!1;var ne=$;const ie=h(" \u4E0A\u4F20 "),se=h(" \u4E00\u952E\u6E05\u7A7A "),de=T({props:{},emits:["on-success"],setup(p,{emit:d}){const n=E([]),c=(b,O,F)=>{d("on-success",n.value.map(r=>({url:r.response.url})))},C=()=>{n.value=[],d("on-success",n.value.map(b=>({url:b.response.url})))};return(b,O)=>{const F=m("a-button"),r=m("a-upload"),k=m("delete-outlined");return N(),x(D,null,[i("div",null,I(b.fileList),1),i("div",null,[i("div",null,[e(r,{"file-list":n.value,"onUpdate:file-list":O[0]||(O[0]=S=>n.value=S),action:"http://localhost:3001/admin/api/upload","list-type":"picture-card",remove:b.removeImg,onChange:c},{default:a(()=>[e(F,{type:"primary"},{default:a(()=>[e(l(ne)),ie]),_:1})]),_:1},8,["file-list","remove"])]),i("div",null,[e(F,{type:"danger",onClick:C},{default:a(()=>[e(k),se]),_:1})])])],64)}}}),re=i("div",{class:"mb-2 text-2xl"},"\u5546\u54C1\u7BA1\u7406",-1),me={class:"mb-2 flex justify-start"},pe=h(" \u65B0\u589E\u5546\u54C1 "),ve={class:"ml-5"},ce=h("\u641C\u7D22"),fe={class:"mt-5"},_e={class:"flex overflow-x-visible"},ye=["src"],Ce=h("\u4FEE\u6539"),be=h("\u5220\u9664"),ke=T({setup(p){const{remove:d,viss:n,editOk:c,addOk:C,fetch:b,data:O,query:F,where:r,search:k,pagination:S,pageChange:q}=le("commoditys");let g=E([]);const G=async()=>{const v=await z.post(`/commoditys/Goods/${localStorage.userid}`);g.value=v.map(t=>({label:t.title,value:t.id})),g.value.length===0?P.info("\u8BE5\u7528\u6237\u4E0B\u65E0\u5E97\u94FA"):g.value[0].value&&(r.value.shop=g.value[0].value,o.value.shop=r.value.shop,k())},J=()=>{o.value.shop=r.value.shop,k()};E("addShop"),r.value={commodityName:"",title:"",shop:""};let o=E({commodityName:"",commodityIntroduce:"",image:[],title:"",parameter:[],commodityNum:0,shop:""});const Q=()=>{o.value={commodityName:"",commodityIntroduce:"",image:o.value.image,title:"",parameter:[],commodityNum:0,shop:o.value.shop}},R=()=>{g.value.length===0?P.error("\u8BE5\u7528\u6237\u4E0B\u65E0\u5E97\u94FA,\u4E0D\u80FD\u65B0\u589E\u5546\u54C1"):n.value.add=!0};let A=E([]);const W=async()=>{const v=await z.get("commodity-class",{params:{limit:999}});A.value=v.data.map(t=>({label:t.title,value:t._id}))},L=(v,t)=>t.label.toLowerCase().indexOf(v.toLowerCase())>=0,V=()=>{Q(),console.log("cancel")};let j=E("");const X=v=>{for(let t in o.value)o.value[t]=v[t];j.value=v._id,n.value.edit=!0};return ee(()=>{W(),G()}),(v,t)=>{const U=m("a-button"),w=m("a-select"),s=m("a-form-item"),B=m("a-form"),f=m("a-input"),_=m("a-table-column"),Y=m("a-table"),M=m("a-modal"),Z=m("upload");return N(),x(D,null,[i("div",null,[re,i("div",me,[i("div",null,[e(U,{onClick:R,type:"primary"},{default:a(()=>[pe]),_:1})]),i("div",ve,[e(B,{layout:"inline"},{default:a(()=>[e(s,{label:"\u5207\u6362\u5E97\u94FA",class:"w-44"},{default:a(()=>[e(w,{options:l(g),value:l(r).shop,"onUpdate:value":t[0]||(t[0]=u=>l(r).shop=u),onChange:J},null,8,["options","value"])]),_:1})]),_:1})])]),i("div",null,[i("div",null,[e(B,{layout:"inline"},{default:a(()=>[e(s,{label:"\u5546\u54C1\u540D\uFF1A",class:"w-52"},{default:a(()=>[e(f,{value:l(r).commodityName,"onUpdate:value":t[1]||(t[1]=u=>l(r).commodityName=u)},null,8,["value"])]),_:1}),e(s,{label:"\u6240\u5C5E\u5206\u7C7B",class:"w-44"},{default:a(()=>[e(w,{options:l(A),value:l(r).title,"onUpdate:value":t[2]||(t[2]=u=>l(r).title=u),allowClear:!0,showSearch:!0,"filter-Option":L},null,8,["options","value"])]),_:1}),e(s,null,{default:a(()=>[e(U,{type:"primary",onClick:l(k)},{default:a(()=>[ce]),_:1},8,["onClick"])]),_:1})]),_:1})])]),i("div",fe,[e(Y,{dataSource:l(O),rowKey:"title",pagination:l(S),onChange:l(q),scroll:{y:390}},{default:a(()=>[e(_,{title:"id",dataIndex:"_id",key:"_id",class:"w-40"}),e(_,{title:"\u5546\u54C1\u540D",dataIndex:"commodityName",key:"commodityName"}),e(_,{title:"\u5546\u54C1\u4ECB\u7ECD",dataIndex:"commodityIntroduce",key:"commodityIntroduce"}),e(_,{title:"\u53C2\u6570",dataIndex:"parameter",key:"parameter"},{default:a(({record:u})=>[i("span",null,I(u.parameter),1)]),_:1}),e(_,{title:"\u6570\u91CF",dataIndex:"commodityNum",key:"commodityNum"}),e(_,{title:"\u5206\u7C7B",dataIndex:"title",key:"title"},{default:a(({record:u})=>{var y;return[i("span",null,I((y=u.title)==null?void 0:y.title),1)]}),_:1}),e(_,{title:"\u6240\u5C5E\u5546\u94FA",dataIndex:"shop",key:"shop"},{default:a(({record:u})=>{var y;return[i("span",null,I((y=u.shop)==null?void 0:y.title),1)]}),_:1}),e(_,{title:"\u56FE\u7247",dataIndex:"image",key:"image"},{default:a(({record:u})=>[i("div",_e,[(N(!0),x(D,null,te(u.image,y=>(N(),x("img",{class:"w-6 h-6",src:y.url},null,8,ye))),256))])]),_:1}),e(_,{title:"\u64CD\u4F5C",dataIndex:"operation",key:"operation"},{default:a(({record:u})=>[i("div",null,[e(U,{type:"link",onClick:y=>X(u)},{default:a(()=>[Ce]),_:2},1032,["onClick"]),e(U,{type:"link",onClick:y=>l(d)(u,u.title)},{default:a(()=>[be]),_:2},1032,["onClick"])])]),_:1})]),_:1},8,["dataSource","pagination","onChange"])])]),i("div",null,[e(M,{visible:l(n).add,"onUpdate:visible":t[9]||(t[9]=u=>l(n).add=u),title:"\u65B0\u589E\u5546\u54C1",onOk:t[10]||(t[10]=u=>l(C)(l(o))),afterClose:V},{default:a(()=>[e(B,{model:l(o)},{default:a(()=>[e(s,{label:"\u5546\u54C1\u540D"},{default:a(()=>[e(f,{value:l(o).commodityName,"onUpdate:value":t[3]||(t[3]=u=>l(o).commodityName=u)},null,8,["value"])]),_:1}),e(s,{label:"\u5206\u7C7B"},{default:a(()=>[e(w,{allowClear:!0,showSearch:!0,options:l(A),value:l(o).title,"onUpdate:value":t[4]||(t[4]=u=>l(o).title=u),"filter-Option":L},null,8,["options","value"])]),_:1}),e(s,{label:"\u5546\u54C1\u7B80\u4ECB"},{default:a(()=>[e(f,{value:l(o).commodityIntroduce,"onUpdate:value":t[5]||(t[5]=u=>l(o).commodityIntroduce=u)},null,8,["value"])]),_:1}),e(s,{label:"\u5546\u54C1\u56FE\u7247"},{default:a(()=>[e(de,{onOnSuccess:t[6]||(t[6]=u=>{l(o).image=u})})]),_:1}),e(s,{label:"\u53C2\u6570"},{default:a(()=>[e(f,{value:l(o).parameter,"onUpdate:value":t[7]||(t[7]=u=>l(o).parameter=u)},null,8,["value"])]),_:1}),e(s,{label:"\u6570\u91CF"},{default:a(()=>[e(f,{value:l(o).commodityNum,"onUpdate:value":t[8]||(t[8]=u=>l(o).commodityNum=u)},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["visible"])]),i("div",null,[e(M,{visible:l(n).edit,"onUpdate:visible":t[17]||(t[17]=u=>l(n).edit=u),title:"\u4FEE\u6539\u4FE1\u606F",afterClose:V,onOk:t[18]||(t[18]=u=>l(c)(l(j),l(o)))},{default:a(()=>[e(B,{model:l(o)},{default:a(()=>[e(s,{label:"\u5546\u5E97\u540D"},{default:a(()=>[e(f,{value:l(o).title,"onUpdate:value":t[11]||(t[11]=u=>l(o).title=u)},null,8,["value"])]),_:1}),e(s,{label:"\u6240\u5C5E\u7528\u6237\u540D"},{default:a(()=>[e(w,{options:v.options,value:l(o).user,"onUpdate:value":t[12]||(t[12]=u=>l(o).user=u)},null,8,["options","value"])]),_:1}),e(s,{label:"\u5546\u94FA\u7B80\u4ECB"},{default:a(()=>[e(f,{value:l(o).description,"onUpdate:value":t[13]||(t[13]=u=>l(o).description=u)},null,8,["value"])]),_:1}),e(s,{label:"\u5546\u94FA\u5934\u50CF"},{default:a(()=>[e(Z,{imageUrl:l(o).images,onOnSuccess:t[14]||(t[14]=u=>{l(o).images=u})},null,8,["imageUrl"])]),_:1}),e(s,{label:"\u5546\u94FA\u5730\u5740"},{default:a(()=>[e(f,{value:l(o).address,"onUpdate:value":t[15]||(t[15]=u=>l(o).address=u)},null,8,["value"])]),_:1}),e(s,{label:"\u5546\u94FA\u7535\u8BDD"},{default:a(()=>[e(f,{value:l(o).phone,"onUpdate:value":t[16]||(t[16]=u=>l(o).phone=u)},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["visible"])])],64)}}});export{ke as default};

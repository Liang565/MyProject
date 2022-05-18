import{i as e,y as Z,d as z,p as g,r as p,o as x,h as N,j as i,t as B,w as u,l,F as A,n as O,g as K,k as ee}from"./vendor.fd5a6943.js";import{h as M}from"./http.7ef13b95.js";import{C as te}from"./crud-api.755a1146.js";import"./admin-store.d62c6d54.js";var le={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]},name:"upload",theme:"outlined"},ae=le;function P(v){for(var d=1;d<arguments.length;d++){var n=arguments[d]!=null?Object(arguments[d]):{},c=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(c=c.concat(Object.getOwnPropertySymbols(n).filter(function(C){return Object.getOwnPropertyDescriptor(n,C).enumerable}))),c.forEach(function(C){ue(v,C,n[C])})}return v}function ue(v,d,n){return d in v?Object.defineProperty(v,d,{value:n,enumerable:!0,configurable:!0,writable:!0}):v[d]=n,v}var D=function(d,n){var c=P({},d,n.attrs);return e(Z,P({},c,{icon:ae}),null)};D.displayName="UploadOutlined";D.inheritAttrs=!1;var oe=D;const ne=O(" \u4E0A\u4F20 "),ie=O(" \u4E00\u952E\u6E05\u7A7A "),se=z({props:{},emits:["on-success"],setup(v,{emit:d}){const n=g([]),c=(b,h,k)=>{d("on-success",n.value.map(r=>({url:r.response.url})))},C=()=>{n.value=[],d("on-success",n.value.map(b=>({url:b.response.url})))};return(b,h)=>{const k=p("a-button"),r=p("a-upload"),E=p("delete-outlined");return x(),N(A,null,[i("div",null,B(b.fileList),1),i("div",null,[i("div",null,[e(r,{"file-list":n.value,"onUpdate:file-list":h[0]||(h[0]=S=>n.value=S),action:"http://localhost:3001/admin/api/upload","list-type":"picture-card",remove:b.removeImg,onChange:c},{default:u(()=>[e(k,{type:"primary"},{default:u(()=>[e(l(oe)),ne]),_:1})]),_:1},8,["file-list","remove"])]),i("div",null,[e(k,{type:"danger",onClick:C},{default:u(()=>[e(E),ie]),_:1})])])],64)}}}),de=i("div",{class:"mb-2 text-2xl"},"\u5546\u54C1\u7BA1\u7406",-1),re={class:"mb-2 flex justify-start"},pe=O(" \u65B0\u589E\u5546\u54C1 "),me={class:"ml-5"},ve=O("\u641C\u7D22"),ce={class:"mt-5"},fe={class:"flex overflow-x-visible"},_e=["src"],ye=O("\u4FEE\u6539"),Ce=O("\u5220\u9664"),Ee=z({setup(v){const{remove:d,viss:n,editOk:c,addOk:C,fetch:b,data:h,query:k,where:r,search:E,pagination:S,pageChange:H}=te("commoditys");let U=g([]);const T=async()=>{const m=await M.post(`/commoditys/Goods/${localStorage.userid}`);U.value=m.map(t=>({label:t.title,value:t.id})),U.value[0].value&&(r.value.shop=U.value[0].value,o.value.shop=r.value.shop,E())},q=()=>{o.value.shop=r.value.shop,E()};g("addShop"),r.value={commodityName:"",title:"",shop:""};let o=g({commodityName:"",commodityIntroduce:"",image:[],title:"",parameter:[],commodityNum:0,shop:""});const G=()=>{o.value={commodityName:"",commodityIntroduce:"",image:o.value.image,title:"",parameter:[],commodityNum:0,shop:o.value.shop}},J=()=>{n.value.add=!0};let $=g([]);const Q=async()=>{const m=await M.get("commodity-class",{params:{limit:999}});$.value=m.data.map(t=>({label:t.title,value:t._id}))},R=(m,t)=>t.label.toLowerCase().indexOf(m.toLowerCase())>=0,L=()=>{G(),console.log("cancel")};let V=g("");const W=m=>{for(let t in o.value)o.value[t]=m[t];V.value=m._id,n.value.edit=!0};return K(()=>{Q(),T()}),(m,t)=>{const F=p("a-button"),w=p("a-select"),s=p("a-form-item"),I=p("a-form"),f=p("a-input"),_=p("a-table-column"),X=p("a-table"),j=p("a-modal"),Y=p("upload");return x(),N(A,null,[i("div",null,[de,i("div",re,[i("div",null,[e(F,{onClick:J,type:"primary"},{default:u(()=>[pe]),_:1})]),i("div",me,[e(I,{layout:"inline"},{default:u(()=>[e(s,{label:"\u5207\u6362\u5E97\u94FA",class:"w-44"},{default:u(()=>[e(w,{options:l(U),value:l(r).shop,"onUpdate:value":t[0]||(t[0]=a=>l(r).shop=a),onChange:q},null,8,["options","value"])]),_:1})]),_:1})]),i("div",null,[e(I,{layout:"inline"},{default:u(()=>[e(s,{label:"\u5E97\u94FA\u540D\uFF1A",class:"w-52"},{default:u(()=>[e(f,{value:l(r).title,"onUpdate:value":t[1]||(t[1]=a=>l(r).title=a)},null,8,["value"])]),_:1}),e(s,{label:"\u6240\u5C5E\u7528\u6237\u540D",class:"w-44"},{default:u(()=>[e(w,{options:m.options,value:l(r).user,"onUpdate:value":t[2]||(t[2]=a=>l(r).user=a),allowClear:!0},null,8,["options","value"])]),_:1}),e(s,null,{default:u(()=>[e(F,{type:"primary",onClick:l(E)},{default:u(()=>[ve]),_:1},8,["onClick"])]),_:1})]),_:1})])]),i("div",ce,[e(X,{dataSource:l(h),rowKey:"title",pagination:l(S),onChange:l(H),scroll:{y:390}},{default:u(()=>[e(_,{title:"id",dataIndex:"_id",key:"_id",class:"w-40"}),e(_,{title:"\u5546\u54C1\u540D",dataIndex:"commodityName",key:"commodityName"}),e(_,{title:"\u5546\u54C1\u4ECB\u7ECD",dataIndex:"commodityIntroduce",key:"commodityIntroduce"}),e(_,{title:"\u53C2\u6570",dataIndex:"parameter",key:"parameter"},{default:u(({record:a})=>[i("span",null,B(a.parameter),1)]),_:1}),e(_,{title:"\u6570\u91CF",dataIndex:"commodityNum",key:"commodityNum"}),e(_,{title:"\u5206\u7C7B",dataIndex:"title",key:"title"},{default:u(({record:a})=>{var y;return[i("span",null,B((y=a.title)==null?void 0:y.title),1)]}),_:1}),e(_,{title:"\u6240\u5C5E\u5546\u94FA",dataIndex:"shop",key:"shop"},{default:u(({record:a})=>{var y;return[i("span",null,B((y=a.shop)==null?void 0:y.title),1)]}),_:1}),e(_,{title:"\u56FE\u7247",dataIndex:"image",key:"image"},{default:u(({record:a})=>[i("div",fe,[(x(!0),N(A,null,ee(a.image,y=>(x(),N("img",{class:"w-6 h-6",src:y.url},null,8,_e))),256))])]),_:1}),e(_,{title:"\u64CD\u4F5C",dataIndex:"operation",key:"operation"},{default:u(({record:a})=>[i("div",null,[e(F,{type:"link",onClick:y=>W(a)},{default:u(()=>[ye]),_:2},1032,["onClick"]),e(F,{type:"link",onClick:y=>l(d)(a,a.title)},{default:u(()=>[Ce]),_:2},1032,["onClick"])])]),_:1})]),_:1},8,["dataSource","pagination","onChange"])])]),i("div",null,[e(j,{visible:l(n).add,"onUpdate:visible":t[9]||(t[9]=a=>l(n).add=a),title:"\u65B0\u589E\u5546\u54C1",onOk:t[10]||(t[10]=a=>l(C)(l(o))),afterClose:L},{default:u(()=>[e(I,{model:l(o)},{default:u(()=>[e(s,{label:"\u5546\u54C1\u540D"},{default:u(()=>[e(f,{value:l(o).commodityName,"onUpdate:value":t[3]||(t[3]=a=>l(o).commodityName=a)},null,8,["value"])]),_:1}),e(s,{label:"\u5206\u7C7B"},{default:u(()=>[e(w,{allowClear:!0,showSearch:!0,options:l($),value:l(o).title,"onUpdate:value":t[4]||(t[4]=a=>l(o).title=a),"filter-Option":R},null,8,["options","value"])]),_:1}),e(s,{label:"\u5546\u54C1\u7B80\u4ECB"},{default:u(()=>[e(f,{value:l(o).commodityIntroduce,"onUpdate:value":t[5]||(t[5]=a=>l(o).commodityIntroduce=a)},null,8,["value"])]),_:1}),e(s,{label:"\u5546\u54C1\u56FE\u7247"},{default:u(()=>[e(se,{onOnSuccess:t[6]||(t[6]=a=>{l(o).image=a})})]),_:1}),e(s,{label:"\u53C2\u6570"},{default:u(()=>[e(f,{value:l(o).parameter,"onUpdate:value":t[7]||(t[7]=a=>l(o).parameter=a)},null,8,["value"])]),_:1}),e(s,{label:"\u6570\u91CF"},{default:u(()=>[e(f,{value:l(o).commodityNum,"onUpdate:value":t[8]||(t[8]=a=>l(o).commodityNum=a)},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["visible"])]),i("div",null,[e(j,{visible:l(n).edit,"onUpdate:visible":t[17]||(t[17]=a=>l(n).edit=a),title:"\u4FEE\u6539\u4FE1\u606F",afterClose:L,onOk:t[18]||(t[18]=a=>l(c)(l(V),l(o)))},{default:u(()=>[e(I,{model:l(o)},{default:u(()=>[e(s,{label:"\u5546\u5E97\u540D"},{default:u(()=>[e(f,{value:l(o).title,"onUpdate:value":t[11]||(t[11]=a=>l(o).title=a)},null,8,["value"])]),_:1}),e(s,{label:"\u6240\u5C5E\u7528\u6237\u540D"},{default:u(()=>[e(w,{options:m.options,value:l(o).user,"onUpdate:value":t[12]||(t[12]=a=>l(o).user=a)},null,8,["options","value"])]),_:1}),e(s,{label:"\u5546\u94FA\u7B80\u4ECB"},{default:u(()=>[e(f,{value:l(o).description,"onUpdate:value":t[13]||(t[13]=a=>l(o).description=a)},null,8,["value"])]),_:1}),e(s,{label:"\u5546\u94FA\u5934\u50CF"},{default:u(()=>[e(Y,{imageUrl:l(o).images,onOnSuccess:t[14]||(t[14]=a=>{l(o).images=a})},null,8,["imageUrl"])]),_:1}),e(s,{label:"\u5546\u94FA\u5730\u5740"},{default:u(()=>[e(f,{value:l(o).address,"onUpdate:value":t[15]||(t[15]=a=>l(o).address=a)},null,8,["value"])]),_:1}),e(s,{label:"\u5546\u94FA\u7535\u8BDD"},{default:u(()=>[e(f,{value:l(o).phone,"onUpdate:value":t[16]||(t[16]=a=>l(o).phone=a)},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["visible"])])],64)}}});export{Ee as default};
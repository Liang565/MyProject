import{d as Q,g as s,P as z,h as H,r,o as E,j as N,p as c,k as e,w as u,l as a,F as J,m as D,t as O,y,N as W,Q as X}from"./vendor.bebcfb65.js";import{h as S}from"./http.47838019.js";import{C as Y}from"./crud-api.bf7f3228.js";import{_ as Z,a as ee}from"./myimglist.3acdf442.js";import"./admin-store.b6bbf792.js";import"./user-store.80d0fbbe.js";import"./reactivity.esm-bundler.f180a2dc.js";import"./register-and-login.befb8532.js";const te=y("\u641C\u7D22"),oe={class:"mt-5 h-70vh overflow-y-auto"},ae=y("\u67E5\u770B"),le=y("\u67E5\u770B"),ue={key:0},ne={key:1},ie=y("\u4FEE\u6539"),de=y("\u5220\u9664"),ke=Q({setup(me){const{remove:U,viss:C,editOk:$,addOk:se,fetch:L,data:A,query:re,where:p,search:b,pagination:M,pageChange:V}=Y("commoditys");let f=s(!0);s(!1),s("");const I=localStorage.getItem("role");let g=s([]);const R=async()=>{const n=await S.post(`/commoditys/Goods/${localStorage.userid}`);n.length===0?I==="admin"?D.info("\u5F53\u524D\u4E3A\u7BA1\u7406\u5458\u7528\u6237"):D.error("\u8BE5\u7528\u6237\u4E0B\u65E0\u5E97\u94FA,\u4E0D\u80FD\u65B0\u589E\u5546\u54C1"):(g.value=n.map(o=>({label:o.title,value:o.id})),g.value[0].value&&(p.value.shop=g.value[0].value,l.value.shop=p.value.shop,b()))};s("addShop"),p.value={commodityName:"",title:"",shop:""};let l=s({commodityName:"",commodityIntroduce:"",image:[],title:"",parameter:[],commodityNum:0,price:0,shop:""});const q=()=>{l.value={commodityName:"",commodityIntroduce:"",image:[],title:"",parameter:[],commodityNum:0,price:0,shop:l.value.shop}};let k=s([]);const T=async()=>{const n=await S.get("commodity-class",{params:{query:{limit:999}}});k.value=n.data.map(o=>({label:o.title,value:o._id}))},h=(n,o)=>o.label.toLowerCase().indexOf(n.toLowerCase())>=0,j=()=>{q(),console.log("cancel")};let F=s("");const G=n=>{l.value.image=n.image,l.value.commodityName=n.commodityName,l.value.price=n.price,l.value.commodityIntroduce=n.commodityIntroduce,l.value.title=n.title._id,l.value.parameter=n.parameter,l.value.commodityNum=n.commodityNum,F.value=n._id,C.value.edit=!0,f.value=!f.value};z(f,(n,o)=>{console.log("aaa\u4FA6\u542C\u5668")});const w=(n,o)=>{console.log(n),W.info({title:`${o}`,content:X("div",{},`${n}`),onOk(){console.log("ok")}})};return H(()=>{T(),R(),I=="admin"&&L()}),(n,o)=>{const v=r("a-input"),i=r("a-form-item"),B=r("a-select"),_=r("a-button"),x=r("a-form"),d=r("a-table-column"),K=r("a-table"),P=r("a-modal");return E(),N(J,null,[c("div",null,[c("div",null,[c("div",null,[e(x,{layout:"inline"},{default:u(()=>[e(i,{label:"\u5546\u54C1\u540D\uFF1A",class:"w-52"},{default:u(()=>[e(v,{value:a(p).commodityName,"onUpdate:value":o[0]||(o[0]=t=>a(p).commodityName=t)},null,8,["value"])]),_:1}),e(i,{label:"\u6240\u5C5E\u5206\u7C7B",class:"w-44"},{default:u(()=>[e(B,{options:a(k),value:a(p).title,"onUpdate:value":o[1]||(o[1]=t=>a(p).title=t),allowClear:!0,showSearch:!0,"filter-Option":h},null,8,["options","value"])]),_:1}),e(i,null,{default:u(()=>[e(_,{type:"primary",onClick:a(b)},{default:u(()=>[te]),_:1},8,["onClick"])]),_:1})]),_:1})])]),c("div",oe,[e(K,{dataSource:a(A),rowKey:"title",pagination:a(M),onChange:a(V)},{default:u(()=>[e(d,{title:"id",dataIndex:"_id",key:"_id",class:"w-40",align:"center"}),e(d,{align:"center",title:"\u5546\u54C1\u540D",dataIndex:"commodityName",key:"commodityName"}),e(d,{title:"\u5546\u54C1\u4ECB\u7ECD",dataIndex:"commodityIntroduce",key:"commodityIntroduce",align:"center"},{default:u(({record:t})=>[e(_,{type:"link",onClick:m=>w(t.commodityIntroduce,"\u5546\u54C1\u4ECB\u7ECD")},{default:u(()=>[ae]),_:2},1032,["onClick"])]),_:1}),e(d,{title:"\u53C2\u6570",dataIndex:"parameter",key:"parameter",align:"center"},{default:u(({record:t})=>[e(_,{type:"link",onClick:m=>w(t.parameter,"\u53C2\u6570")},{default:u(()=>[le]),_:2},1032,["onClick"])]),_:1}),e(d,{align:"center",title:"\u6570\u91CF",dataIndex:"commodityNum",key:"commodityNum"}),e(d,{title:"\u4EF7\u683C",dataIndex:"price",key:"price",align:"center"}),e(d,{title:"\u5206\u7C7B",dataIndex:"title",key:"title",align:"center"},{default:u(({record:t})=>{var m;return[c("span",null,O((m=t.title)==null?void 0:m.title),1)]}),_:1}),e(d,{title:"\u6240\u5C5E\u5546\u94FA",dataIndex:"shop",key:"shop",align:"center"},{default:u(({record:t})=>{var m;return[c("span",null,O((m=t.shop)==null?void 0:m.title),1)]}),_:1}),e(d,{title:"\u56FE\u7247",dataIndex:"image",key:"image",align:"center"},{default:u(({record:t})=>[t.image.length==0?(E(),N("div",ue,"\u7A7A")):(E(),N("div",ne,[e(Z,{URL:t.image},null,8,["URL"])]))]),_:1}),e(d,{title:"\u64CD\u4F5C",dataIndex:"operation",key:"operation",align:"center"},{default:u(({record:t})=>[c("div",null,[e(_,{type:"link",onClick:m=>G(t)},{default:u(()=>[ie]),_:2},1032,["onClick"]),e(_,{type:"link",onClick:m=>a(U)(t,t.title)},{default:u(()=>[de]),_:2},1032,["onClick"])])]),_:1})]),_:1},8,["dataSource","pagination","onChange"])])]),c("div",null,[e(P,{visible:a(C).edit,"onUpdate:visible":o[9]||(o[9]=t=>a(C).edit=t),title:"\u4FEE\u6539\u5546\u54C1\u4FE1\u606F",onOk:o[10]||(o[10]=t=>a($)(a(F),a(l))),afterClose:j,centered:!0},{default:u(()=>[e(x,{model:a(l)},{default:u(()=>[e(i,{label:"\u5546\u54C1\u540D"},{default:u(()=>[e(v,{value:a(l).commodityName,"onUpdate:value":o[2]||(o[2]=t=>a(l).commodityName=t)},null,8,["value"])]),_:1}),e(i,{label:"\u5206\u7C7B"},{default:u(()=>[e(B,{allowClear:!0,showSearch:!0,options:a(k),value:a(l).title,"onUpdate:value":o[3]||(o[3]=t=>a(l).title=t),"filter-Option":h},null,8,["options","value"])]),_:1}),e(i,{label:"\u5546\u54C1\u7B80\u4ECB"},{default:u(()=>[e(v,{value:a(l).commodityIntroduce,"onUpdate:value":o[4]||(o[4]=t=>a(l).commodityIntroduce=t)},null,8,["value"])]),_:1}),e(i,{label:"\u5546\u54C1\u56FE\u7247"},{default:u(()=>[e(ee,{imgList:a(l).image,resetList:a(f),onOnSuccess:o[5]||(o[5]=t=>{a(l).image=t})},null,8,["imgList","resetList"])]),_:1}),e(i,{label:"\u53C2\u6570"},{default:u(()=>[e(v,{value:a(l).parameter,"onUpdate:value":o[6]||(o[6]=t=>a(l).parameter=t)},null,8,["value"])]),_:1}),e(i,{label:"\u6570\u91CF"},{default:u(()=>[e(v,{value:a(l).commodityNum,"onUpdate:value":o[7]||(o[7]=t=>a(l).commodityNum=t)},null,8,["value"])]),_:1}),e(i,{label:"\u4EF7\u683C"},{default:u(()=>[e(v,{value:a(l).price,"onUpdate:value":o[8]||(o[8]=t=>a(l).price=t)},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["visible"])])],64)}}});export{ke as default};

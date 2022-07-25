import{d as W,g as v,P as X,h as Y,r as c,o as w,j as U,p as m,k as e,w as a,l as t,m as N,t as D,y as _,N as Z,Q as ee}from"./vendor.bebcfb65.js";import{h as A}from"./http.47838019.js";import{C as te}from"./crud-api.bf7f3228.js";import{_ as le,a as L}from"./myimglist.3acdf442.js";import"./admin-store.b6bbf792.js";import"./user-store.80d0fbbe.js";import"./reactivity.esm-bundler.f180a2dc.js";import"./register-and-login.befb8532.js";const ue={class:"mb-2 flex justify-start"},oe=_(" \u65B0\u589E\u5546\u54C1 "),ae={class:"ml-5"},ne=_("\u641C\u7D22"),ie={class:"mt-5 h-70vh overflow-y-auto"},de=_("\u67E5\u770B"),se=_("\u67E5\u770B"),me={key:0},re={key:1},pe=_("\u4FEE\u6539"),ve=_("\u5220\u9664"),Be=W({setup(ce){const{remove:$,viss:C,editOk:M,addOk:R,fetch:V,data:j,query:fe,where:s,search:B,pagination:q,pageChange:T}=te("commoditys");let f=v(!0);v(!1),v("");const F=localStorage.getItem("role");let g=v([]);const G=async()=>{const n=await A.post(`/commoditys/Goods/${localStorage.userid}`);n.length===0?F==="admin"?N.info("\u5F53\u524D\u4E3A\u7BA1\u7406\u5458\u7528\u6237"):N.info("\u8BE5\u7528\u6237\u4E0B\u65E0\u5E97\u94FA"):(g.value=n.map(l=>({label:l.title,value:l.id})),g.value[0].value&&(s.value.shop=g.value[0].value,o.value.shop=s.value.shop,B()))},K=()=>{o.value.shop=s.value.shop,B()};v("addShop"),s.value={commodityName:"",title:"",shop:""};let o=v({commodityName:"",commodityIntroduce:"",image:[],title:"",parameter:[],commodityNum:0,price:0,shop:""});const P=()=>{o.value={commodityName:"",commodityIntroduce:"",image:[],title:"",parameter:[],commodityNum:0,price:0,shop:o.value.shop}},Q=()=>{g.value.length===0?F==="admin"?N.info("\u5F53\u524D\u4E3A\u7BA1\u7406\u5458\u7528\u6237"):N.error("\u8BE5\u7528\u6237\u4E0B\u65E0\u5E97\u94FA,\u4E0D\u80FD\u65B0\u589E\u5546\u54C1"):(C.value.add=!0,f.value=!f.value)};let E=v([]);const z=async()=>{const n=await A.get("commodity-class",{params:{query:{limit:999}}});E.value=n.data.map(l=>({label:l.title,value:l._id}))},I=(n,l)=>l.label.toLowerCase().indexOf(n.toLowerCase())>=0,x=()=>{P(),console.log("cancel")};let O=v("");const H=n=>{o.value.image=n.image,o.value.commodityName=n.commodityName,o.value.price=n.price,o.value.commodityIntroduce=n.commodityIntroduce,o.value.title=n.title._id,o.value.parameter=n.parameter,o.value.commodityNum=n.commodityNum,O.value=n._id,C.value.edit=!0,f.value=!f.value};X(f,(n,l)=>{console.log("aaa\u4FA6\u542C\u5668"),console.log(n),console.log(l)});const S=(n,l)=>{console.log(n),Z.info({title:`${l}`,content:ee("div",{},`${n}`),onOk(){console.log("ok")}})};return Y(()=>{z(),G(),F=="admin"&&V()}),(n,l)=>{const y=c("a-button"),k=c("a-select"),i=c("a-form-item"),b=c("a-form"),d=c("a-input"),r=c("a-table-column"),J=c("a-table"),h=c("a-modal");return w(),U("div",null,[m("div",ue,[m("div",null,[e(y,{onClick:Q,type:"primary"},{default:a(()=>[oe]),_:1})]),m("div",ae,[e(b,{layout:"inline"},{default:a(()=>[e(i,{label:"\u5207\u6362\u5E97\u94FA",class:"w-44"},{default:a(()=>[e(k,{options:t(g),value:t(s).shop,"onUpdate:value":l[0]||(l[0]=u=>t(s).shop=u),onChange:K},null,8,["options","value"])]),_:1})]),_:1})]),m("div",null,[e(b,{layout:"inline"},{default:a(()=>[e(i,{label:"\u5546\u54C1\u540D\uFF1A",class:"w-52"},{default:a(()=>[e(d,{value:t(s).commodityName,"onUpdate:value":l[1]||(l[1]=u=>t(s).commodityName=u)},null,8,["value"])]),_:1}),e(i,{label:"\u6240\u5C5E\u5206\u7C7B",class:"w-44"},{default:a(()=>[e(k,{options:t(E),value:t(s).title,"onUpdate:value":l[2]||(l[2]=u=>t(s).title=u),allowClear:!0,showSearch:!0,"filter-Option":I},null,8,["options","value"])]),_:1}),e(i,null,{default:a(()=>[e(y,{type:"primary",onClick:t(B)},{default:a(()=>[ne]),_:1},8,["onClick"])]),_:1})]),_:1})])]),m("div",ie,[e(J,{dataSource:t(j),rowKey:"title",pagination:t(q),onChange:t(T)},{default:a(()=>[e(r,{title:"\u5546\u54C1\u540D",dataIndex:"commodityName",key:"commodityName",align:"center"}),e(r,{title:"\u5546\u54C1\u4ECB\u7ECD",dataIndex:"commodityIntroduce",key:"commodityIntroduce",align:"center"},{default:a(({record:u})=>[e(y,{type:"link",onClick:p=>S(u.commodityIntroduce,"\u5546\u54C1\u4ECB\u7ECD")},{default:a(()=>[de]),_:2},1032,["onClick"])]),_:1}),e(r,{title:"\u53C2\u6570",dataIndex:"parameter",key:"parameter",align:"center"},{default:a(({record:u})=>[e(y,{type:"link",onClick:p=>S(u.parameter,"\u53C2\u6570")},{default:a(()=>[se]),_:2},1032,["onClick"])]),_:1}),e(r,{align:"center",title:"\u6570\u91CF",dataIndex:"commodityNum",key:"commodityNum"}),e(r,{title:"\u4EF7\u683C",dataIndex:"price",key:"price",align:"center"}),e(r,{title:"\u5206\u7C7B",dataIndex:"title",key:"title",align:"center"},{default:a(({record:u})=>{var p;return[m("span",null,D((p=u.title)==null?void 0:p.title),1)]}),_:1}),e(r,{title:"\u6240\u5C5E\u5546\u94FA",dataIndex:"shop",key:"shop",align:"center"},{default:a(({record:u})=>{var p;return[m("span",null,D((p=u.shop)==null?void 0:p.title),1)]}),_:1}),e(r,{title:"\u56FE\u7247",dataIndex:"image",key:"image",align:"center"},{default:a(({record:u})=>[u.image.length==0?(w(),U("div",me,"\u7A7A")):(w(),U("div",re,[e(le,{URL:u.image},null,8,["URL"])]))]),_:1}),e(r,{title:"\u64CD\u4F5C",dataIndex:"operation",key:"operation",align:"center"},{default:a(({record:u})=>[m("div",null,[e(y,{type:"link",onClick:p=>H(u)},{default:a(()=>[pe]),_:2},1032,["onClick"]),e(y,{type:"link",onClick:p=>t($)(u,u.commodityName)},{default:a(()=>[ve]),_:2},1032,["onClick"])])]),_:1})]),_:1},8,["dataSource","pagination","onChange"])]),m("div",null,[e(h,{visible:t(C).add,"onUpdate:visible":l[10]||(l[10]=u=>t(C).add=u),title:"\u65B0\u589E\u5546\u54C1",onOk:l[11]||(l[11]=u=>t(R)(t(o))),afterClose:x,centered:!0},{default:a(()=>[e(b,{model:t(o)},{default:a(()=>[e(i,{label:"\u5546\u54C1\u540D"},{default:a(()=>[e(d,{value:t(o).commodityName,"onUpdate:value":l[3]||(l[3]=u=>t(o).commodityName=u)},null,8,["value"])]),_:1}),e(i,{label:"\u5206\u7C7B"},{default:a(()=>[e(k,{allowClear:!0,showSearch:!0,options:t(E),value:t(o).title,"onUpdate:value":l[4]||(l[4]=u=>t(o).title=u),"filter-Option":I},null,8,["options","value"])]),_:1}),e(i,{label:"\u5546\u54C1\u7B80\u4ECB"},{default:a(()=>[e(d,{value:t(o).commodityIntroduce,"onUpdate:value":l[5]||(l[5]=u=>t(o).commodityIntroduce=u)},null,8,["value"])]),_:1}),e(i,{label:"\u5546\u54C1\u56FE\u7247"},{default:a(()=>[e(L,{onOnSuccess:l[6]||(l[6]=u=>{t(o).image=u}),resetList:t(f)},null,8,["resetList"])]),_:1}),e(i,{label:"\u53C2\u6570"},{default:a(()=>[e(d,{value:t(o).parameter,"onUpdate:value":l[7]||(l[7]=u=>t(o).parameter=u)},null,8,["value"])]),_:1}),e(i,{label:"\u6570\u91CF"},{default:a(()=>[e(d,{value:t(o).commodityNum,"onUpdate:value":l[8]||(l[8]=u=>t(o).commodityNum=u)},null,8,["value"])]),_:1}),e(i,{label:"\u4EF7\u683C"},{default:a(()=>[e(d,{value:t(o).price,"onUpdate:value":l[9]||(l[9]=u=>t(o).price=u)},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["visible"])]),m("div",null,[e(h,{visible:t(C).edit,"onUpdate:visible":l[19]||(l[19]=u=>t(C).edit=u),title:"\u4FEE\u6539\u5546\u54C1\u4FE1\u606F",onOk:l[20]||(l[20]=u=>t(M)(t(O),t(o))),afterClose:x,centered:!0},{default:a(()=>[e(b,{model:t(o)},{default:a(()=>[e(i,{label:"\u5546\u54C1\u540D"},{default:a(()=>[e(d,{value:t(o).commodityName,"onUpdate:value":l[12]||(l[12]=u=>t(o).commodityName=u)},null,8,["value"])]),_:1}),e(i,{label:"\u5206\u7C7B"},{default:a(()=>[e(k,{allowClear:!0,showSearch:!0,options:t(E),value:t(o).title,"onUpdate:value":l[13]||(l[13]=u=>t(o).title=u),"filter-Option":I},null,8,["options","value"])]),_:1}),e(i,{label:"\u5546\u54C1\u7B80\u4ECB"},{default:a(()=>[e(d,{value:t(o).commodityIntroduce,"onUpdate:value":l[14]||(l[14]=u=>t(o).commodityIntroduce=u)},null,8,["value"])]),_:1}),e(i,{label:"\u5546\u54C1\u56FE\u7247"},{default:a(()=>[e(L,{imgList:t(o).image,resetList:t(f),onOnSuccess:l[15]||(l[15]=u=>{t(o).image=u})},null,8,["imgList","resetList"])]),_:1}),e(i,{label:"\u53C2\u6570"},{default:a(()=>[e(d,{value:t(o).parameter,"onUpdate:value":l[16]||(l[16]=u=>t(o).parameter=u)},null,8,["value"])]),_:1}),e(i,{label:"\u6570\u91CF"},{default:a(()=>[e(d,{value:t(o).commodityNum,"onUpdate:value":l[17]||(l[17]=u=>t(o).commodityNum=u)},null,8,["value"])]),_:1}),e(i,{label:"\u4EF7\u683C"},{default:a(()=>[e(d,{value:t(o).price,"onUpdate:value":l[18]||(l[18]=u=>t(o).price=u)},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["visible"])])])}}});export{Be as default};

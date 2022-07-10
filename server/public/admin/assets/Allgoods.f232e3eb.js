import{d as z,h as m,G as H,j as J,r,o as b,k as N,p as n,l as e,w as u,u as a,n as P,F as Q,m as W,v as I,y as E}from"./vendor.ce4e530f.js";import{h as U}from"./http.fc6e7509.js";import{C as X}from"./crud-api.7293b100.js";import{_ as Y,a as Z}from"./myimglist.60ceed87.js";import"./admin-store.26ef1a35.js";import"./user-store.e39d293f.js";import"./reactivity.esm-bundler.c1ee0d40.js";import"./register-and-login.1c71b176.js";const ee=n("div",{class:"mb-2 text-2xl"},"\u5546\u54C1\u7BA1\u7406",-1),te=E("\u641C\u7D22"),ae=["src"],le={class:"mt-5"},oe={key:0},ue={key:1},ie=E("\u4FEE\u6539"),ne=E("\u5220\u9664"),ge=z({setup(de){const{remove:S,viss:f,editOk:L,addOk:se,fetch:A,data:D,query:me,where:c,search:w,pagination:M,pageChange:V}=X("commoditys");let _=m(!0),y=m(!1),$=m(""),C=m([]);const R=async()=>{const i=await U.post(`/commoditys/Goods/${localStorage.userid}`);i.length===0?W.info("\u8BE5\u7528\u6237\u4E0B\u65E0\u5E97\u94FA"):(C.value=i.map(l=>({label:l.title,value:l.id})),C.value[0].value&&(c.value.shop=C.value[0].value,o.value.shop=c.value.shop,w()))};m("addShop"),c.value={commodityName:"",title:"",shop:""};let o=m({commodityName:"",commodityIntroduce:"",image:[],title:"",parameter:[],commodityNum:0,price:0,shop:""});const G=()=>{o.value={commodityName:"",commodityIntroduce:"",image:[],title:"",parameter:[],commodityNum:0,price:0,shop:o.value.shop}};let g=m([]);const T=async()=>{const i=await U.get("commodity-class",{params:{limit:999}});g.value=i.data.map(l=>({label:l.title,value:l._id}))},F=(i,l)=>l.label.toLowerCase().indexOf(i.toLowerCase())>=0,j=()=>{G(),console.log("cancel")};let h=m("");const q=i=>{o.value.image=i.image,o.value.commodityName=i.commodityName,o.value.price=i.price,o.value.commodityIntroduce=i.commodityIntroduce,o.value.title=i.title._id,o.value.parameter=i.parameter,o.value.commodityNum=i.commodityNum,h.value=i._id,f.value.edit=!0,_.value=!_.value};return H(_,(i,l)=>{console.log("aaa\u4FA6\u542C\u5668")}),J(()=>{T(),R(),localStorage.getItem("role")=="admin"&&A()}),(i,l)=>{const v=r("a-input"),d=r("a-form-item"),x=r("a-select"),k=r("a-button"),B=r("a-form"),O=r("a-modal"),s=r("a-table-column"),K=r("a-table");return b(),N(Q,null,[n("div",null,[ee,n("div",null,[n("div",null,[e(B,{layout:"inline"},{default:u(()=>[e(d,{label:"\u5546\u54C1\u540D\uFF1A",class:"w-52"},{default:u(()=>[e(v,{value:a(c).commodityName,"onUpdate:value":l[0]||(l[0]=t=>a(c).commodityName=t)},null,8,["value"])]),_:1}),e(d,{label:"\u6240\u5C5E\u5206\u7C7B",class:"w-44"},{default:u(()=>[e(x,{options:a(g),value:a(c).title,"onUpdate:value":l[1]||(l[1]=t=>a(c).title=t),allowClear:!0,showSearch:!0,"filter-Option":F},null,8,["options","value"])]),_:1}),e(d,null,{default:u(()=>[e(k,{type:"primary",onClick:a(w)},{default:u(()=>[te]),_:1},8,["onClick"])]),_:1})]),_:1})])]),e(O,{visible:a(y),"onUpdate:visible":l[2]||(l[2]=t=>P(y)?y.value=t:y=t),title:"Basic Modal",onOk:i.handleOk,centered:!0},{default:u(()=>[n("img",{src:a($)},null,8,ae)]),_:1},8,["visible","onOk"]),n("div",le,[e(K,{dataSource:a(D),rowKey:"title",pagination:a(M),onChange:a(V),scroll:{y:390}},{default:u(()=>[e(s,{title:"id",dataIndex:"_id",key:"_id",class:"w-40",align:"center"}),e(s,{align:"center",title:"\u5546\u54C1\u540D",dataIndex:"commodityName",key:"commodityName"}),e(s,{align:"center",title:"\u5546\u54C1\u4ECB\u7ECD",dataIndex:"commodityIntroduce",key:"commodityIntroduce"}),e(s,{align:"center",title:"\u53C2\u6570",dataIndex:"parameter",key:"parameter"},{default:u(({record:t})=>[n("span",null,I(t.parameter),1)]),_:1}),e(s,{align:"center",title:"\u6570\u91CF",dataIndex:"commodityNum",key:"commodityNum"}),e(s,{title:"\u4EF7\u683C",dataIndex:"price",key:"price",align:"center"}),e(s,{title:"\u5206\u7C7B",dataIndex:"title",key:"title",align:"center"},{default:u(({record:t})=>{var p;return[n("span",null,I((p=t.title)==null?void 0:p.title),1)]}),_:1}),e(s,{title:"\u6240\u5C5E\u5546\u94FA",dataIndex:"shop",key:"shop",align:"center"},{default:u(({record:t})=>{var p;return[n("span",null,I((p=t.shop)==null?void 0:p.title),1)]}),_:1}),e(s,{title:"\u56FE\u7247",dataIndex:"image",key:"image",align:"center"},{default:u(({record:t})=>[t.image.length==0?(b(),N("div",oe,"\u7A7A")):(b(),N("div",ue,[e(Y,{URL:t.image},null,8,["URL"])]))]),_:1}),e(s,{title:"\u64CD\u4F5C",dataIndex:"operation",key:"operation",align:"center"},{default:u(({record:t})=>[n("div",null,[e(k,{type:"link",onClick:p=>q(t)},{default:u(()=>[ie]),_:2},1032,["onClick"]),e(k,{type:"link",onClick:p=>a(S)(t,t.title)},{default:u(()=>[ne]),_:2},1032,["onClick"])])]),_:1})]),_:1},8,["dataSource","pagination","onChange"])])]),n("div",null,[e(O,{visible:a(f).edit,"onUpdate:visible":l[10]||(l[10]=t=>a(f).edit=t),title:"\u4FEE\u6539\u5546\u54C1\u4FE1\u606F",onOk:l[11]||(l[11]=t=>a(L)(a(h),a(o))),afterClose:j,centered:!0},{default:u(()=>[e(B,{model:a(o)},{default:u(()=>[e(d,{label:"\u5546\u54C1\u540D"},{default:u(()=>[e(v,{value:a(o).commodityName,"onUpdate:value":l[3]||(l[3]=t=>a(o).commodityName=t)},null,8,["value"])]),_:1}),e(d,{label:"\u5206\u7C7B"},{default:u(()=>[e(x,{allowClear:!0,showSearch:!0,options:a(g),value:a(o).title,"onUpdate:value":l[4]||(l[4]=t=>a(o).title=t),"filter-Option":F},null,8,["options","value"])]),_:1}),e(d,{label:"\u5546\u54C1\u7B80\u4ECB"},{default:u(()=>[e(v,{value:a(o).commodityIntroduce,"onUpdate:value":l[5]||(l[5]=t=>a(o).commodityIntroduce=t)},null,8,["value"])]),_:1}),e(d,{label:"\u5546\u54C1\u56FE\u7247"},{default:u(()=>[e(Z,{imgList:a(o).image,resetList:a(_),onOnSuccess:l[6]||(l[6]=t=>{a(o).image=t})},null,8,["imgList","resetList"])]),_:1}),e(d,{label:"\u53C2\u6570"},{default:u(()=>[e(v,{value:a(o).parameter,"onUpdate:value":l[7]||(l[7]=t=>a(o).parameter=t)},null,8,["value"])]),_:1}),e(d,{label:"\u6570\u91CF"},{default:u(()=>[e(v,{value:a(o).commodityNum,"onUpdate:value":l[8]||(l[8]=t=>a(o).commodityNum=t)},null,8,["value"])]),_:1}),e(d,{label:"\u4EF7\u683C"},{default:u(()=>[e(v,{value:a(o).price,"onUpdate:value":l[9]||(l[9]=t=>a(o).price=t)},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["visible"])])],64)}}});export{ge as default};
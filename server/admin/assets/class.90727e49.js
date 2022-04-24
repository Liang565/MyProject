import{h as p}from"./http.ad2693f8.js";import{C as H}from"./crud-api.9ad782f8.js";import{f as J,n as i,g as L,r,o as Q,h as R,j as v,i as t,w as o,u as l,F as W,p as A,l as m,t as x}from"./vendor.7d6628ed.js";const X=v("div",{class:"text-2xl"},"\u5206\u7C7B\u7BA1\u7406",-1),Y={class:"mt-2"},Z=m("\u65B0\u589E"),ee={class:"mt-4"},te=m("\u65B0\u589E\u5B50\u7C7B"),ae=m("\u4FEE\u6539"),le=m("\u5220\u9664"),ie=J({setup(ue){let d=i(),B=i([{}]),b=i({total:0,current:1,pageSize:0}),O=i({limit:b.value.pageSize,page:1,where:i({})});const _=async()=>{let u=await p.get("/commodity-class/",{params:{query:O.value}});d.value=u.data,b.value.total=u.total,b.value.pageSize=u.total,B.value=[{}],I(),E.value=u.data.map(e=>({label:e.title,value:e._id}))};let E=i([]);const I=()=>{let u=0;for(let e in d.value)d.value[e].parent||(B.value[u]=d.value[e],u++)},$=u=>{for(let e in d.value)if(d.value[e].title==u)return console.log(d.value[e]._id),d.value[e]._id},q=async u=>await p.get(`/commodity-class/${u}`);let a=i({title:"",parent:""}),s=i({add:!1,edit:!1,addSon:!1});const M=()=>{s.value.add=!0};let f=i("");const N=u=>{s.value.addSon=!0,f.value=u.title,a.value.parent=u._id},z=async()=>{console.log(a.value),await p.post("commodity-class/addClass",a.value),A.success("\u6DFB\u52A0\u6210\u529F"),_(),s.value.addSon=!1},T=async()=>{a.value.parent==""?delete a.value.parent:a.value.parent=$(a.value.parent),console.log(a.value),await p.post("commodity-class/addClass",a.value),A.success("\u6DFB\u52A0\u6210\u529F"),_(),s.value.add=!1,y()},y=()=>{a.value={title:"",parent:""}},g=()=>{y(),console.log("cancel")},{remove:V}=H("commodity-class"),U=i(""),k=i(""),j=async u=>{k.value="",s.value.edit=!0,f.value=u.title,U.value=u._id,u.parent&&q(u.parent).then(e=>{k.value=e.title})},K=async()=>{await p.post(`commodity-class/updata/${U.value}`,a.value),s.value.edit=!1,y(),_()};return L(()=>{_()}),(u,e)=>{const C=r("a-button"),F=r("a-input"),c=r("a-form-item"),D=r("a-form"),w=r("a-modal"),S=r("a-table-column"),P=r("a-table"),G=r("a-select");return Q(),R(W,null,[v("div",null,[X,v("div",Y,[t(C,{type:"primary",class:"text-black",onClick:M},{default:o(()=>[Z]),_:1}),t(w,{visible:l(s).add,"onUpdate:visible":e[1]||(e[1]=n=>l(s).add=n),title:"\u65B0\u589E\u7236\u7C7B",onCancel:g,onOk:T},{default:o(()=>[t(D,{model:l(a)},{default:o(()=>[t(c,{label:"\u5206\u7C7B\u540D",name:"title",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5206\u7C7B\u540D",trigger:"blur"},{min:2,max:10,message:"\u5206\u7C7B\u540D\u957F\u5EA62-10"},{}]},{default:o(()=>[t(F,{value:l(a).title,"onUpdate:value":e[0]||(e[0]=n=>l(a).title=n)},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["visible"])]),v("div",ee,[t(P,{dataSource:l(B),rowKey:"_id",scroll:{y:400},class:"h-400"},{default:o(()=>[t(S,{title:"\u7C7B\u522B",dataIndex:"title",key:"title",class:"w-60"}),t(S,{title:"id",dataIndex:"_id",key:"_id"}),t(S,{title:"\u64CD\u4F5C",dataIndex:"operation",key:"operation"},{default:o(({record:n})=>[v("div",null,[t(C,{type:"link",onClick:h=>N(n)},{default:o(()=>[te]),_:2},1032,["onClick"]),t(C,{type:"link",onClick:h=>j(n)},{default:o(()=>[ae]),_:2},1032,["onClick"]),t(C,{type:"link",onClick:h=>l(V)(n,n.title)},{default:o(()=>[le]),_:2},1032,["onClick"])])]),_:1})]),_:1},8,["dataSource"])])]),v("div",null,[t(w,{visible:l(s).edit,"onUpdate:visible":e[4]||(e[4]=n=>l(s).edit=n),title:"\u66F4\u6539\u4FE1\u606F",onCancel:g,onOk:K},{default:o(()=>[t(c,{label:"\u5F53\u524D\u5206\u7C7B\u540D"},{default:o(()=>[m(x(l(f)),1)]),_:1}),t(c,{label:"\u5F53\u524D\u7236\u7C7B\u540D"},{default:o(()=>[m(x(k.value),1)]),_:1}),t(D,{model:l(a)},{default:o(()=>[t(c,{label:"\u65B0\u5206\u7C7B\u540D",name:"title"},{default:o(()=>[t(F,{value:l(a).title,"onUpdate:value":e[2]||(e[2]=n=>l(a).title=n)},null,8,["value"])]),_:1}),t(c,{label:"\u65B0\u7236\u7EA7\u540D",name:"parent"},{default:o(()=>[t(G,{options:l(E),value:l(a).parent,"onUpdate:value":e[3]||(e[3]=n=>l(a).parent=n),allowClear:!0},null,8,["options","value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["visible"])]),v("div",null,[t(w,{visible:l(s).addSon,"onUpdate:visible":e[6]||(e[6]=n=>l(s).addSon=n),title:"\u65B0\u589E\u5B50\u7C7B",onCancel:g,onOk:z},{default:o(()=>[t(D,{model:l(a)},{default:o(()=>[t(c,{label:"\u5F53\u524D\u7C7B"},{default:o(()=>[m(x(l(f)),1)]),_:1}),t(c,{label:"\u65B0\u589E\u5206\u7C7B\u540D",name:"title",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5206\u7C7B\u540D",trigger:"blur"},{min:2,max:10,message:"\u5206\u7C7B\u540D\u957F\u5EA62-10"},{}]},{default:o(()=>[t(F,{value:l(a).title,"onUpdate:value":e[5]||(e[5]=n=>l(a).title=n)},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["visible"])])],64)}}});export{ie as default};
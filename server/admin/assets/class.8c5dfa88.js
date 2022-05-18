import{h as p}from"./http.7ef13b95.js";import{C as G}from"./crud-api.755a1146.js";import{d as H,p as i,g as J,r as d,o as L,h as Q,j as c,i as e,w as o,l as a,F as R,m as U,n as v,t as x}from"./vendor.fd5a6943.js";const W=c("div",{class:"text-2xl"},"\u5206\u7C7B\u7BA1\u7406",-1),X={class:"mt-2"},Y=v("\u65B0\u589E"),Z={class:"mt-4"},ee=v("\u65B0\u589E\u5B50\u7C7B"),te=v("\u4FEE\u6539"),ae=v("\u5220\u9664"),se=H({setup(le){let m=i(),A=i([{}]),_=i({total:0,current:1,pageSize:5}),I=i({limit:_.value.pageSize,page:1,where:{parent:{$exists:!1}}});const f=async()=>{let u=await p.get("/commodity-class/",{params:{query:I.value}});console.log(u.data),m.value=u.data,_.value.total=u.total,_.value.pageSize=u.total,A.value=[{}],S.value=u.data.map(t=>({label:t.title,value:t._id}))};let S=i([]);const O=u=>{for(let t in m.value)if(m.value[t].title==u)return console.log(m.value[t]._id),m.value[t]._id},$=async u=>await p.get(`/commodity-class/${u}`);let l=i({title:"",parent:""}),s=i({add:!1,edit:!1,addSon:!1});const q=()=>{s.value.add=!0};let C=i("");const M=u=>{s.value.addSon=!0,C.value=u.title,l.value.parent=u._id},N=async()=>{console.log(l.value),await p.post("commodity-class/addClass",l.value),U.success("\u6DFB\u52A0\u6210\u529F"),f(),s.value.addSon=!1},z=async()=>{l.value.parent==""?delete l.value.parent:l.value.parent=O(l.value.parent),console.log(l.value),await p.post("commodity-class/addClass",l.value),U.success("\u6DFB\u52A0\u6210\u529F"),f(),s.value.add=!1,b()},b=()=>{l.value={title:"",parent:""}},y=()=>{b(),console.log("cancel")},{remove:T}=G("commodity-class"),E=i(""),k=i(""),V=async u=>{k.value="",s.value.edit=!0,C.value=u.title,E.value=u._id,u.parent&&$(u.parent).then(t=>{k.value=t.title})},j=async()=>{await p.post(`commodity-class/updata/${E.value}`,l.value),s.value.edit=!1,b(),f()};return J(()=>{f()}),(u,t)=>{const B=d("a-button"),F=d("a-input"),r=d("a-form-item"),D=d("a-form"),w=d("a-modal"),g=d("a-table-column"),K=d("a-table"),P=d("a-select");return L(),Q(R,null,[c("div",null,[W,c("div",X,[e(B,{type:"primary",class:"text-black",onClick:q},{default:o(()=>[Y]),_:1}),e(w,{visible:a(s).add,"onUpdate:visible":t[1]||(t[1]=n=>a(s).add=n),title:"\u65B0\u589E\u7236\u7C7B",onCancel:y,onOk:z},{default:o(()=>[e(D,{model:a(l)},{default:o(()=>[e(r,{label:"\u5206\u7C7B\u540D",name:"title",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5206\u7C7B\u540D",trigger:"blur"},{min:2,max:10,message:"\u5206\u7C7B\u540D\u957F\u5EA62-10"},{}]},{default:o(()=>[e(F,{value:a(l).title,"onUpdate:value":t[0]||(t[0]=n=>a(l).title=n)},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["visible"])]),c("div",Z,[e(K,{dataSource:a(m),rowKey:"_id",scroll:{y:400},class:"h-400",pagination:a(_),onChange:u.pageChange},{default:o(()=>[e(g,{title:"\u7C7B\u522B",dataIndex:"title",key:"title",class:"w-60"}),e(g,{title:"id",dataIndex:"_id",key:"_id"}),e(g,{title:"id",dataIndex:"parent",key:"parent"}),e(g,{title:"\u64CD\u4F5C",dataIndex:"operation",key:"operation"},{default:o(({record:n})=>[c("div",null,[e(B,{type:"link",onClick:h=>M(n)},{default:o(()=>[ee]),_:2},1032,["onClick"]),e(B,{type:"link",onClick:h=>V(n)},{default:o(()=>[te]),_:2},1032,["onClick"]),e(B,{type:"link",onClick:h=>a(T)(n,n.title)},{default:o(()=>[ae]),_:2},1032,["onClick"])])]),_:1})]),_:1},8,["dataSource","pagination","onChange"])])]),c("div",null,[e(w,{visible:a(s).edit,"onUpdate:visible":t[4]||(t[4]=n=>a(s).edit=n),title:"\u66F4\u6539\u4FE1\u606F",onCancel:y,onOk:j},{default:o(()=>[e(r,{label:"\u5F53\u524D\u5206\u7C7B\u540D"},{default:o(()=>[v(x(a(C)),1)]),_:1}),e(r,{label:"\u5F53\u524D\u7236\u7C7B\u540D"},{default:o(()=>[v(x(k.value),1)]),_:1}),e(D,{model:a(l)},{default:o(()=>[e(r,{label:"\u65B0\u5206\u7C7B\u540D",name:"title"},{default:o(()=>[e(F,{value:a(l).title,"onUpdate:value":t[2]||(t[2]=n=>a(l).title=n)},null,8,["value"])]),_:1}),e(r,{label:"\u65B0\u7236\u7EA7\u540D",name:"parent"},{default:o(()=>[e(P,{options:a(S),value:a(l).parent,"onUpdate:value":t[3]||(t[3]=n=>a(l).parent=n),allowClear:!0},null,8,["options","value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["visible"])]),c("div",null,[e(w,{visible:a(s).addSon,"onUpdate:visible":t[6]||(t[6]=n=>a(s).addSon=n),title:"\u65B0\u589E\u5B50\u7C7B",onCancel:y,onOk:N},{default:o(()=>[e(D,{model:a(l)},{default:o(()=>[e(r,{label:"\u5F53\u524D\u7C7B"},{default:o(()=>[v(x(a(C)),1)]),_:1}),e(r,{label:"\u65B0\u589E\u5206\u7C7B\u540D",name:"title",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5206\u7C7B\u540D",trigger:"blur"},{min:2,max:10,message:"\u5206\u7C7B\u540D\u957F\u5EA62-10"},{}]},{default:o(()=>[e(F,{value:a(l).title,"onUpdate:value":t[5]||(t[5]=n=>a(l).title=n)},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["visible"])])],64)}}});export{se as default};
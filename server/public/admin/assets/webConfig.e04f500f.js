import{C as N}from"./crud-api.fca6ec91.js";import"./http.72fb258c.js";import{d as V,g as c,h as $,r as d,o as j,j as S,p as i,k as n,w as l,l as e,y as k}from"./vendor.21c9141e.js";const T={class:"my-2"},q=k("\u65B0\u589E\u914D\u7F6E"),K={class:"h-70vh overflow-y-auto"},z={class:"flex justify-center"},A=k("\u4FEE\u6539"),Y=V({setup(G){const{remove:H,viss:u,editOk:C,addOk:E,fetch:F,data:y,query:J,where:L,search:P,pagination:w,pageChange:h}=N("build-home");let x=c("create");const D=()=>{u.value.add=!0};let m=c("");const B=s=>{u.value.edit=!0,o.value.name=s.name,m.value=s._id},O=(s,t)=>{for(let r in t)t[r]==""&&delete t[r];C(s,t)};let o=c({name:""});const U=()=>{o.value={name:""},m.value=""},v=()=>{U(),console.log("cancel")};return $(()=>{F()}),(s,t)=>{const r=d("a-button"),M=d("a-alert"),_=d("a-table-column"),I=d("a-table"),p=d("a-input"),f=d("a-form-item"),b=d("a-form"),g=d("a-modal");return j(),S("div",null,[i("div",null,[i("div",T,[n(r,{onClick:D,type:"primary"},{default:l(()=>[q]),_:1})]),i("div",null,[n(M,{message:"\u4E0D\u53EF\u968F\u610F\u4FEE\u6539\u914D\u7F6E\u540D\u79F0\uFF01",banner:""})]),i("div",K,[n(I,{dataSource:e(y),rowKey:"_id",pagination:e(w),onChange:e(h)},{default:l(()=>[n(_,{title:"id",dataIndex:"_id",key:"_id",align:"center",width:"30%"}),n(_,{title:"name",dataIndex:"name",key:"name",align:"center",width:"20%"}),n(_,{key:"setting",title:"setting",align:"center",width:"30%"},{default:l(({record:a})=>[i("div",z,[n(r,{onClick:Q=>B(a),type:"link"},{default:l(()=>[A]),_:2},1032,["onClick"])])]),_:1})]),_:1},8,["dataSource","pagination","onChange"])])]),i("div",null,[n(g,{visible:e(u).add,"onUpdate:visible":t[1]||(t[1]=a=>e(u).add=a),title:"\u65B0\u589E",onOk:t[2]||(t[2]=a=>e(E)(e(o),e(x))),afterClose:v,centered:!0},{default:l(()=>[n(b,{model:e(o)},{default:l(()=>[n(f,{label:"\u914D\u7F6Ename",name:"name"},{default:l(()=>[n(p,{value:e(o).name,"onUpdate:value":t[0]||(t[0]=a=>e(o).name=a)},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["visible"])]),i("div",null,[n(g,{visible:e(u).edit,"onUpdate:visible":t[4]||(t[4]=a=>e(u).edit=a),title:"\u4FEE\u6539",onOk:t[5]||(t[5]=a=>O(e(m),e(o))),afterClose:v,centered:!0},{default:l(()=>[n(b,{model:e(o)},{default:l(()=>[n(f,{label:"\u914D\u7F6Ename",name:"name"},{default:l(()=>[n(p,{value:e(o).name,"onUpdate:value":t[3]||(t[3]=a=>e(o).name=a)},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["visible"])])])}}});export{Y as default};

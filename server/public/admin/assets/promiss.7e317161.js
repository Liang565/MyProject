import{d as E,p as b,g as M,r as n,o as N,h as O,j as u,i as e,w as o,l as a,F as S,n as p}from"./vendor.fd5a6943.js";import"./http.7ef13b95.js";import{C as V}from"./crud-api.82cb9041.js";import"./admin-store.d62c6d54.js";const A=u("div",{class:"mb-2 text-2xl"},"\u6743\u9650\u7BA1\u7406",-1),T={class:"mb-2"},$=p(" \u65B0\u589E\u6743\u9650 "),j={class:"mb-2"},q=p("\u641C\u7D22"),K={class:"mt-5"},z=p("\u5220\u9664"),X=E({setup(G){const{remove:y,viss:m,editOk:H,addOk:g,fetch:k,data:w,query:J,where:d,search:x,pagination:B,pageChange:h}=V("promiss");let s=b({name:""});d.value={};const c=b([{value:"user",label:"user"},{value:"order",label:"order"},{value:"class",label:"class"},{value:"goods",label:"goods"},{value:"shop",label:"shop"}]),F=()=>{m.value.add=!0};return M(()=>{k()}),(U,l)=>{const _=n("a-button"),v=n("a-input"),i=n("a-form-item"),f=n("a-select"),C=n("a-form"),r=n("a-table-column"),I=n("a-table"),D=n("a-modal");return N(),O(S,null,[u("div",null,[A,u("div",T,[e(_,{onClick:F,type:"primary"},{default:o(()=>[$]),_:1})]),u("div",j,[e(C,{layout:"inline"},{default:o(()=>[e(i,{label:"\u6743\u9650\u540D\uFF1A",class:"w-52"},{default:o(()=>[e(v,{value:a(d).name,"onUpdate:value":l[0]||(l[0]=t=>a(d).name=t)},null,8,["value"])]),_:1}),e(i,{label:"\u5206\u7C7B",class:"w-44"},{default:o(()=>[e(f,{options:c.value,value:a(d).category,"onUpdate:value":l[1]||(l[1]=t=>a(d).category=t),allowClear:!0},null,8,["options","value"])]),_:1}),e(i,null,{default:o(()=>[e(_,{type:"primary",onClick:a(x)},{default:o(()=>[q]),_:1},8,["onClick"])]),_:1})]),_:1})]),u("div",K,[e(I,{dataSource:a(w),rowKey:"title",pagination:a(B),onChange:a(h),scroll:{y:390}},{default:o(()=>[e(r,{title:"id",dataIndex:"_id",key:"_id",class:"w-40"}),e(r,{title:"\u5206\u7C7B",dataIndex:"category",key:"name"}),e(r,{title:"\u6743\u9650",dataIndex:"name",key:"name"}),e(r,{title:"\u64CD\u4F5C",dataIndex:"operation",key:"operation"},{default:o(({record:t})=>[u("div",null,[e(_,{type:"link",onClick:L=>a(y)(t,t.name)},{default:o(()=>[z]),_:2},1032,["onClick"])])]),_:1})]),_:1},8,["dataSource","pagination","onChange"])])]),u("div",null,[e(D,{visible:a(m).add,"onUpdate:visible":l[4]||(l[4]=t=>a(m).add=t),title:"\u65B0\u589E\u6743\u9650",onOk:l[5]||(l[5]=t=>a(g)(a(s))),afterClose:U.cancelModel},{default:o(()=>[e(C,{model:a(s)},{default:o(()=>[e(i,{label:"\u6743\u9650"},{default:o(()=>[e(v,{value:a(s).name,"onUpdate:value":l[2]||(l[2]=t=>a(s).name=t)},null,8,["value"])]),_:1}),e(i,{label:"\u5206\u7C7B"},{default:o(()=>[e(f,{value:a(s).category,"onUpdate:value":l[3]||(l[3]=t=>a(s).category=t),style:{width:"100%"},options:c.value},null,8,["value","options"])]),_:1})]),_:1},8,["model"])]),_:1},8,["visible","afterClose"])])],64)}}});export{X as default};
import{h as o}from"./http.baf7a931.js";import{n as t,p as i,M as g,i as v,E as h}from"./vendor.7d6628ed.js";const C=l=>{let c=t({total:999,current:1,pageSize:5});const p=e=>{n.value.page=e.current,c.value.current=e.current,a()};let n=t({limit:c.value.pageSize,page:1,where:t({})}),d=t();const a=async()=>{let e=await o.get(`${l}`,{params:{query:n.value}});d.value=e.data,c.value.total=e.total};let r=t({add:!1,edit:!1,addSon:!1});const F=async(e,s)=>{await o.post(`${l}/${s}`,e),i.success("\u6DFB\u52A0\u6210\u529F"),a(),r.value.add=!1},f=(e,s)=>{g.confirm({title:"\u662F\u5426\u786E\u8BA4\u5220\u9664\uFF1F",icon:v(h),content:v("div",{style:"color:red"},`\u662F\u5426\u5220\u9664:${s} \u6570\u636E\uFF1F`),async onOk(){await o.delete(`${l}/${e._id}`),i.success("\u5DF2\u5220\u9664")},onCancel(){console.log("Cancel")}}),a()},m=async(e,s)=>{await o.put(`${l}/${e}`,s),i.success("\u5DF2\u4FEE\u6539"),a(),r.value.edit=!1};let u=t({});return{remove:f,viss:r,editOk:m,addOk:F,fetch:a,data:d,query:n,where:u,search:()=>{for(let e in u.value)u.value[e]==""&&delete u.value[e];n.value.where=u.value,a()},pagination:c,pageChange:p}};export{C};

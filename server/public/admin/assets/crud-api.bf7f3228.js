import{h as i}from"./http.47838019.js";import{g as s,m as r,N as h,k as d,O as m}from"./vendor.bebcfb65.js";const A=o=>{let u=s({total:0,current:1,pageSize:5});const f=e=>{a.value.page=e.current,u.value.current=e.current,t()};let a=s({limit:u.value.pageSize,page:1,where:s({})}),n=s();const t=async()=>{console.log("fetch");let e=await i.get(`${o}`,{params:{query:a.value}});e.total===0&&r.info("\u6570\u636E\u4E3A\u7A7A"),n.value=e.data,u.value.total=e.total,n.value.length==0&&e.total!=0&&(a.value.page=a.value.page-1,u.value.current=u.value.current-1,t())};let v=s({add:!1,edit:!1,addSon:!1});const g=async(e,l)=>{l?await i.post(`${o}/${l}`,e):await i.post(`${o}`,e),r.success("\u6DFB\u52A0\u6210\u529F"),n.value.length==a.value.limit&&(u.value.total+1)%a.value.limit!=0&&(console.log("\u7A7A\u767D\u5F97\u5730\u65B9\u65B0\u589E\u4E86\u4E00\u4E2A\u6570\u636E"),a.value.page=Math.floor(u.value.total/a.value.limit)+1,u.value.current=a.value.page),v.value.add=!1,t()},p=(e,l)=>{h.confirm({title:"\u662F\u5426\u786E\u8BA4\u5220\u9664\uFF1F",icon:d(m),content:d("div",{style:"color:red"},`\u662F\u5426\u5220\u9664:${l} \u6570\u636E\uFF1F`),async onOk(){await i.delete(`${o}/${e._id}`),r.success("\u5DF2\u5220\u9664"),t()},onCancel(){console.log("Cancel"),t()}})},F=async(e,l)=>{await i.put(`${o}/${e}`,l),r.success("\u5DF2\u4FEE\u6539"),t(),v.value.edit=!1};let c=s({});return{remove:p,viss:v,editOk:F,addOk:g,fetch:t,data:n,query:a,where:c,search:()=>{for(let e in c.value)c.value[e]==""&&delete c.value[e];a.value.page<1&&(a.value.page=1),a.value.where=c.value,t()},pagination:u,pageChange:f}};export{A as C};

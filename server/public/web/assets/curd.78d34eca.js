/* empty css             *//* empty css              */import{h as s}from"./http.4caffceb.js";/* empty css              *//* empty css              */import{u as f,r,T as n,D as h}from"./index.f3cf0a3d.js";const q=l=>{const m=f();let c=r(),g=r(),o=r({limit:0,page:1,where:r()});const i=async()=>{const t=await s.get(`/${l}`,{params:{query:o.value}});if(t.total==0)n.fail("\u5185\u5BB9\u4E3A\u7A7A"),c.value=[];else{const u=JSON.stringify(o.value);m.push({query:{query1:u}}),c.value=t.data,g.value=t.total}};return{fetch:i,search:async()=>{console.log(o),i()},data:c,query:o,goGoods:t=>{m.push(`/goods/${t._id}`)},total:g,totalSum:async t=>{let u=0;for(let a in t){const e=await s.put(`/${l}/${t[a]}`),d=await s.put(`commoditys/${e.commodity}`);u=u+e.goodsNum*d.price}return u},removeCart:(t,u)=>{let a=t.length;a===0?n.fail("\u60A8\u8FD8\u6CA1\u6709\u9009\u62E9\u5546\u54C1~"):h.confirm({title:`\u5DF2\u9009\u62E9${a}\u4E2A\u5546\u54C1`,message:"\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F",cancelButtonText:"\u6211\u518D\u60F3\u60F3"}).then(async()=>{for(let e in t)console.log(t[e]),await s.delete(`${l}/${t[e]}`);o.value.where={user:u},i(),n.success("\u5DF2\u5220\u9664~")}).catch(()=>{})}}};export{q as C};

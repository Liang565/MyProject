import{h as c}from"./http.d2a47e04.js";const y=()=>({Collect:async t=>await c.get(`/action/collect/Commodity/${t}/like`),getCollect:async t=>await c.get(`/action/getCollect/Commodity/${t}/like`),getMyAction:async t=>{const o=await c.get(`/action/getMyAction/${t}`);return console.log("\u6267\u884CgetMyAction"),o},searchMyAction:async(t,o)=>{const e={commodityName:o};return await c.post(`/action/searchMyAction/${t}`,e)}});export{y as A};
import{_ as r}from"./index.50ffbeab.js";import{h as c}from"./http.47838019.js";import{d as V}from"./vuedraggable.umd.acc2ebfa.js";import{d as A,g as a,h as R,r as q,o as u,j as m,p as t,F as P,q as T,l as s,k as p,w as d,m as C,y as D,t as $,c as I,D as L,E as M}from"./vendor.bebcfb65.js";function O(l){switch(l){case"../../components/components/grid.vue":return r(()=>import("./grid.beb7c8f7.js"),["assets/grid.beb7c8f7.js","assets/shopCard.80749229.css","assets/upload.vue_vue_type_style_index_0_lang.93e2bfe0.css","assets/icon.f167505d.js","assets/vendor.bebcfb65.js","assets/upload.79d8c00f.js","assets/register-and-login.befb8532.js","assets/admin-store.b6bbf792.js","assets/http.47838019.js"]);case"../../components/components/shopCard.vue":return r(()=>import("./shopCard.65480554.js"),["assets/shopCard.65480554.js","assets/shopCard.80749229.css","assets/upload.vue_vue_type_style_index_0_lang.93e2bfe0.css","assets/admin-store.b6bbf792.js","assets/vendor.bebcfb65.js","assets/http.47838019.js"]);case"../../components/components/swipe.vue":return r(()=>import("./swipe.9832fa61.js"),["assets/swipe.9832fa61.js","assets/swipe.8a05e310.css","assets/upload.vue_vue_type_style_index_0_lang.93e2bfe0.css","assets/upload.79d8c00f.js","assets/register-and-login.befb8532.js","assets/admin-store.b6bbf792.js","assets/vendor.bebcfb65.js","assets/http.47838019.js"]);default:return new Promise(function(_,i){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(i.bind(null,new Error("Unknown variable dynamic import: "+l)))})}}const N={class:"mt-5 flex justify-between"},j=t("div",null,"\u6DFB\u52A0\u7EC4\u4EF6",-1),S={class:"fixed bottom-50vh"},U=D("\u4FDD\u5B58"),z={class:"w-500 h-70vh bg-white overflow-y-auto"},G=t("div",null,[t("div",{id:"option"},"\u8BBE\u7F6E")],-1),W=A({setup(l){const _=e=>M(()=>O(`../../components/components/${e}.vue`));let i=a(),n=a({}),v=a();a();let f=a();const g=e=>{v.value=e.index},k=async()=>{const e=await c.get("components",{params:{query:{limit:999,where:{key:"admin"}}}});i.value=e.data},x=async()=>{const e=await c.post("build-home/findone",{name:"\u5546\u94FA\u63A8\u8350"});n.value=e,console.log(n.value)},E=e=>{n.value.components.push({name:e,option:{index:Date.now()},content:{},index:Date.now()})},b=async e=>{n.value.components.splice(n.value.components.indexOf(e),1)},B=async()=>{const e=await c.get("shops",{params:{query:{limit:999}}});console.log(e.data),f.value=e.data},F=async()=>{await c.put(`build-home/${n.value._id}`,{components:n.value.components})?C.success("\u4FDD\u5B58\u6210\u529F~"):C.success("\u4FDD\u5B58\u5931\u8D25~")};return R(()=>{k(),B(),x()}),(e,h)=>{const y=q("a-button");return u(),m("div",null,[t("div",N,[t("div",null,[j,(u(!0),m(P,null,T(s(i),o=>(u(),m("div",null,[p(y,{type:"primary",class:"w-20 my-2",onClick:w=>E(o.title)},{default:d(()=>[D($(o.name),1)]),_:2},1032,["onClick"])]))),256)),t("div",S,[p(y,{type:"primary",class:"w-20 my-2",onClick:F},{default:d(()=>[U]),_:1})])]),t("div",z,[p(s(V),{modelValue:s(n).components,"onUpdate:modelValue":h[0]||(h[0]=o=>s(n).components=o),group:"people","item-key":"id"},{item:d(({element:o})=>[t("div",null,[(u(),I(L(_(o.name)),{option:o.option,content:o.content,index:s(v),allshops:s(f),onClick:w=>g(o),onRemoveComponent:w=>b(o)},null,8,["option","content","index","allshops","onClick","onRemoveComponent"]))])]),_:1},8,["modelValue"])]),G])])}}});export{W as default};

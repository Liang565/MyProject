import{a as l}from"./index.016760bd.js";import{h as c}from"./http.3d895303.js";import{d as V}from"./vuedraggable.umd.c01f8895.js";import{f as A,g as a,h as R,r as q,o as u,j as m,p as t,F as P,q as T,l as s,k as p,w as d,m as C,y as D,t as $,c as I,D as L,E as M}from"./vendor.1e3ef9c3.js";function O(r){switch(r){case"../../components/components/grid.vue":return l(()=>import("./grid.2d2c393c.js"),["assets/grid.2d2c393c.js","assets/grid.d6964c02.css","assets/upload.vue_vue_type_style_index_0_lang.93e2bfe0.css","assets/icon.389a1795.js","assets/vendor.1e3ef9c3.js","assets/upload.4264d9be.js","assets/register-and-login.8ccb0e5d.js","assets/admin-store.fe4adc91.js","assets/http.3d895303.js"]);case"../../components/components/shopCard.vue":return l(()=>import("./shopCard.20d3b61d.js"),["assets/shopCard.20d3b61d.js","assets/grid.d6964c02.css","assets/upload.vue_vue_type_style_index_0_lang.93e2bfe0.css","assets/admin-store.fe4adc91.js","assets/vendor.1e3ef9c3.js","assets/http.3d895303.js"]);case"../../components/components/swipe.vue":return l(()=>import("./swipe.2268ac47.js"),["assets/swipe.2268ac47.js","assets/swipe.8a05e310.css","assets/upload.vue_vue_type_style_index_0_lang.93e2bfe0.css","assets/upload.4264d9be.js","assets/register-and-login.8ccb0e5d.js","assets/admin-store.fe4adc91.js","assets/vendor.1e3ef9c3.js","assets/http.3d895303.js"]);default:return new Promise(function(_,i){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(i.bind(null,new Error("Unknown variable dynamic import: "+r)))})}}const N={class:"mt-5 flex justify-between"},j=t("div",null,"\u6DFB\u52A0\u7EC4\u4EF6",-1),S={class:"fixed bottom-50vh"},U=D("\u4FDD\u5B58"),z={class:"w-500 h-70vh bg-white overflow-y-auto"},G=t("div",null,[t("div",{id:"option"},"\u8BBE\u7F6E")],-1),W=A({setup(r){const _=e=>M(()=>O(`../../components/components/${e}.vue`));let i=a(),n=a({}),v=a();a();let f=a();const k=e=>{v.value=e.index},x=async()=>{const e=await c.get("components",{params:{query:{limit:999,where:{key:"admin"}}}});i.value=e.data},E=async()=>{const e=await c.post("build-home/findone",{name:"\u5546\u94FA\u63A8\u8350"});n.value=e},g=e=>{n.value.components.push({name:e,option:{index:Date.now()},content:{},index:Date.now()})},b=async e=>{n.value.components.splice(n.value.components.indexOf(e),1)},B=async()=>{const e=await c.get("shops",{params:{query:{limit:999}}});f.value=e.data},F=async()=>{await c.put(`build-home/${n.value._id}`,{components:n.value.components})?C.success("\u4FDD\u5B58\u6210\u529F~"):C.success("\u4FDD\u5B58\u5931\u8D25~")};return R(()=>{x(),B(),E()}),(e,h)=>{const y=q("a-button");return u(),m("div",null,[t("div",N,[t("div",null,[j,(u(!0),m(P,null,T(s(i),o=>(u(),m("div",null,[p(y,{type:"primary",class:"w-20 my-2",onClick:w=>g(o.title)},{default:d(()=>[D($(o.name),1)]),_:2},1032,["onClick"])]))),256)),t("div",S,[p(y,{type:"primary",class:"w-20 my-2",onClick:F},{default:d(()=>[U]),_:1})])]),t("div",z,[p(s(V),{modelValue:s(n).components,"onUpdate:modelValue":h[0]||(h[0]=o=>s(n).components=o),group:"people","item-key":"id"},{item:d(({element:o})=>[t("div",null,[(u(),I(L(_(o.name)),{option:o.option,content:o.content,index:s(v),allshops:s(f),onClick:w=>k(o),onRemoveComponent:w=>b(o)},null,8,["option","content","index","allshops","onClick","onRemoveComponent"]))])]),_:1},8,["modelValue"])]),G])])}}});export{W as default};
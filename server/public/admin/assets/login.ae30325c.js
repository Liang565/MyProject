import{h as i}from"./http.b822b7ad.js";import{d as v,u as B,r as u,b,c as V,e as r,f as o,w as l,H as h}from"./user.9cea656e.js";import{q as x,V as s}from"./reactivity.esm-bundler.f180a2dc.js";import{T as y}from"./function-call.c3127fba.js";import"./vendor.34bbf430.js";import"./http.ac208b77.js";import"./api.0156de1e.js";import"./admin-store.bb77b52f.js";import"./crud-api.73604cab.js";import"./index.5724f61f.js";const w={id:"building"},C=r("div",{class:"text-center pt-48 pb-10 text-4xl"},"\u767B\u5F55",-1),S={style:{margin:"16px"}},k=h(" \u63D0\u4EA4 "),R=v({setup(D){const d=B();let t=x({username:"",password:""});const p=async()=>{console.log("\u6267\u884CloginUser");const e=await i.post("auth/login",t.value);e&&(y.success("\u767B\u9646\u6210\u529F"),localStorage.setItem("token",e.token),setTimeout(()=>{d.push("/")},1e3)),c()},c=async()=>{const e=await i.get("auth/user");localStorage.setItem("userid",e._id),localStorage.setItem("username",e.username),localStorage.setItem("image",e.image),localStorage.setItem("role",e.role),console.log(e)};return(e,a)=>{const m=u("van-field"),_=u("van-cell-group"),g=u("van-button"),f=u("van-form");return b(),V("div",w,[C,r("div",null,[o(f,{onSubmit:p},{default:l(()=>[o(_,{inset:""},{default:l(()=>[o(m,{modelValue:s(t).username,"onUpdate:modelValue":a[0]||(a[0]=n=>s(t).username=n),name:"\u7528\u6237\u540D",label:"\u7528\u6237\u540D",placeholder:"\u7528\u6237\u540D",rules:[{required:!0,message:"\u8BF7\u586B\u5199\u7528\u6237\u540D"}]},null,8,["modelValue"]),o(m,{modelValue:s(t).password,"onUpdate:modelValue":a[1]||(a[1]=n=>s(t).password=n),type:"password",name:"\u5BC6\u7801",label:"\u5BC6\u7801",placeholder:"\u5BC6\u7801",rules:[{required:!0,message:"\u8BF7\u586B\u5199\u5BC6\u7801"}]},null,8,["modelValue"])]),_:1}),r("div",S,[o(g,{round:"",block:"",type:"primary","native-type":"submit"},{default:l(()=>[k]),_:1})])]),_:1})])])}}});export{R as default};
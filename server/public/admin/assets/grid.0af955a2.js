import{d as S,f as a,q as R,C as A,u as F,o as L,r as U,b as m,c as _,w as C,F as $,g as w,h as N,e as v,G as O}from"./user.9cea656e.js";import{c as V,u as K,j as k,o as M,t as q,n as B,C as X,a as j,e as Y,b as H,D as J,E as Q,I as W}from"./function-call.c3127fba.js";import{r as Z,u as ee}from"./use-route.656cc303.js";import{q as P,V as g,X as D}from"./reactivity.esm-bundler.f180a2dc.js";import"./vendor.34bbf430.js";import"./http.ac208b77.js";import"./api.0156de1e.js";import"./admin-store.bb77b52f.js";import"./crud-api.73604cab.js";import"./index.5724f61f.js";const[E,te]=V("grid"),ne={square:Boolean,center:q,border:q,gutter:B,reverse:Boolean,iconSize:B,direction:String,clickable:Boolean,columnNum:X(4)},T=Symbol(E);var oe=S({name:E,props:ne,setup(e,{slots:n}){const{linkChildren:o}=K(T);return o({props:e}),()=>{var s;return a("div",{style:{paddingLeft:k(e.gutter)},class:[te(),{[M]:e.border&&!e.gutter}]},[(s=n.default)==null?void 0:s.call(n)])}}});const re=j(oe),[ae,b]=V("grid-item"),ie=Y({},Z,{dot:Boolean,text:String,icon:String,badge:B,iconColor:String,iconPrefix:String,badgeProps:Object});var se=S({name:ae,props:ie,setup(e,{slots:n}){const{parent:o,index:s}=H(T),c=ee();if(!o)return;const u=R(()=>{const{square:i,gutter:t,columnNum:r}=o.props,f=`${100/+r}%`,d={flexBasis:f};if(i)d.paddingTop=f;else if(t){const p=k(t);d.paddingRight=p,s.value>=r&&(d.marginTop=p)}return d}),h=R(()=>{const{square:i,gutter:t}=o.props;if(i&&t){const r=k(t);return{right:r,bottom:r,height:"auto"}}}),x=()=>{if(n.icon)return a(Q,A({dot:e.dot,content:e.badge},e.badgeProps),{default:n.icon});if(e.icon)return a(W,{dot:e.dot,name:e.icon,size:o.props.iconSize,badge:e.badge,class:b("icon"),color:e.iconColor,badgeProps:e.badgeProps,classPrefix:e.iconPrefix},null)},l=()=>{if(n.text)return n.text();if(e.text)return a("span",{class:b("text")},[e.text])},I=()=>n.default?n.default():[x(),l()];return()=>{const{center:i,border:t,square:r,gutter:f,reverse:d,direction:p,clickable:y}=o.props,z=[b("content",[p,{center:i,square:r,reverse:d,clickable:y,surround:t&&f}]),{[J]:t}];return a("div",{class:[b({square:r})],style:u.value},[a("div",{role:y?"button":void 0,class:z,style:h.value,tabindex:y?0:void 0,onClick:c},[I()])])}}});const G=j(se);const ce={class:"priceDiv"},ue=["onClick"],ye=S({props:{option:{type:Object,default:()=>({})},content:{type:Object,default:()=>({})},index:{type:String,default:""},goods:{type:Object,default:()=>[]}},emits:["removeComponent"],setup(e,{emit:n}){const o=e,s=F();let c=P(!0),u=P(!0);P();const h=l=>{s.push(`/goods/${l}`)},x=l=>{window.location.href=`https:\\${l}`};return L(()=>{o.content.type?o.content.type==="goods"?(c.value=!0,u.value=!1):(c.value=!1,u.value=!0):(c.value=!0,u.value=!0)}),(l,I)=>{const i=U("van-image");return m(),_("div",null,[a(g(re),{"column-num":e.option.column,gutter:e.option.gutter},{default:C(()=>[g(c)?(m(!0),_($,{key:0},w(e.content.menu,t=>(m(),N(g(G),{icon:"photo-o",onClick:r=>h(t.id)},{default:C(()=>[a(i,{src:t.image,fit:"contain"},null,8,["src"]),v("div",ce,[v("div",null,D(t.title),1),v("div",null,D(t.price),1)])]),_:2},1032,["onClick"]))),256)):O("",!0),g(u)?(m(!0),_($,{key:1},w(e.content.menu,t=>(m(),N(g(G),{icon:"photo-o"},{default:C(()=>[v("div",{onClick:r=>x(t.url)},[a(i,{src:t.image,fit:"contain"},null,8,["src"])],8,ue)]),_:2},1024))),256)):O("",!0)]),_:1},8,["column-num","gutter"])])}}});export{ye as default};
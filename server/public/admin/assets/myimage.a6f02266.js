import{c as j,k as f,C as F,x as N,n as u,t as L,m as S,I as V,a as q}from"./http.b40e557a.js";import{d as E,x as A,q as R,v as T,D as U,f as a,E as H,I as O,C as P,y as G,b as h,c as g,w as z,H as b}from"./user.dc7ceeb0.js";import{q as v,V as k}from"./reactivity.esm-bundler.f180a2dc.js";const[J,n]=j("image"),K={src:String,alt:String,fit:String,position:String,round:Boolean,width:u,height:u,radius:u,lazyLoad:Boolean,iconSize:u,showError:L,errorIcon:S("photo-fail"),iconPrefix:String,showLoading:L,loadingIcon:S("photo")};var M=E({name:J,props:K,emits:["load","error"],setup(e,{emit:t,slots:i}){const o=v(!1),s=v(!0),l=v(),{$Lazyload:c}=A().proxy,B=R(()=>{const r={width:f(e.width),height:f(e.height)};return F(e.radius)&&(r.overflow="hidden",r.borderRadius=f(e.radius)),r});T(()=>e.src,()=>{o.value=!1,s.value=!0});const m=r=>{s.value=!1,t("load",r)},w=r=>{o.value=!0,s.value=!1,t("error",r)},y=(r,d,x)=>x?x():a(V,{name:r,size:e.iconSize,class:d,classPrefix:e.iconPrefix},null),C=()=>{if(s.value&&e.showLoading)return a("div",{class:n("loading")},[y(e.loadingIcon,n("loading-icon"),i.loading)]);if(o.value&&e.showError)return a("div",{class:n("error")},[y(e.errorIcon,n("error-icon"),i.error)])},$=()=>{if(o.value||!e.src)return;const r={alt:e.alt,class:n("img"),style:{objectFit:e.fit,objectPosition:e.position}};return e.lazyLoad?H(a("img",P({ref:l},r),null),[[O("lazy"),e.src]]):a("img",P({src:e.src,onLoad:m,onError:w},r),null)},_=({el:r})=>{const d=()=>{r===l.value&&s.value&&m()};l.value?d():G(d)},I=({el:r})=>{r===l.value&&!o.value&&w()};return c&&N&&(c.$on("loaded",_),c.$on("error",I),U(()=>{c.$off("loaded",_),c.$off("error",I)})),()=>{var r;return a("div",{class:n({round:e.round}),style:B.value},[$(),C(),(r=i.default)==null?void 0:r.call(i)])}}});const D=q(M),Q={key:0},W=b("\u52A0\u8F7D\u5931\u8D25"),X={key:1},Y=b("\u52A0\u8F7D\u5931\u8D25"),re=E({props:{src:{type:Object,default:""},width:{type:String,default:"60"},height:{type:String,default:"60"},radius:{type:String,default:"0"}},setup(e){const t=e;return(i,o)=>(h(),g("div",null,[t.src.length===0?(h(),g("div",Q,[a(k(D),{src:"",width:"60",height:"60",fit:"contain"},{loading:z(()=>[W]),_:1})])):(h(),g("div",X,[a(k(D),{src:t.src[0].url,width:t.width,height:t.height,radius:t.radius,fit:"contain"},{error:z(()=>[Y]),_:1},8,["src","width","height","radius"])]))]))}});export{re as _};

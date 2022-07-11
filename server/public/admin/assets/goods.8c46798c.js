import{_ as l}from"./iconPark.e9e26cfb.js";import{h as L,T as a}from"./http.0a1d0e7b.js";import{d as Y,u as Z,o as tt,r as u,b as c,c as y,e as t,f as e,w as p,F as et,g as ot,h as C,s as b,G as st}from"./user.f5194c42.js";import{_ as nt}from"./myimage.1a6ed043.js";import{A as at}from"./action-api.fc900391.js";import{V as n,X as m,U as s,a as ut}from"./reactivity.esm-bundler.c1ee0d40.js";import"./vendor.d8b6d154.js";import"./http.dfe8b96f.js";import"./api.32dc1098.js";import"./admin-store.abd45c57.js";import"./crud-api.bfc83400.js";import"./index.972b66be.js";const it={class:"flex justify-evenly"},lt={class:"translate-y-1/4"},ct={class:"translate-y-1/4"},rt={class:"translate-y-1/4"},dt={class:"translate-y-1/4"},_t={class:"mb-20"},pt={class:"relative top-1/2 -translate-y-1/2"},mt=["src"],ht={class:"w-11/12 bg-blue-300 h-auto relative left-1/2 -translate-x-1/2 rounded-lg mt-10"},vt={class:"text-lg text-red-600"},ft={class:"text-base"},Ft={class:"m-5 h-5/6"},gt={class:"flex justify-start"},kt={class:"text-lg text-red-600 translate-y-1/2"},yt=t("span",{class:"text-sm"},"\uFFE5",-1),Ct={class:"my-5"},bt={class:"border-2 border-rose-600 text-red-500"},xt={class:"flex justify-between"},Bt=b(" \u8D2D\u4E70\u6570\u91CF "),Et={key:0,class:"text-xs text-gray-600"},Dt={class:"flex mr-10"},At={class:"w-12 text-center"},wt={class:"fixed bottom-10 left-1/2 -translate-x-1/2"},Nt=b("\u786E\u5B9A"),Ut=Y({props:{id:String},setup(j){const h=j;let F=localStorage.getItem("token");const r=Z();let g=n(),x=n(),k=n(),B=n(),E=n(),D=n();const z=async()=>{const o=await L.get(`commoditys/${h.id}`);g.value=o,k.value=o.price,x.value=o.image,B.value=o.commodityIntroduce,E.value=o.shop,D.value=o.image},S=()=>{console.log("\u70B9\u51FB\u641C\u7D22\u6761"),r.push("/search")},I=()=>{r.go(-1)},W=()=>{r.push("/")},V=()=>{F?r.push("/cart1"):a.fail("\u5F53\u524D\u8EAB\u4EFD\u4E3A\u6E38\u5BA2\uFF0C\u8BF7\u767B\u5F55\uFF01")},T=()=>{console.log("\u5206\u4EAB")},$=()=>{r.push(`/shop/${E.value}`)};let d=n(!1),i=n({user:localStorage.getItem("userid"),commodity:h.id,goodsNum:0});const M=()=>{i.value.goodsNum<=0?a({message:"\u6570\u91CF\u4F4E\u4E8E\u8303\u56F4~",position:"bottom"}):i.value.goodsNum--},O=()=>{i.value.goodsNum++},R=()=>{F?d.value=!0:a.fail("\u5F53\u524D\u8EAB\u4EFD\u4E3A\u6E38\u5BA2\uFF0C\u8BF7\u767B\u5F55\uFF01")},U=async()=>{i.value.goodsNum===0?a.fail("\u6570\u91CF\u4E3A0~"):(await L.post("shopping-cart/addCart",i.value),a.success("\u6DFB\u52A0\u6210\u529F~"))},{Collect:G,getCollect:H}=at();localStorage.getItem("userid");let v=n(!1);const A=async()=>{F?(G(h.id).then(o=>{v.value=o}),v.value?a.success("\u6536\u85CF\u6210\u529F~"):a.success("\u53D6\u6D88\u6536\u85CF~")):a.fail("\u5F53\u524D\u8EAB\u4EFD\u4E3A\u6E38\u5BA2\uFF0C\u8BF7\u767B\u5F55\uFF01")};return tt(()=>{z(),H(h.id).then(o=>{v.value=o})}),(o,w)=>{const X=u("van-search"),q=u("van-swipe-item"),J=u("van-swipe"),f=u("van-action-bar-icon"),N=u("van-action-bar-button"),K=u("van-button"),P=u("van-popup"),Q=u("van-action-bar");return c(),y("div",null,[t("div",it,[t("div",lt,[t("button",{onClick:I},[e(l,{type:"back",theme:"outline",size:"24",spin:!1,fill:"#000000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2})])]),t("div",ct,[t("button",{onClick:W},[e(l,{type:"home",theme:"outline",size:"24",spin:!1,fill:"#000000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2})])]),t("div",null,[t("button",{onClick:S},[e(X,{shape:"round",placeholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD"})])]),t("div",rt,[t("button",{onClick:V},[e(l,{type:"shopping",theme:"outline",size:"24",spin:!1,fill:"#000000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2})])]),t("div",dt,[t("button",{onClick:T},[e(l,{type:"more",theme:"outline",size:"24",spin:!1,fill:"#000000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2})])])]),t("div",_t,[t("div",null,[e(J,{autoplay:3e3,"lazy-render":"",height:500},{default:p(()=>[(c(!0),y(et,null,ot(s(x),_=>(c(),C(q,{key:_},{default:p(()=>[t("div",pt,[t("img",{src:_.url},null,8,mt)])]),_:2},1024))),128))]),_:1})]),t("div",ht,[t("div",vt,"\uFFE5"+m(s(k)),1),t("div",ft,m(s(B)),1)])]),t("div",null,[e(Q,null,{default:p(()=>[e(f,{icon:"chat-o",text:"\u5BA2\u670D"}),s(v)?(c(),C(f,{key:0,icon:"star",text:"\u5DF2\u6536\u85CF",color:"#ff5000",onClick:A})):(c(),C(f,{key:1,icon:"star-o",text:"\u6536\u85CF",onClick:A})),e(f,{icon:"shop-o",text:"\u5E97\u94FA",onClick:$}),e(N,{type:"warning",color:"rgb(147 197 253)",text:"\u52A0\u5165\u8D2D\u7269\u8F66",onClick:R}),e(P,{show:s(d),"onUpdate:show":w[0]||(w[0]=_=>ut(d)?d.value=_:d=_),position:"bottom",style:{height:"80%"},closeable:!0,"safe-area-inset-bottom":!0},{default:p(()=>[t("div",Ft,[t("div",gt,[t("div",null,[e(nt,{src:s(D),height:"60"},null,8,["src"])]),t("div",kt,[yt,b(m(s(k)),1)])]),t("div",Ct,[t("span",bt,m(s(g).commodityName),1)]),t("div",xt,[t("div",null,[Bt,s(g).commodityNum>0?(c(),y("span",Et,"\u6709\u8D27")):st("",!0)]),t("div",Dt,[t("div",{onClick:M},[e(l,{type:"reduce",theme:"outline",size:"24",spin:!1,fill:"#000000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2})]),t("div",At,m(s(i).goodsNum),1),t("div",{onClick:O},[e(l,{type:"add",theme:"outline",size:"24",spin:!1,fill:"#000000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2})])])]),t("div",wt,[e(K,{type:"primary",class:"w-80",round:!0,onClick:U},{default:p(()=>[Nt]),_:1})])])]),_:1},8,["show"]),e(N,{color:"rgb(134, 239, 172)",type:"danger",text:"\u7ACB\u5373\u8D2D\u4E70"})]),_:1})])])}}});export{Ut as default};

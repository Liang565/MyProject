import{_ as c}from"./iconPark.7801beea.js";import{h as T}from"./http.b822b7ad.js";import{d as lt,u as ct,o as rt,r,b as m,c as b,e as t,f as e,w as _,H as p,F as dt,g as mt,h as D,G as q}from"./user.9cea656e.js";import{_ as G}from"./myimage.b329f105.js";import{A as _t}from"./action-api.9da93eeb.js";import{q as n,X as a,V as o,a as H}from"./reactivity.esm-bundler.f180a2dc.js";import{T as i}from"./function-call.c3127fba.js";import"./vendor.34bbf430.js";import"./http.ac208b77.js";import"./api.0156de1e.js";import"./admin-store.bb77b52f.js";import"./crud-api.73604cab.js";import"./index.5724f61f.js";const pt={class:"flex justify-evenly"},ht={class:"translate-y-1/4"},vt={class:"translate-y-1/4"},ft={class:"translate-y-1/4"},Ft={class:"translate-y-1/4"},gt={class:"mb-20"},yt={class:"relative top-1/2 -translate-y-1/2"},kt=["src"],Ct={class:"w-11/12 bg-blue-300 h-auto relative left-1/2 -translate-x-1/2 rounded-lg mt-10"},xt={class:"text-lg"},bt={class:"text-lg text-red-600"},Et=t("br",null,null,-1),Bt={class:"text-base text-gray-700"},Dt=t("span",{class:"text-black"},"\u7B80\u4ECB\uFF1A",-1),At={class:"m-5 h-5/6"},Nt={class:"flex justify-start"},wt={class:"text-lg text-red-600 translate-y-1/2"},Lt=t("span",{class:"text-sm"},"\uFFE5",-1),jt={class:"my-5"},zt={class:"border-2 border-rose-600 text-red-500"},St={class:"flex justify-between"},Wt=p(" \u8D2D\u4E70\u6570\u91CF "),It={key:0,class:"text-xs text-gray-600"},Vt={class:"flex mr-10"},Ot={class:"w-12 text-center"},Mt={class:"fixed bottom-10 left-1/2 -translate-x-1/2"},Tt=p("\u52A0\u5165\u8D2D\u7269\u8F66"),qt={class:"m-5 h-5/6"},Gt={class:"flex justify-start"},Ht={class:"text-lg text-red-600 translate-y-1/2"},Rt=t("span",{class:"text-sm"},"\uFFE5",-1),Ut={class:"my-5"},$t={class:"border-2 border-rose-600 text-red-500"},Jt={class:"flex justify-between"},Pt=p(" \u8D2D\u4E70\u6570\u91CF "),Xt={key:0,class:"text-xs text-gray-600"},Kt={class:"flex mr-10"},Qt={class:"w-12 text-center"},Yt={class:"fixed bottom-10 left-1/2 -translate-x-1/2"},Zt=p("\u7ACB\u5373\u8D2D\u4E70"),_e=lt({props:{id:String},setup(R){const g=R;let v=localStorage.getItem("token");const h=ct();let d=n(),A=n(),y=n(),N=n(),w=n(),E=n(),B=0,L=n("");const U=async()=>{const s=await T.get(`commoditys/${g.id}`);d.value=s,y.value=s.price,A.value=s.image,N.value=s.commodityIntroduce,w.value=s.shop,E.value=s.image,B=s.commodityNum,L.value=s.commodityName},$=()=>{console.log("\u70B9\u51FB\u641C\u7D22\u6761"),h.push("/search")},J=()=>{h.go(-1)},P=()=>{h.push("/")},X=()=>{v?h.push("/cart1"):i.fail("\u5F53\u524D\u8EAB\u4EFD\u4E3A\u6E38\u5BA2\uFF0C\u8BF7\u767B\u5F55\uFF01")},K=()=>{console.log("\u5206\u4EAB")},Q=()=>{h.push(`/shop/${w.value}`)};let f=n(!1),u=n({user:localStorage.getItem("userid"),commodity:g.id,goodsNum:0});const j=()=>{u.value.goodsNum<=0?i({message:"\u6570\u91CF\u4F4E\u4E8E\u8303\u56F4~",position:"bottom"}):u.value.goodsNum--},z=()=>{B>u.value.goodsNum?u.value.goodsNum++:i({message:"\u6570\u91CF\u9AD8\u4E8E\u5E93\u5B58~",position:"bottom"})},Y=()=>{v?B<=0?i.fail("\u5E93\u5B58\u4E3A0~"):f.value=!0:i.fail("\u5F53\u524D\u8EAB\u4EFD\u4E3A\u6E38\u5BA2\uFF0C\u8BF7\u767B\u5F55\uFF01")},Z=async()=>{u.value.goodsNum===0?i.fail("\u6570\u91CF\u4E3A0~"):(await T.post("shopping-cart/addCart",u.value),i.success("\u6DFB\u52A0\u6210\u529F~"))},S=()=>{u.value.goodsNum=0};let F=n(!1);const tt=()=>{v?F.value=!0:i.fail("\u5F53\u524D\u8EAB\u4EFD\u4E3A\u6E38\u5BA2\uFF0C\u8BF7\u767B\u5F55\uFF01")};let W=n([]);const et=()=>{u.value.goodsNum===0?i.fail("\u6570\u91CF\u4E3A0~"):(W.value.push({goodsNum:u.value.goodsNum,commodity:d.value._id}),h.push({path:"/settlement",query:{model:JSON.stringify(W.value),total:u.value.goodsNum*d.value.price,key:"goods"}}))},{Collect:ot,getCollect:st}=_t();localStorage.getItem("userid");let k=n(!1);const I=async()=>{v?(ot(g.id).then(s=>{k.value=s}),k.value?i.success("\u6536\u85CF\u6210\u529F~"):i.success("\u53D6\u6D88\u6536\u85CF~")):i.fail("\u5F53\u524D\u8EAB\u4EFD\u4E3A\u6E38\u5BA2\uFF0C\u8BF7\u767B\u5F55\uFF01")};return rt(()=>{U(),v&&st(g.id).then(s=>{k.value=s})}),(s,C)=>{const ut=r("van-search"),nt=r("van-swipe-item"),it=r("van-swipe"),x=r("van-action-bar-icon"),V=r("van-action-bar-button"),O=r("van-button"),M=r("van-popup"),at=r("van-action-bar");return m(),b("div",null,[t("div",pt,[t("div",ht,[t("button",{onClick:J},[e(c,{type:"back",theme:"outline",size:"24",spin:!1,fill:"#000000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2})])]),t("div",vt,[t("button",{onClick:P},[e(c,{type:"home",theme:"outline",size:"24",spin:!1,fill:"#000000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2})])]),t("div",null,[t("button",{onClick:$},[e(ut,{shape:"round",placeholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD"})])]),t("div",ft,[t("button",{onClick:X},[e(c,{type:"shopping",theme:"outline",size:"24",spin:!1,fill:"#000000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2})])]),t("div",Ft,[t("button",{onClick:K},[e(c,{type:"more",theme:"outline",size:"24",spin:!1,fill:"#000000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2})])])]),t("div",gt,[t("div",null,[e(it,{autoplay:3e3,"lazy-render":"",height:500},{default:_(()=>[(m(!0),b(dt,null,mt(o(A),l=>(m(),D(nt,{key:l},{default:_(()=>[t("div",yt,[t("img",{src:l.url},null,8,kt)])]),_:2},1024))),128))]),_:1})]),t("div",Ct,[t("div",xt,a(o(L)),1),t("div",bt,"\uFFE5"+a(o(y)),1),Et,t("div",Bt,[Dt,p(" "+a(o(N)),1)])])]),t("div",null,[e(at,null,{default:_(()=>[e(x,{icon:"chat-o",text:"\u5BA2\u670D"}),o(k)?(m(),D(x,{key:0,icon:"star",text:"\u5DF2\u6536\u85CF",color:"#ff5000",onClick:I})):(m(),D(x,{key:1,icon:"star-o",text:"\u6536\u85CF",onClick:I})),e(x,{icon:"shop-o",text:"\u5E97\u94FA",onClick:Q}),e(V,{type:"warning",color:"rgb(147 197 253)",text:"\u52A0\u5165\u8D2D\u7269\u8F66",onClick:Y}),e(M,{show:o(f),"onUpdate:show":C[0]||(C[0]=l=>H(f)?f.value=l:f=l),position:"bottom",style:{height:"80%"},closeable:!0,"safe-area-inset-bottom":!0,onClose:S},{default:_(()=>[t("div",At,[t("div",Nt,[t("div",null,[e(G,{src:o(E),height:"60"},null,8,["src"])]),t("div",wt,[Lt,p(a(o(y)),1)])]),t("div",jt,[t("span",zt,a(o(d).commodityName),1)]),t("div",St,[t("div",null,[Wt,o(d).commodityNum>0?(m(),b("span",It,"\u6709\u8D27")):q("",!0)]),t("div",Vt,[t("div",{onClick:j},[e(c,{type:"reduce",theme:"outline",size:"24",spin:!1,fill:"#000000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2})]),t("div",Ot,a(o(u).goodsNum),1),t("div",{onClick:z},[e(c,{type:"add",theme:"outline",size:"24",spin:!1,fill:"#000000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2})])])]),t("div",Mt,[e(O,{type:"primary",class:"w-80",round:!0,onClick:Z},{default:_(()=>[Tt]),_:1})])])]),_:1},8,["show"]),e(V,{color:"rgb(134, 239, 172)",type:"danger",text:"\u7ACB\u5373\u8D2D\u4E70",onClick:tt}),e(M,{show:o(F),"onUpdate:show":C[1]||(C[1]=l=>H(F)?F.value=l:F=l),position:"bottom",style:{height:"80%"},closeable:!0,"safe-area-inset-bottom":!0,onClose:S},{default:_(()=>[t("div",qt,[t("div",Gt,[t("div",null,[e(G,{src:o(E),height:"60"},null,8,["src"])]),t("div",Ht,[Rt,p(a(o(y)),1)])]),t("div",Ut,[t("span",$t,a(o(d).commodityName),1)]),t("div",Jt,[t("div",null,[Pt,o(d).commodityNum>0?(m(),b("span",Xt,"\u6709\u8D27")):q("",!0)]),t("div",Kt,[t("div",{onClick:j},[e(c,{type:"reduce",theme:"outline",size:"24",spin:!1,fill:"#000000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2})]),t("div",Qt,a(o(u).goodsNum),1),t("div",{onClick:z},[e(c,{type:"add",theme:"outline",size:"24",spin:!1,fill:"#000000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2})])])]),t("div",Yt,[e(O,{type:"primary",class:"w-80",round:!0,onClick:et},{default:_(()=>[Zt]),_:1})])])]),_:1},8,["show"])]),_:1})])])}}});export{_e as default};

import{_ as l}from"./iconPark.c9ac1e71.js";import{h as L}from"./http.e29457af.js";/* empty css             *//* empty css              *//* empty css              *//* empty css              */import{d as Y,u as Z,r as n,o as tt,b as a,c,e as y,f as t,g as e,w as p,t as m,h as s,T as u,F as et,j as ot,k as C,i as st,n as b,q as nt}from"./index.bc123074.js";import{_ as at}from"./myimage.58a6722e.js";import{A as ut}from"./action-api.d937c44e.js";/* empty css              */const it={class:"flex justify-evenly"},lt={class:"translate-y-1/4"},ct={class:"translate-y-1/4"},rt={class:"translate-y-1/4"},dt={class:"translate-y-1/4"},_t={class:"mb-20"},pt={class:"relative top-1/2 -translate-y-1/2"},mt=["src"],ht={class:"w-11/12 bg-blue-300 h-auto relative left-1/2 -translate-x-1/2 rounded-lg mt-10"},vt={class:"text-lg text-red-600"},ft={class:"text-base"},Ft={class:"m-5 h-5/6"},gt={class:"flex justify-start"},kt={class:"text-lg text-red-600 translate-y-1/2"},yt=t("span",{class:"text-sm"},"\uFFE5",-1),Ct={class:"my-5"},bt={class:"border-2 border-rose-600 text-red-500"},xt={class:"flex justify-between"},Bt=b(" \u8D2D\u4E70\u6570\u91CF "),Et={key:0,class:"text-xs text-gray-600"},Dt={class:"flex mr-10"},At={class:"w-12 text-center"},wt={class:"fixed bottom-10 left-1/2 -translate-x-1/2"},Nt=b("\u786E\u5B9A"),Ot=Y({__name:"goods",props:{id:String},setup(j){const h=j;let F=localStorage.getItem("token");const r=Z();let g=n(),x=n(),k=n(),B=n(),E=n(),D=n();const z=async()=>{const o=await L.get(`commoditys/${h.id}`);g.value=o,k.value=o.price,x.value=o.image,B.value=o.commodityIntroduce,E.value=o.shop,D.value=o.image},S=()=>{console.log("\u70B9\u51FB\u641C\u7D22\u6761"),r.push("/search")},I=()=>{r.go(-1)},W=()=>{r.push("/")},V=()=>{F?r.push("/cart1"):u.fail("\u5F53\u524D\u8EAB\u4EFD\u4E3A\u6E38\u5BA2\uFF0C\u8BF7\u767B\u5F55\uFF01")},T=()=>{console.log("\u5206\u4EAB")},$=()=>{r.push(`/shop/${E.value}`)};let d=n(!1),i=n({user:localStorage.getItem("userid"),commodity:h.id,goodsNum:0});const M=()=>{i.value.goodsNum<=0?u({message:"\u6570\u91CF\u4F4E\u4E8E\u8303\u56F4~",position:"bottom"}):i.value.goodsNum--},O=()=>{i.value.goodsNum++},R=()=>{F?d.value=!0:u.fail("\u5F53\u524D\u8EAB\u4EFD\u4E3A\u6E38\u5BA2\uFF0C\u8BF7\u767B\u5F55\uFF01")},q=async()=>{i.value.goodsNum===0?u.fail("\u6570\u91CF\u4E3A0~"):(await L.post("shopping-cart/addCart",i.value),u.success("\u6DFB\u52A0\u6210\u529F~"))},{Collect:H,getCollect:U}=ut();localStorage.getItem("userid");let v=n(!1);const A=async()=>{F?(H(h.id).then(o=>{v.value=o}),v.value?u.success("\u6536\u85CF\u6210\u529F~"):u.success("\u53D6\u6D88\u6536\u85CF~")):u.fail("\u5F53\u524D\u8EAB\u4EFD\u4E3A\u6E38\u5BA2\uFF0C\u8BF7\u767B\u5F55\uFF01")};return tt(()=>{z(),U(h.id).then(o=>{v.value=o})}),(o,w)=>{const G=a("van-search"),J=a("van-swipe-item"),K=a("van-swipe"),f=a("van-action-bar-icon"),N=a("van-action-bar-button"),P=a("van-button"),Q=a("van-popup"),X=a("van-action-bar");return c(),y("div",null,[t("div",it,[t("div",lt,[t("button",{onClick:I},[e(l,{type:"back",theme:"outline",size:"24",spin:!1,fill:"#000000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2})])]),t("div",ct,[t("button",{onClick:W},[e(l,{type:"home",theme:"outline",size:"24",spin:!1,fill:"#000000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2})])]),t("div",null,[t("button",{onClick:S},[e(G,{shape:"round",placeholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD"})])]),t("div",rt,[t("button",{onClick:V},[e(l,{type:"shopping",theme:"outline",size:"24",spin:!1,fill:"#000000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2})])]),t("div",dt,[t("button",{onClick:T},[e(l,{type:"more",theme:"outline",size:"24",spin:!1,fill:"#000000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2})])])]),t("div",_t,[t("div",null,[e(K,{autoplay:3e3,"lazy-render":"",height:500},{default:p(()=>[(c(!0),y(et,null,ot(s(x),_=>(c(),C(J,{key:_},{default:p(()=>[t("div",pt,[t("img",{src:_.url},null,8,mt)])]),_:2},1024))),128))]),_:1})]),t("div",ht,[t("div",vt,"\uFFE5"+m(s(k)),1),t("div",ft,m(s(B)),1)])]),t("div",null,[e(X,null,{default:p(()=>[e(f,{icon:"chat-o",text:"\u5BA2\u670D"}),s(v)?(c(),C(f,{key:0,icon:"star",text:"\u5DF2\u6536\u85CF",color:"#ff5000",onClick:A})):(c(),C(f,{key:1,icon:"star-o",text:"\u6536\u85CF",onClick:A})),e(f,{icon:"shop-o",text:"\u5E97\u94FA",onClick:$}),e(N,{type:"warning",color:"rgb(147 197 253)",text:"\u52A0\u5165\u8D2D\u7269\u8F66",onClick:R}),e(Q,{show:s(d),"onUpdate:show":w[0]||(w[0]=_=>st(d)?d.value=_:d=_),position:"bottom",style:{height:"80%"},closeable:!0,"safe-area-inset-bottom":!0},{default:p(()=>[t("div",Ft,[t("div",gt,[t("div",null,[e(at,{src:s(D),height:"60"},null,8,["src"])]),t("div",kt,[yt,b(m(s(k)),1)])]),t("div",Ct,[t("span",bt,m(s(g).commodityName),1)]),t("div",xt,[t("div",null,[Bt,s(g).commodityNum>0?(c(),y("span",Et,"\u6709\u8D27")):nt("",!0)]),t("div",Dt,[t("div",{onClick:M},[e(l,{type:"reduce",theme:"outline",size:"24",spin:!1,fill:"#000000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2})]),t("div",At,m(s(i).goodsNum),1),t("div",{onClick:O},[e(l,{type:"add",theme:"outline",size:"24",spin:!1,fill:"#000000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2})])])]),t("div",wt,[e(P,{type:"primary",class:"w-80",round:!0,onClick:q},{default:p(()=>[Nt]),_:1})])])]),_:1},8,["show"]),e(N,{color:"rgb(134, 239, 172)",type:"danger",text:"\u7ACB\u5373\u8D2D\u4E70"})]),_:1})])])}}});export{Ot as default};
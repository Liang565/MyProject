import{_ as u}from"./iconPark.a1b48024.js";import{h as L}from"./http.4caffceb.js";/* empty css             *//* empty css              *//* empty css              *//* empty css              */import{d as X,u as Y,r as n,o as Z,b as a,c,e as y,f as t,g as e,w as _,t as p,h as s,F as tt,j as et,k as C,i as ot,n as b,q as st,T as m}from"./index.f3cf0a3d.js";import{_ as nt}from"./myimage.19c6c983.js";import{A as at}from"./action-api.f984cf57.js";/* empty css              */const it={class:"flex justify-evenly"},ut={class:"translate-y-1/4"},ct={class:"translate-y-1/4"},lt={class:"translate-y-1/4"},rt={class:"translate-y-1/4"},dt={class:"mb-20"},_t={class:"relative top-1/2 -translate-y-1/2"},pt=["src"],mt={class:"w-11/12 bg-blue-300 h-auto relative left-1/2 -translate-x-1/2 rounded-lg mt-10"},ht={class:"text-lg text-red-600"},vt={class:"text-base"},ft={class:"m-5 h-5/6"},gt={class:"flex justify-start"},kt={class:"text-lg text-red-600 translate-y-1/2"},yt=t("span",{class:"text-sm"},"\uFFE5",-1),Ct={class:"my-5"},bt={class:"border-2 border-rose-600 text-red-500"},xt={class:"flex justify-between"},Ft=b(" \u8D2D\u4E70\u6570\u91CF "),wt={key:0,class:"text-xs text-gray-600"},Dt={class:"flex mr-10"},Bt={class:"w-12 text-center"},Nt={class:"fixed bottom-10 left-1/2 -translate-x-1/2"},Et=b("\u786E\u5B9A"),Mt=X({__name:"goods",props:{id:String},setup(j){const h=j,l=Y();let g=n(),x=n(),k=n(),F=n(),w=n(),D=n();const A=async()=>{const o=await L.get(`commoditys/${h.id}`);g.value=o,k.value=o.price,x.value=o.image,F.value=o.commodityIntroduce,w.value=o.shop,D.value=o.image},z=()=>{console.log("\u70B9\u51FB\u641C\u7D22\u6761"),l.push("/search")},S=()=>{l.go(-1)},W=()=>{l.push("/")},I=()=>{l.push("/cart1")},V=()=>{console.log("\u5206\u4EAB")},T=()=>{l.push(`/shop/${w.value}`)};let r=n(!1),i=n({user:localStorage.getItem("userid"),commodity:h.id,goodsNum:0});const $=()=>{i.value.goodsNum<=0?m({message:"\u6570\u91CF\u4F4E\u4E8E\u8303\u56F4~",position:"bottom"}):i.value.goodsNum--},M=()=>{i.value.goodsNum++},O=()=>{r.value=!0},R=async()=>{i.value.goodsNum===0?m.fail("\u6570\u91CF\u4E3A0~"):(await L.post("shopping-cart/addCart",i.value),m.success("\u6DFB\u52A0\u6210\u529F~"))},{Collect:q,getCollect:H}=at();localStorage.getItem("userid");let v=n(!1);const B=async()=>{q(h.id).then(o=>{v.value=o}),v.value?m.success("\u6536\u85CF\u6210\u529F~"):m.success("\u53D6\u6D88\u6536\u85CF~")};return Z(()=>{A(),H(h.id).then(o=>{v.value=o})}),(o,N)=>{const U=a("van-search"),G=a("van-swipe-item"),J=a("van-swipe"),f=a("van-action-bar-icon"),E=a("van-action-bar-button"),K=a("van-button"),P=a("van-popup"),Q=a("van-action-bar");return c(),y("div",null,[t("div",it,[t("div",ut,[t("button",{onClick:S},[e(u,{type:"back",theme:"outline",size:"24",spin:!1,fill:"#000000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2})])]),t("div",ct,[t("button",{onClick:W},[e(u,{type:"home",theme:"outline",size:"24",spin:!1,fill:"#000000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2})])]),t("div",null,[t("button",{onClick:z},[e(U,{shape:"round",placeholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD"})])]),t("div",lt,[t("button",{onClick:I},[e(u,{type:"shopping",theme:"outline",size:"24",spin:!1,fill:"#000000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2})])]),t("div",rt,[t("button",{onClick:V},[e(u,{type:"more",theme:"outline",size:"24",spin:!1,fill:"#000000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2})])])]),t("div",dt,[t("div",null,[e(J,{autoplay:3e3,"lazy-render":"",height:500},{default:_(()=>[(c(!0),y(tt,null,et(s(x),d=>(c(),C(G,{key:d},{default:_(()=>[t("div",_t,[t("img",{src:d.url},null,8,pt)])]),_:2},1024))),128))]),_:1})]),t("div",mt,[t("div",ht,"\uFFE5"+p(s(k)),1),t("div",vt,p(s(F)),1)])]),t("div",null,[e(Q,null,{default:_(()=>[e(f,{icon:"chat-o",text:"\u5BA2\u670D"}),s(v)?(c(),C(f,{key:0,icon:"star",text:"\u5DF2\u6536\u85CF",color:"#ff5000",onClick:B})):(c(),C(f,{key:1,icon:"star-o",text:"\u6536\u85CF",onClick:B})),e(f,{icon:"shop-o",text:"\u5E97\u94FA",onClick:T}),e(E,{type:"warning",color:"rgb(147 197 253)",text:"\u52A0\u5165\u8D2D\u7269\u8F66",onClick:O}),e(P,{show:s(r),"onUpdate:show":N[0]||(N[0]=d=>ot(r)?r.value=d:r=d),position:"bottom",style:{height:"80%"},closeable:!0,"safe-area-inset-bottom":!0},{default:_(()=>[t("div",ft,[t("div",gt,[t("div",null,[e(nt,{src:s(D),height:"60"},null,8,["src"])]),t("div",kt,[yt,b(p(s(k)),1)])]),t("div",Ct,[t("span",bt,p(s(g).commodityName),1)]),t("div",xt,[t("div",null,[Ft,s(g).commodityNum>0?(c(),y("span",wt,"\u6709\u8D27")):st("",!0)]),t("div",Dt,[t("div",{onClick:$},[e(u,{type:"reduce",theme:"outline",size:"24",spin:!1,fill:"#000000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2})]),t("div",Bt,p(s(i).goodsNum),1),t("div",{onClick:M},[e(u,{type:"add",theme:"outline",size:"24",spin:!1,fill:"#000000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2})])])]),t("div",Nt,[e(K,{type:"primary",class:"w-80",round:!0,onClick:R},{default:_(()=>[Et]),_:1})])])]),_:1},8,["show"]),e(E,{color:"rgb(134, 239, 172)",type:"danger",text:"\u7ACB\u5373\u8D2D\u4E70"})]),_:1})])])}}});export{Mt as default};
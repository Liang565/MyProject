import{d as X,u as Y,r as _,q as Z,o as ee,a as te,b as v,c as s,e as a,f as t,h as e,g as l,s as n,t as k,k as C,w as r,i as z,v as oe,x,T as g,F as se,j as le,y as $}from"./index.cea2f3b9.js";import{C as ue}from"./index.f176a470.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{h as T}from"./http.05edda3e.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import{_ as y}from"./iconPark.c791aa85.js";import{_ as ne}from"./loginDialog.be717e86.js";/* empty css              */const ie={class:"flex justify-between mb-5 ml-5 mt-2"},ae={class:"flex w-16"},re={key:0,class:"mr-2"},ce={key:1},de={class:"text-xl"},me=x(" \u8D2D\u7269\u8F66"),_e={key:0},pe={class:"w-16 h-7"},he={key:1},fe={class:"pb-11"},ve={class:"w-90vw"},ke={class:"text-xl w-40 overflow-hidden text-ellipsis whitespace-nowrap"},ge={class:"flex"},ye=t("div",{class:"text-sm mt-1"},"\u5168\u9009",-1),xe={key:0,class:"flex items-center mx-2"},be={class:"text-sm"},Ce=x(" \u5408\u8BA1\uFF1A "),Fe=t("span",{class:"text-sm text-red-500"}," \uFFE5 ",-1),we={class:"text-xl text-red-500"},De={class:"ml-3"},Ae=x("\u7ED3\u7B97"),Be={key:1,class:"flex items-center"},Ee=x(" \u5DF2\u9009\uFF1A"),Ne={class:"mx-2"},je=x("\u5220\u9664"),Pe=X({__name:"cart",setup(Le){let F=localStorage.getItem("token");const B=Y();let b=_(!1);const{fetch:w,search:Ve,data:E,query:D,goGoods:G,total:N,totalSum:W,removeCart:j}=ue("shopping-cart"),S=async i=>{i.goodsNum===1?g.fail("\u5546\u54C1\u4E0D\u80FD\u518D\u51CF\u5C11\u4E86~"):(g.loading({message:"\u52A0\u8F7D\u4E2D...",forbidClick:!0,duration:500}),T.put(`shopping-cart/${i._id}`,{goodsNum:i.goodsNum-1}),setTimeout(()=>{D.value.where={user:h},w()},500))},q=async i=>{g.loading({message:"\u52A0\u8F7D\u4E2D...",forbidClick:!0,duration:500}),T.put(`shopping-cart/${i._id}`,{goodsNum:i.goodsNum+1}),setTimeout(()=>{D.value.where={user:h},w()},500)},R=()=>{B.go(-2)},U=()=>{B.push("/")};let p=_(!0);const I=()=>{F?p.value=!p.value:g.fail("\u5F53\u524D\u8EAB\u4EFD\u4E3A\u6E38\u5BA2\uFF0C\u8BF7\u767B\u5F55\uFF01")};let u=_([]),c=_(!1);const L=_();let V=_(0);const M=()=>{F?(c.value=!c.value,L.value.toggleAll(c.value)):g.fail("\u5F53\u524D\u8EAB\u4EFD\u4E3A\u6E38\u5BA2\uFF0C\u8BF7\u767B\u5F55\uFF01")};Z(u,(i,d)=>{W(u.value).then(m=>{V.value=m}),u.value.length==E.value.length?c.value=!0:c.value=!1});let H="flex justify-between items-center pl-3 p-3 w-full fixed bottom-12 bg-white",J="flex justify-between items-center pl-3 p-3 w-full fixed bottom-0 bg-white",h=localStorage.getItem("userid"),f=_(!1);return ee(()=>{F?(D.value.where={user:h},w(),te().meta.key=="cart1"&&(b.value=!0)):f.value=!0}),(i,d)=>{const m=v("van-button"),K=v("van-card"),O=v("van-swipe-cell"),P=v("van-checkbox"),Q=v("van-checkbox-group");return s(),a("div",null,[t("div",ie,[t("div",ae,[e(b)?(s(),a("div",re,[t("button",{onClick:R},[l(y,{type:"back",theme:"outline",size:"24",spin:!1,fill:"#000000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2})])])):n("",!0),e(b)?(s(),a("div",ce,[t("button",{onClick:U},[l(y,{type:"home",theme:"outline",size:"24",spin:!1,fill:"#000000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2})])])):n("",!0)]),t("div",de,[me,e(N)?(s(),a("span",_e,"("+k(e(N))+")",1)):n("",!0)]),t("div",pe,[t("button",{onClick:I},[e(p)?(s(),C(y,{key:0,type:"edit-two",theme:"outline",size:"24",spin:!1,fill:"#000000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2})):n("",!0),e(p)?n("",!0):(s(),a("span",he,"\u5B8C\u6210"))])])]),t("div",fe,[l(Q,{modelValue:e(u),"onUpdate:modelValue":d[0]||(d[0]=o=>z(u)?u.value=o:u=o),ref_key:"checkboxGroup",ref:L,class:"flex justify-center"},{default:r(()=>[t("div",ve,[(s(!0),a(se,null,le(e(E),o=>(s(),C(P,{name:o._id,class:"bg-gray-50 rounded-lg flex justify-between mb-3"},{default:r(()=>[l(O,null,{right:r(()=>[l(m,{square:"",text:"\u5220\u9664",type:"danger",class:"delete-button",onClick:A=>e(j)([o._id],e(h))},null,8,["onClick"])]),default:r(()=>[l(K,{num:o.goodsNum,price:o.goodsNum*o.commodity.price,desc:o.commodity._id,thumb:o.commodity.image[0].url,onClick:A=>e(G)(o.commodity)},{title:r(()=>[t("div",ke,k(o.commodity.commodityName),1)]),footer:r(()=>[l(m,{size:"small",icon:"minus",color:"rgb(59, 130, 246)",onClick:$(A=>S(o),["stop"])},null,8,["onClick"]),l(m,{size:"small",icon:"plus",color:"rgb(59, 130, 246)",onClick:$(A=>q(o),["stop"])},null,8,["onClick"])]),_:2},1032,["num","price","desc","thumb","onClick"])]),_:2},1024)]),_:2},1032,["name"]))),256))])]),_:1},8,["modelValue"])]),t("div",{class:oe(e(b)?e(J):e(H))},[t("div",null,[t("button",{onClick:M},[t("div",ge,[e(c)?n("",!0):(s(),C(y,{key:0,type:"full-selection",theme:"outline",size:"24",spin:!1,fill:"#000000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2})),e(c)?(s(),C(y,{key:1,type:"full-selection",theme:"filled",size:"24",spin:!1,fill:"#4a90e2",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2})):n("",!0),ye])])]),e(p)?(s(),a("div",xe,[t("div",null,[t("span",be," \u5DF2\u9009\uFF1A"+k(e(u).length),1),Ce,Fe,t("span",we,k(e(V)),1)]),t("div",De,[l(m,{round:"",type:"primary"},{default:r(()=>[Ae]),_:1})])])):n("",!0),e(p)?n("",!0):(s(),a("div",Be,[t("div",null,[Ee,t("span",null,k(e(u).length),1)]),t("div",Ne,[l(m,{round:"",type:"primary",onClick:d[1]||(d[1]=o=>e(j)(e(u),e(h)))},{default:r(()=>[je]),_:1})])]))],2),t("div",null,[l(ne,{showDialog:e(f),"onUpdate:showDialog":d[2]||(d[2]=o=>z(f)?f.value=o:f=o)},null,8,["showDialog"])])])}}});export{Pe as default};

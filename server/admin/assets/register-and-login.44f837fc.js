import{a as d}from"./admin-store.a0dbab92.js";import{m as v,n as o,p as t,q as w}from"./vendor.7d6628ed.js";import{h as r}from"./http.baf7a931.js";const C=()=>{const l=v();let a=o(!1),e=o({username:"",password:"",pass:""});const n=()=>{console.log("\u6267\u884Cregister"),a.value=!0},c=async()=>{let u=o({username:e.value.username,password:e.value.password,role:"2",state:!0});await r.post("auth/register",u.value),t.success("\u6CE8\u518C\u6210\u529F"),s.value.username=e.value.username,a.value=!1},g=()=>{console.log("RegisterOk"),e.value.password==""||e.value.username==""?t.error("\u8D26\u53F7\u6216\u8005\u5BC6\u7801\u4E3A\u7A7A"):c()};let s=o({username:"",password:""});const i=async()=>{console.log("\u6267\u884CloginUser");const u=await r.post("auth/login",s.value);t.success("\u767B\u9646\u6210\u529F"),localStorage.setItem("token",u.token),l.push("/home")},m=()=>{console.log("\u6267\u884ClogOut"),t.success("\u9000\u51FA"),localStorage.removeItem("token"),l.push("/login")},p=w(()=>!(s.value.username&&s.value.password));return{RegisterUser:n,regModel:e,LoginUser:i,logModel:s,registerVisibel:a,LogOut:m,RegisterSub:g,disabled:p,getUser:async()=>{const u=await r.get("auth/user");d.setAdmin(u)}}};export{C as R};

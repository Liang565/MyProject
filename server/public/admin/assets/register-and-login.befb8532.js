import{a as m}from"./admin-store.b6bbf792.js";import{u as S,g as a,m as t,z as w}from"./vendor.bebcfb65.js";import{h as u}from"./http.47838019.js";const C=()=>{const l=S();let r=a(!1),s=a({username:"",password:"",pass:""});const g=()=>{console.log("\u6267\u884Cregister"),r.value=!0},c=async()=>{let e=a({username:s.value.username,password:s.value.password,role:"user",state:!0});await u.post("auth/register",e.value),t.success("\u6CE8\u518C\u6210\u529F"),o.value.username=s.value.username,r.value=!1},i=()=>{console.log("RegisterOk"),s.value.password==""||s.value.username==""?t.error("\u8D26\u53F7\u6216\u8005\u5BC6\u7801\u4E3A\u7A7A"):c()};let o=a({username:"",password:""});const d=async()=>{console.log("\u6267\u884CloginUser");const e=await u.post("auth/login",o.value);e===""?(t.warning("\u767B\u9646\u5931\u8D25"),t.warning("\u8BF7\u91CD\u65B0\u5C1D\u8BD5")):(t.success("\u767B\u9646\u6210\u529F"),localStorage.setItem("token",e.token),setTimeout(()=>{l.push("/")},500),n())},p=()=>{console.log("\u6267\u884ClogOut"),t.success("\u9000\u51FA"),localStorage.removeItem("token"),localStorage.removeItem("userid"),localStorage.removeItem("username"),localStorage.removeItem("role"),localStorage.removeItem("promiss"),l.push("/login")},v=w(()=>!(o.value.username&&o.value.password)),n=async()=>{if(localStorage.getItem("adminId")){console.log("\u4E00\u952E\u767B\u5F55");const e={userid:localStorage.getItem("userid"),role:localStorage.getItem("role"),username:localStorage.getItem("username")};m.setAdmin(e)}else{const e=await u.get("auth/user");m.setAdmin(e),localStorage.setItem("userid",e._id),localStorage.setItem("role",e.role),localStorage.setItem("username",e.username)}};return{RegisterUser:g,regModel:s,LoginUser:d,logModel:o,registerVisibel:r,LogOut:p,RegisterSub:i,disabled:v,getUser:n,httpURL:"http://www.lianger.fit/admin/api/"}};export{C as R};

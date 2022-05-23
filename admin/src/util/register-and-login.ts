import adminStore from "@/stores/admin-store";
import { message } from "ant-design-vue";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { http } from "../util/http";
import { check } from "./base";

export const RAndLogin = () => {
  const router = useRouter();
  //注册时使用
  let registerVisibel = ref(false);
  let regModel = ref({ username: "", password: "", pass: "" });
  //注册
  const RegisterUser = () => {
    console.log("执行register");
    //弹个表单出来：
    registerVisibel.value = true;
  };

  //确认注册,注册时身份和状态都是默认的
  const RegisterSubOK = async () => {
    let regMoel1 = ref({
      username: regModel.value.username,
      password: regModel.value.password,
      role: "user",
      state: true,
    });
    await http.post("auth/register", regMoel1.value);
    message.success("注册成功");
    logModel.value.username = regModel.value.username;
    registerVisibel.value = false;
  };

  //这个是导出让vue使用的
  const RegisterSub = () => {
    console.log("RegisterOk");
    if (regModel.value.password == "" || regModel.value.username == "") {
      message.error("账号或者密码为空");
    } else {
      RegisterSubOK();
    }
  };
  //登录
  let logModel = ref({ username: "", password: "" });
  const LoginUser = async () => {
    console.log("执行loginUser");

    const data = await http.post("auth/login", logModel.value);
    message.success("登陆成功");
    localStorage.setItem("token", data.token);
    router.push("/home");
  };

  //退出登录 删除token？
  const LogOut = () => {
    console.log("执行logOut");
    message.success("退出");
    localStorage.removeItem("token");
    localStorage.removeItem("userid");
    localStorage.removeItem("username");
    localStorage.removeItem("role");
    localStorage.removeItem("promiss");

    router.push("/login");
  };
  //设置输入框为空时不可以点击登录
  const disabled = computed(() => {
    return !(logModel.value.username && logModel.value.password);
  });
  //获取当前用户名

  const getUser = async () => {
    const data = await http.get("auth/user");
    adminStore.setAdmin(data); //设置全局的用户名
    localStorage.setItem("userid", data._id);
    localStorage.setItem("role", data.role);
    localStorage.setItem("username", data.username);
    // const promiss = data.promiss.map((v) => {
    //   return [v.name];
    // });
    // localStorage.setItem("promiss", promiss);

    // // 如果不是admin,就设置店铺
    // if (data.role != 1) {
    //   const shop = await http.get("shops", {
    //     params: {
    //       query: { where: { user: data._id } },
    //     },
    //   });
    //   adminStore.setShop(shop);
    // }
  };
  const httpURL = import.meta.env.VITE_APPAPI as string;
  return {
    RegisterUser,
    regModel,
    LoginUser,
    logModel,
    registerVisibel,
    LogOut,
    RegisterSub,
    disabled,
    getUser,
    httpURL,
  };
};

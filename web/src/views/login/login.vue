<template>
  <div id="building">
    <div class="text-center pt-48 pb-10 text-4xl">登录</div>
    <div>
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            v-model="logModel.username"
            name="用户名"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="logModel.password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
        </van-cell-group>
        <div style="margin: 16px">
          <van-button round block type="primary" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { http } from "../../util/http";

import { Toast } from "vant";
import { useRouter } from "vue-router";
const router = useRouter();
const LoginUser = () => {
  console.log(logModel.value);
  LoginUser();
};

//登录
let logModel = ref({ username: "", password: "" });
const onSubmit = async () => {
  console.log("执行loginUser");
  const data: any = await http.post("auth/login", logModel.value);
  if (data) {
    Toast.success("登陆成功");
    localStorage.setItem("token", data.token);
    setTimeout(() => {
      router.push("/");
    }, 1000);
  }
  getUser();
};
// 获取登录后的信息
const getUser = async () => {
  const data = <any>await http.get("auth/user");
  localStorage.setItem("userid", data._id);
  localStorage.setItem("username", data.username);
  localStorage.setItem("image", data.image);
  localStorage.setItem("role", data.role);
  console.log(data);
};
</script>
<style>
#building {
  background: url("../../assets/bgg.jpg");

  height: 100vh;

  background-color: rgb(241 245 249 / var(--tw-bg-opacity));
  background-size: cover;
}
</style>

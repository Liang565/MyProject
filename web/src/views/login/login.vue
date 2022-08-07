<template>
  <div id="building">
    <div class="flex justify-center items-center text-4xl pb-10">
      <IconPark
        type="smiling-face-with-squinting-eyes"
        theme="outline"
        size="44"
        :spin="false"
        fill="#000000"
        strokeLinecap="round"
        strokeLinejoin="round"
        :strokeWidth="2"
      />
      登录

      <IconPark
        type="smiling-face-with-squinting-eyes"
        theme="outline"
        size="44"
        :spin="false"
        fill="#000000"
        strokeLinecap="round"
        strokeLinejoin="round"
        :strokeWidth="2"
      />
    </div>
    <div class="pb-24">
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
          <van-button round block type="primary" native-type="submit" @click="">
            提交
          </van-button>
        </div>
      </van-form>
      <div class="flex items-center justify-end pr-5">
        无账号？
        <van-button
          color="#000000"
          size="mini"
          square
          hairline
          @click="register"
          >点击注册</van-button
        >
      </div>
    </div>
    <div>
      <van-notice-bar
        scrollable
        left-icon="volume-o"
        text="提示：用户名：user,密码：user "
      />
    </div>
    <!-- 注册弹窗 -->
    <div>
      <van-action-sheet
        v-model:show="showR"
        cancel-text="取消"
        title="注册"
        close-on-click-action
        @close="onCancelR"
      >
        <div class="h-50vh">
          <van-form @submit="onSubmitR">
            <van-cell-group inset>
              <van-field
                v-model="RModel.username"
                name="用户名"
                label="用户名"
                placeholder="用户名"
                :rules="[{ required: true, message: '请填写用户名' }]"
              />
              <van-field
                v-model="RModel.password"
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
      </van-action-sheet>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { http } from "../../util/http";

import { Toast, NoticeBar, Form, Field, CellGroup, ActionSheet } from "vant";
import { useRouter } from "vue-router";
import IconPark from "../../components/iconPark.vue";
const router = useRouter();

//登录
let logModel = ref({ username: "", password: "" });
const onSubmit = async () => {
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
};
//注册
let showR = ref(false);
let RModel = ref({ username: "", password: "" });
const register = () => {
  showR.value = true;
};
const onSubmitR = async () => {
  let regMoel1 = ref({
    username: RModel.value.username,
    password: RModel.value.password,
    role: "user",
    state: true,
  });
  const res: any = await http.post("auth/register", regMoel1.value);

  if (res) {
    Toast.success("注册成功~");
    showR.value = false;
    logModel.value.username = res.username;
  } else {
    onCancelR();
  }

  // message.success("注册成功");
};
const onCancelR = () => {
  RModel.value = { username: "", password: "" };
};
</script>
<style>
#building {
  background: url("../../assets/bgg.jpg");
  height: 100vh;
  background-color: rgb(241 245 249 / var(--tw-bg-opacity));
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
}
</style>

<template>
  <div id="building">
    <!-- form里面的:model绑定的对象要和编辑的对象一样，并且name时model里面的参数 -->
    <div class="w-1/3">
      <!-- <div>
        <icon
          type="angry-face"
          theme="outline"
          size="48"
          :spin="false"
          fill="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          :strokeWidth="4"
        />
        <icon
          type="grinning-face-with-squinting-eyes"
          theme="outline"
          size="48"
          :spin="false"
          fill="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          :strokeWidth="4"
        />
        <icon
          type="smiling-face-with-squinting-eyes"
          theme="outline"
          size="48"
          :spin="false"
          fill="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          :strokeWidth="4"
        />
        <icon
          type="grinning-face-with-tightly-closed-eyes"
          theme="outline"
          size="48"
          :spin="false"
          fill="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          :strokeWidth="4"
        />
        <icon
          type="winking-face"
          theme="outline"
          size="48"
          :spin="false"
          fill="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          :strokeWidth="4"
        />
        <icon
          type="sly-face-whit-smile"
          theme="outline"
          size="48"
          :spin="false"
          fill="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          :strokeWidth="4"
        />
      </div> -->
      <div>
        <a-form
          :model="logModel"
          :label-col="{ span: 8 }"
          :wrapper-col="{ span: 16 }"
          autocomplete="off"
        >
          <a-form-item
            name="username"
            :rules="[
              { required: true, message: 'Please input your username!' },
            ]"
          >
            <a-input v-model:value="logModel.username" class="w-full">
              <!-- 加一个图标 -->
              <template #prefix>
                <UserOutlined class="site-form-item-icon" />
              </template>
            </a-input>
          </a-form-item>
          <a-form-item
            name="password"
            :rules="[
              { required: true, message: 'Please input your password!' },
            ]"
          >
            <a-input-password v-model:value="logModel.password">
              <!-- 加一个图标 -->
              <template #prefix>
                <LockOutlined class="site-form-item-icon" />
              </template>
            </a-input-password>
          </a-form-item>

          <a-form-item class="text-center">
            <a-button type="submit" @click="RegisterUser">注册</a-button>
            <a-button
              type="submit"
              @click="LoginUser"
              :disabled="disabled"
              class="ml-5"
            >
              登录
            </a-button>
          </a-form-item>
        </a-form>
      </div>
    </div>
    <!-- 注册，对话框 -->
    <a-modal
      v-model:visible="registerVisibel"
      title="注册成为新用户"
      @ok="RegisterSub"
      cancelText="取消"
      okText="注册"
      :ok-button-props="{ disabled: disa }"
      :centered="true"
    >
      <a-form
        :model="regModel"
        :label-col="{ span: 8 }"
        :wrapper-col="{ span: 16 }"
        autocomplete="off"
      >
        <a-form-item
          label="username"
          name="username"
          :rules="[
            { required: true, message: '请输入用户名', trigger: 'blur' },
            {
              min: 3,
              max: 10,
              message: '用户名长度3-10',
            },
          ]"
        >
          <a-input v-model:value="regModel.username">
            <!-- 加一个图标 -->
            <template #prefix>
              <UserOutlined class="site-form-item-icon" />
            </template>
          </a-input>
        </a-form-item>

        <a-form-item
          label="输入密码"
          name="pass"
          :rules="[
            { required: true, message: '请输入密码', trigger: 'blur' },
            {
              min: 3,
              max: 10,
              message: '密码长度3-10',
            },
          ]"
        >
          <a-input-password v-model:value="regModel.pass">
            <!-- 加一个图标 -->
            <template #prefix>
              <LockOutlined class="site-form-item-icon" />
            </template>
          </a-input-password>
        </a-form-item>

        <a-form-item
          label="再次输入密码"
          name="password"
          :rules="[{ required: true, validator: passAgain, trigger: 'blur' }]"
        >
          <a-input-password v-model:value="regModel.password">
            <!-- 加一个图标 -->
            <template #prefix>
              <LockOutlined class="site-form-item-icon" />
            </template>
          </a-input-password>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>
<script lang="ts" setup>
import { RAndLogin } from "../../util/register-and-login";
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import { message } from "ant-design-vue";
import { computed, ref } from "vue";
import icon from "../../components/icon.vue";
const {
  RegisterUser,
  regModel,
  LoginUser,
  logModel,
  registerVisibel,
  LogOut,
  RegisterSub,
  disabled,
} = RAndLogin();
let disa = ref(false);
var passAgain = (rule, value, callback) => {
  if (!value) {
    // return Promise.reject(new Error("请输入密码"));
    disa.value = true;
    return Promise.reject("请输入密码");
  } else if (value !== regModel.value.pass) {
    // return Promise.reject(new Error("两次输入密码不一致!"));
    disa.value = true;
    return Promise.reject("两次输入密码不一致!");
  } else {
    disa.value = false;
    return Promise.resolve();
  }
};
</script>
<style>
#building {
  background: url("../../assets/bgg.jpg");
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(241 245 249 / var(--tw-bg-opacity));
  background-size: 100% 100%;
}
</style>

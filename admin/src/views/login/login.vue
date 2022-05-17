<template>
  <div class="w-100vw h-100vh flex justify-center items-center bg-slate-400">
    <div class="w-400 h-auto">
      <!-- form里面的:model绑定的对象要和编辑的对象一样，并且name时model里面的参数 -->
      <a-form :model="logModel">
        <a-form-item
          label="username"
          name="username"
          :rules="[{ required: true, message: 'Please input your username!' }]"
        >
          <a-input v-model:value="logModel.username">
            <!-- 加一个图标 -->
            <template #prefix>
              <UserOutlined class="site-form-item-icon" />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item
          label="password"
          name="password"
          :rules="[{ required: true, message: 'Please input your password!' }]"
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
          <!-- 注册，对话框 -->
          <a-modal
            v-model:visible="registerVisibel"
            title="注册成为新用户"
            @ok="RegisterSub"
            cancelText="取消"
            okText="注册"
            :ok-button-props="{ disabled: disa }"
          >
            <a-form :model="regModel">
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
                :rules="[
                  { required: true, validator: passAgain, trigger: 'blur' },
                ]"
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
</template>
<script lang="ts" setup>
import { RAndLogin } from "../../util/register-and-login";
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import { message } from "ant-design-vue";
import { computed, ref } from "vue";
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

<template>
  <div class="bg-slate-500 w-500">
    <!-- form里面的:model绑定的对象要和编辑的对象一样，并且name时model里面的参数 -->
    <a-form :model="logModel" class="ml-9">
      <a-form-item
        label="username"
        name="username"
        :rules="[{ required: true, message: 'Please input your username!' }]"
      >
        <a-input v-model:value="logModel.username" class="w-80">
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
        <a-input-password v-model:value="logModel.password" class="w-80">
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
        >
          <a-form :model="regModel">
            <a-form-item
              label="username"
              name="username"
              :rules="[
                { required: true, message: 'Please input your username!' },
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
              label="password"
              name="password"
              :rules="[
                { required: true, message: 'Please input your password!' },
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
</script>

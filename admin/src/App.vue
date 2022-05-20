<template>
  <RouterView />
</template>
<script lang="ts" setup>
import { message } from "ant-design-vue";
import { createRouter, useRoute, useRouter } from "vue-router";

const router = useRouter();
//全局的路由导航守卫
router.beforeEach((to, from) => {
  if (
    to.meta.promiss !== "public" &&
    to.meta.promiss !== localStorage.getItem("role") &&
    localStorage.getItem("role") !== "admin"
  ) {
    message.warn("没有权限进入");
    if (from.path === "/") {
      router.push("/");
    } else return false;
  }
});
</script>

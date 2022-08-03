<template>
  <div>
    <van-nav-bar title="order" left-text="返回" left-arrow @click-left="goMy" />
    <div>
      <van-tabs v-model:active="active" @change="change" :lazy-render="true">
        <van-tab
          v-for="index in routerMap"
          :title="index.title"
          :name="index.path"
        >
          <router-view></router-view>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { http } from "@/util/http";
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { Tab, Tabs } from "vant";
const router = useRouter();
let sss = ref("123");
let value = ref("");
let active = ref("");

const change = () => {
  router.push(active.value);
  console.log(active);
};

const goMy = () => {
  router.push("/my");
};
//获取当前路由
active.value = router.currentRoute.value.path;
const routerMap = router
  .getRoutes()
  .map((v) => ({
    title: <string>v.meta.title,
    icon: v.meta.icon,
    key: v.meta.key,
    path: v.path,
    meta: v.meta,
  }))
  .filter((v: any) => {
    return v.meta.navOrder;
  });
</script>

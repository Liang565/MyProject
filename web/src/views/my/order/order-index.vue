<template>
  <div>
    <van-nav-bar title="order" left-text="返回" left-arrow @click-left="goMy" />

    <div>
      <van-tabs v-model:active="active" swipeable @change="change">
        <van-tab
          v-for="index in routerMap"
          :title="index.title"
          :name="index.path"
        >
          <div>
            <!-- 整个组件 -->
            <router-view></router-view>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { http } from "@/util/http";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
let value = ref("");
let active = ref("");
const change = () => {
  router.push(active.value);
  console.log(active);
};
const goMy = () => {
  router.push("/my");
};
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

<template>
  <div>
    <div class="h-100vh"><router-view /></div>
    <div>
      <van-tabbar v-model="active" @click="change" :placeholder="true">
        <van-tabbar-item
          v-for="list in routerMap"
          :name="list.path"
          :icon="list.icon"
        >
          <div>{{ list.title }}</div>
        </van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { Tabbar, TabbarItem } from "vant";
import userStore from "../stores/user-store";
let router = useRouter();
let route = useRoute(); //这个和Router()不一样
//默认页
let active = ref("/");
//跳转页面
const change = () => {
  console.log("change");
  router.push(active.value);
};
//取路由信息
const routerMap = router
  .getRoutes()
  .map((v) => ({
    title: <string>v.meta.title,
    icon: <string>v.meta.icon,
    key: v.meta.key,
    path: v.path,
    meta: v.meta,
  }))
  .filter((v: any) => {
    return v.meta.Nav;
  });
//取当前path
const setActive = () => {
  routerMap.map((v) =>
    v.path == route.path ? (active.value = route.path) : null
  );
};
active.value = router.currentRoute.value.path;

onMounted(() => {
  // setActive();
});
</script>
<style scoped></style>

<template>
  <div class="flex-col h-full">
    <div class="h-auto"><router-view></router-view></div>

    <div class="absolute inset-x-0 bottom-0">
      <van-tabbar v-model="active" @click="change">
        <!-- <van-tabbar-item name="/home" icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item name="/recommend" icon="fire-o">推荐</van-tabbar-item>
        <van-tabbar-item name="/cart" icon="cart-o">购物车</van-tabbar-item>
        <van-tabbar-item name="/my" icon="setting-o">我的</van-tabbar-item> -->
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
    title: v.meta.title,
    icon: v.meta.icon,
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
onMounted(() => {
  setActive();
});
</script>
<style scoped></style>

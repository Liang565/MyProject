<template>
  <div>
    <div>
      <router-view></router-view>
    </div>
    <div>
      <van-tabbar v-model="active" @click="change" :placeholder="true">
        <van-tabbar-item
          v-for="list in routerMap"
          :name="list.path"
          :icon="list.meta.icon"
        >
          <div>{{ list.meta.title }}</div>
        </van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { Tabbar, TabbarItem } from "vant";
let router = useRouter();
let route = useRoute(); //这个和Router()不一样
//默认页
const props = defineProps({
  id: String,
});
const routerMap = [
  {
    path: `/shop/${props.id}`,
    meta: {
      title: "商铺首页",
      key: "shop",
      icon: "home-o",
    },
  },
  {
    path: `/allGoods/${props.id}`,
    meta: {
      title: "所有商品",
      key: "allGoods",
      icon: "gift-o",
    },
  },
];
//跳转页面
const change = () => {
  console.log("change");
  router.push(active.value);
};

let active = ref(routerMap[0].path);
</script>
<style scoped></style>

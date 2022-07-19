<template>
  <div>
    <div>{{ props }}</div>
    <!-- 底部导航 -->
    <div>
      <van-tabbar :placeholder="true">
        <van-tabbar-item>首页</van-tabbar-item>
        <van-tabbar-item>全部 </van-tabbar-item>
        <van-tabbar-item>店铺 </van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Toast, Search, Tabbar, TabbarItem } from "vant";

const props = defineProps({
  id: String,
});
</script>

<template>
  <div>
    <div>
      <van-tabs v-model:active="active" swipeable>
        <van-tab title="热门推荐"> 热门推荐 </van-tab>
        <van-tab title="热门推荐"> 热门推荐 </van-tab>
        <van-tab title="店铺推荐"> 店铺推荐 </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ActionBar, ActionBarIcon, ActionBarButton } from "vant";
import { ref } from "vue";
let active = ref("");
</script>

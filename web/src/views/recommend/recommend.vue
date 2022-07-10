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
  <div>
    <van-action-bar>
      <van-action-bar-icon icon="chat-o" text="客服" />
      <van-action-bar-icon icon="cart-o" text="购物车" />
      <van-action-bar-icon icon="shop-o" text="店铺" />
      <van-action-bar-button type="danger" text="立即购买" />
    </van-action-bar>
  </div>
</template>
<script setup lang="ts">
import { ActionBar, ActionBarIcon, ActionBarButton } from "vant";
import { ref } from "vue";
let active = ref("");
</script>

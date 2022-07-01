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
      <van-action-bar-icon icon="chat-o" text="客服" @click="onClickIcon" />
      <van-action-bar-icon icon="cart-o" text="购物车" @click="onClickIcon" />
      <van-action-bar-icon icon="shop-o" text="店铺" @click="onClickIcon" />
      <van-action-bar-button
        type="danger"
        text="立即购买"
        @click="onClickButton"
      />
    </van-action-bar>
  </div>
</template>
<script setup lang="ts">
import { ActionBar, ActionBarIcon, ActionBarButton } from "vant";
</script>

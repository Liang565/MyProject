<template>
  <div>
    <div class="flex justify-between items-center pt-2">
      <div class="mr-5 ml-2 flex justify-between items-center">
        <div>
          <!-- 返回前一个页面 -->
          <button @click="$router.go(-1)">
            <icon-park
              type="back"
              theme="outline"
              size="24"
              :spin="false"
              fill="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
              :strokeWidth="2"
            />
          </button>
        </div>
        <div class="pl-3">我的收货地址</div>
      </div>
      <div>管理</div>
    </div>

    <div>主体部分</div>
    <div class="flex justify-center w-full fixed bottom-0 bg-white pb-5 pt-5">
      <van-button round icon="plus" color="rgb(248, 113, 113)" class="w-90vw"
        >添加收货地址</van-button
      >
    </div>
  </div>
</template>
<script setup lang="ts">
import { Button } from "vant";
import iconPark from "../../../components/iconPark.vue";
</script>

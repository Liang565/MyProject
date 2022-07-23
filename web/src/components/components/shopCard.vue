<template>
  <div>
    <div
      v-for="item in content.menu"
      class="flex items-center justify-center w-full my-2"
    >
      <div
        class="flex justify-between bg-pink-100 h-20 w-3/4 rounded-2xl"
        @click="goShop(item.id)"
      >
        <div class="flex items-center ml-3">
          <van-image round width="4rem" height="4rem" :src="item.images" />
          <div>
            <div>{{ item.title }}</div>
            <div>{{ item.description }}</div>
          </div>
        </div>
        <div class="mr-5">
          <van-tag round size="medium" :plain="true" type="warning"
            >进店</van-tag
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Grid, GridItem, Slider, Toast, Stepper, Tag } from "vant";
import { defineProps, onMounted, ref, watch } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const prop = defineProps({
  option: {
    //设置列数和位置
    type: Object,
    default: () => ({}),
  },
  content: {
    // 这里的内容是店铺名称，头像等
    type: Object,
    default: () => ({}),
  },
  index: {
    //组件索引，判断点击的是哪个组件
    type: String,
    default: "",
  },
  allshops: {
    type: Object,
    default: () => [],
  },
});
//跳转到商铺
const goShop = (temp) => {
  router.push(`/shop/${temp}`);
};
onMounted(() => {});
</script>

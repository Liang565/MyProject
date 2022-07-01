<template>
  <div>
    <!-- <van-grid :column-num="columnNum">
      <van-grid-item v-for="i in goods">
        <img :src="i.img.url" class="w-24" :title="i.id" />
      </van-grid-item>
    </van-grid> -->
    <div>这里是grid</div>
    <div v-if="show">
      <Teleport to="#option">
        <div>这里是teleport</div>
      </Teleport>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue";
const prop = defineProps({
  columnNum: {
    //展示的列数，默认4格
    Number,
    default: 4,
  },
  //获取商品id和图片
  goods: {
    Object,
    default: [
      {
        img: { url: "https://cdn.jsdelivr.net/npm/@vant/assets/apple-1.jpeg" },
      },
    ],
  },
});
let show = ref(false);
onMounted(() => {
  show.value = true;
});
</script>

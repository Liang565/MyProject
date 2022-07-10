<template>
  <!-- 判断是不是没有图片，但是没有图片不能创建商品？？？ -->
  <div>
    <div v-if="props.src.length === 0">
      <van-image src="" width="60" height="60" fit="contain">
        <template v-slot:loading>加载失败</template>
      </van-image>
    </div>
    <div v-else>
      <van-image
        :src="props.src[0].url"
        :width="props.width"
        :height="props.height"
        :radius="props.radius"
        fit="contain"
      >
        <template v-slot:error>加载失败</template>
      </van-image>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Image as VanImage } from "vant";
const props = defineProps({
  src: {
    type: Object,
    default: "",
  },
  width: {
    type: String,
    default: "60",
  },
  height: {
    type: String,
    default: "60",
  },
  radius: {
    type: String,
    default: "0",
  },
});
</script>

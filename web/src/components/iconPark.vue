<template>
  <icon-park
    :type="type"
    :theme="theme"
    :size="size"
    :spin="spin"
    :fill="fill"
    :strokeLinecap="strokeLinecap"
    :strokeLinejoin="strokeLinejoin"
    :strokeWidth="strokeWidth"
  />
</template>

<script setup lang="ts">
import { IconPark } from "@icon-park/vue-next/es/all";

interface Props {
  //图标名称
  type: string;
  //主题
  theme: "outline" | "filled" | "two-tone" | "multi-color";
  //大小
  size: string | number;
  //旋转动画
  spin: true | false;
  //描边颜色
  fill: string;
  //端点 默认round
  strokeLinecap: "butt" | "round" | "square";
  //拐点  默认round
  strokeLinejoin: "miter" | "round" | "bevel";
  //线条粗细 默认4
  strokeWidth: number;
}
// withDefaults是给defineProps绑定默认值的api
const prop = withDefaults(defineProps<Props>(), {
  type: "Home",
  theme: "outline",
  size: "24",
  spin: false,
  fill: "#000000",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2,
});
</script>

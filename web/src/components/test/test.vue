<template>
  <div>
    <icon-like />
  </div>
  <div>动态组件{{ prop }}</div>
  <div>
    <component :is="icon"></component>
    {{ icon }}
    <div>{{ dt1 }}</div>
  </div>
</template>
<script setup lang="ts">
let aaa = ref("dt1");
const prop = defineProps({
  icon: String,
  size: { default: "20px", type: String },
});
const icon = computed(() => {
  return prop.icon;
});
import dt1 from "../../components/dt/dt1.vue";
import dt2 from "../../components/dt/dt2.vue";
import dt3 from "../../components/dt/dt3.vue";
import { computed, ref } from "vue";
let dtt = [
  { id: 1, type: dt1 },
  { id: 3, type: dt3 },
  { id: 2, type: dt2 },
  { id: 2, type: dt2 },
];
</script>

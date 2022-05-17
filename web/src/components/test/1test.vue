<template>
  111{{ iconName }}
  <div>
    <component :is="`icon-${iconName}`"></component>
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from "vue";

const props = defineProps({
  iconName: String,
  size: String,
});
// const iconName = computed(() => {
//   return `icon-` + props.iconName;
// });
</script>
<style scoped></style>

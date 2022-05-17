<template>
  <div>
    <component :is="`icon-${iconName}`"></component>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  iconName: String,
  style: String,
});
</script>

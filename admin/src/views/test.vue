<template>
  <div>{{ aaa }}</div>
  <div>
    <a-input v-model:key="aaa.a1"></a-input>
    <a-input v-model:value="aaa.a1"></a-input>
  </div>
  <div>
    <router-link to="home"></router-link>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
let aaa = ref({ a1: "bb", a2: "b2" });
let bbb = ref([]);
onMounted(() => {
  console.log(aaa);
});
</script>

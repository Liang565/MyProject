<template>
  <div>收藏</div>
  <div>{{ data }}</div>
</template>
<script setup lang="ts">
import { http } from "@/util/http";
import { onMounted, ref } from "@vue/runtime-dom";
const userid = localStorage.getItem("userid");
let data: any = [];
//获取收藏夹
const getCollect = async () => {
  const res = await http.get(`users/${userid}`);
  for (let i in res.commodity) {
    const res1 = await http.get(`commoditys/${res.commodity[i]}`);
    data.push(res1);
  }
  console.log(data);
};
onMounted(() => {
  getCollect();
});
</script>

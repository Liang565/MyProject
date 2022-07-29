<template>
  <div>
    待付款

    <div>
      {{ data }}
    </div>
  </div>
</template>
<script setup lang="ts">
import { http } from "@/util/http";
import { onMounted, ref } from "vue";
let data = ref();

const fetch = () => {
  const res = http.post("orders/findOrder", { state: "未支付" });
  res.then((v) => {
    data.value = v;
  });
  console.log("待付款请求");
};

onMounted(() => {
  fetch();
});
</script>

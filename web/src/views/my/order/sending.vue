<template>
  <div>
    待发货

    <div>
      {{ data }}
    </div>
  </div>
</template>
<script setup lang="ts">
import { http } from "@/util/http";
import { ref } from "vue";
let data = ref();

const fetch = () => {
  const res = http.post("orders/findOrder", { state: "已支付" });
  res.then((v) => {
    data.value = v;
  });
};
fetch();
</script>

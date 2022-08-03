<template>
  <div>
    <div>
      <div v-for="i in data" class="flex justify-center">
        <div class="w-90vw mb-3 bg-gray-100 rounded-lg">
          <van-card
            :num="i.goodsNum"
            :thumb="i.commodity.image[0].url"
            :tag="i.state"
            :price="i.commodity.price"
            class="rounded-t-lg"
            @click="goOrder(i)"
          >
            <template #title>
              <div
                class="text-xl w-40 overflow-hidden text-ellipsis whitespace-nowrap"
              >
                {{ i.commodity.commodityName }}
              </div>
            </template>
            <template #desc>
              <div class="w-44 overflow-hidden text-ellipsis whitespace-nowrap">
                {{ i.commodity.commodityIntroduce }}
              </div>
            </template>
            <template #footer>
              <div>合计￥{{ i.money }}</div>
            </template>
          </van-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { http } from "@/util/http";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
let data = ref();
const router = useRouter();
const fetch = () => {
  const res = http.post("orders/findOrder", { state: "未支付" });
  res.then((v) => {
    data.value = v;
  });
  console.log("待付款请求");
};
const goOrder = (temp: any) => {
  router.push(
    `/orderDetails/${JSON.stringify({
      state: temp.state,
      userInfo: temp.userInfo,
      id: temp._id,
      good: temp.commodity._id,
    })}`
  );
};
onMounted(() => {
  fetch();
});
</script>

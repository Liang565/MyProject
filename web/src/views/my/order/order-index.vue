<template>
  <div>
    <van-nav-bar
      title="我的订单"
      left-text="返回"
      left-arrow
      @click-left="goMy"
    />
    <div>
      <van-tabs v-model:active="active" @change="tabChange" :swipeable="true">
        <van-tab v-for="i in tabName" :title="i" :name="i">
          <div class="h-100vh">
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
                    <div
                      class="w-44 overflow-hidden text-ellipsis whitespace-nowrap"
                    >
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
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script setup lang="ts">
import { http } from "@/util/http";
import { useRect } from "@vant/use";
import { Toast, Tab, Tabs } from "vant";
import { onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
let model = useRoute().query;
let active = ref();
active.value = model.state;
let data = ref();
let stateModel = ref();
let tabName = ["全部", "未支付", "待发货", "待收货", "退货/售后"];
// let query = ref({
//   where: {} as any,
// });
const router = useRouter();
const fetch = async () => {
  const res = await http.post(
    "orders/findOrder",
    { state: stateModel.value }
    // ,
    // {
    //   params: {
    //     query: query.value,
    //   },
    // }
  );
  if (res.length === 0) Toast.fail("无数据~");

  data.value = res;
};
const goOrder = (temp: any) => {
  // router.push(
  //   `/orderDetails/${JSON.stringify({
  //     userInfo: temp.userInfo,
  //     id: temp._id,
  //     good: temp.commodity._id,
  //   })}`
  // );
  router.push({
    path: "/orderDetails",
    query: {
      userInfo: temp.userInfo,
      id: temp._id,
      good: temp.commodity._id,
    },
  });
};
const goMy = () => {
  router.push("/my");
};
watch(
  active,
  async (newValue: any, oldValue) => {
    if (newValue == "全部") {
      stateModel = ref();
      await fetch();
    } else if (newValue == "退货/售后") {
      let temp = ref();
      const res = await http.post("orders/findOrder", { state: "已收货" });
      temp.value = res;
      const res1 = await http.post("orders/findOrder", { state: "退货申请" });
      temp.value.push(...res1);
      const res2 = await http.post("orders/findOrder", { state: "已退货" });
      temp.value.push(...res2);
      data.value = temp.value;
    } else {
      stateModel.value = newValue;
      await fetch();
    }
  },
  {
    immediate: true,
  }
);

const tabChange = async (name: string) => {
  active.value = name;
};
onMounted(() => {
  // fetch();
});
</script>

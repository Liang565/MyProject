<template>
  <div>
    <van-nav-bar
      title="我的订单"
      left-text="返回"
      left-arrow
      @click-left="goMy"
    />
    <div>
      <van-tabs v-model:active="active" @change="tabChange">
        <van-tab title="全部" name="全部"></van-tab>
        <van-tab title="未支付" name="未支付"></van-tab>
        <van-tab title="待发货" name="待发货"></van-tab>
        <van-tab title="待收货" name="待收货"></van-tab>
        <van-tab title="退货申请" name="退货申请"></van-tab>
      </van-tabs>
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
import { Toast, Tab, Tabs } from "vant";
import { onMounted, ref, watch } from "vue";
import { useRouter } from "vue-router";
const props = defineProps({
  model: {
    type: String,
    default: "全部123",
  },
});
let model = JSON.parse(props.model);
let active = ref(model.state);

let data = ref();
let stateModel = ref();
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
  router.push(
    `/orderDetails/${JSON.stringify({
      state: temp.state,
      userInfo: temp.userInfo,
      id: temp._id,
      good: temp.commodity._id,
    })}`
  );
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
// onMounted(() => {
//   fetch();

// });
</script>

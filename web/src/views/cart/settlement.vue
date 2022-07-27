<template>
  <div>
    <div>
      <!-- 返回前一个页面 -->
      <button @click="goBack" class="flex items-center pl-5 pt-2">
        <icon-park
          type="back"
          theme="outline"
          size="24"
          :spin="false"
          fill="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          :strokeWidth="2"
        />
        确认订单
      </button>
    </div>
    <div class="pb-16">
      <div>
        <info
          @selectInfo="
            (aa) => {
              myinfo = aa;
            }
          "
        ></info>
      </div>

      <div v-for="i in data" class="flex justify-center">
        <div>
          <van-card
            :num="i.num"
            :price="i.price"
            :thumb="i.image"
            class="rounded-lg w-90vw mb-3"
          >
            <template #title>
              <div
                class="text-xl w-40 overflow-hidden text-ellipsis whitespace-nowrap"
              >
                {{ i.name }}
              </div>
            </template>
            <template #desc>
              <div class="w-44 overflow-hidden text-ellipsis whitespace-nowrap">
                {{ i.introduce }}
              </div>
            </template>
            <template #footer>
              <div>合计￥{{ i.price * i.num }}</div>
            </template>
          </van-card>
        </div>
      </div>
    </div>
    <div
      class="flex justify-end items-center pl-3 p-3 w-full fixed bottom-0 bg-white"
    >
      <div class="flex items-center mx-2">
        <div>
          <span class="text-sm text-neutral-600">共计{{ goodSum }}件</span>
          合计：
          <span class="text-red-500">￥{{ total }} </span>
        </div>
        <div class="ml-3">
          <van-button round type="primary" @click="placeOrder"
            >提交订单</van-button
          >
        </div>
      </div>
    </div>
    <!-- 登录提示框 -->
  </div>
</template>
<script lang="ts" setup>
import { http } from "@/util/http";
import { onMounted, ref, watch } from "vue";
import { useRouter } from "vue-router";
import iconPark from "../../components/iconPark.vue";
import info from "./info.vue";
const props = defineProps({
  model: { type: String, default: "1" },
});
const router = useRouter();
let model = ref();
let data = <any>ref([]); //存商品信息的
let total = ref(0);
let goodSum = ref(0); //商品数量
let myinfo = <any>ref(); //地址信息

const goBack = () => {
  router.go(-1);
};
model.value = JSON.parse(props.model);
total.value = model.value.total;

const fetch = async (temp: any) => {
  goodSum.value = temp.length;
  for (let i in temp) {
    const res = await http.get(`commoditys/${temp[i].commodity}`);

    data.value.push({
      id: res._id,
      image: res.image[0].url,
      name: res.commodityName,
      introduce: res.commodityIntroduce, //介绍
      price: res.price,
      num: temp[i].goodsNum,
    });
  }
};
fetch(model.value.model);
//提交订单
//这里打算一个商品就生成一个订单。
let aaa = ref();
const placeOrder = () => {
  for (let i in data.value) {
    // console.log(data.value[i]);
    // console.log(myinfo.value);
    aaa.value = {
      commodity: data.value[i].id, //商品id

      goodsNum: data.value[i].num, //数量
      money: data.value[i].num * data.value[i].price, //金额 price*goodsNum
      userInfo: myinfo.value.id, //地址id
      user: myinfo.value.user,
    };
    //生成订单
  }
  console.log("提交");
};
</script>

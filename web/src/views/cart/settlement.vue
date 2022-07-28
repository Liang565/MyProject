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
        <div class="w-90vw mb-3 bg-gray-100 rounded-lg">
          <van-card
            :num="i.num"
            :price="i.price"
            :thumb="i.image"
            class="rounded-t-lg"
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
          <van-field
            v-model="i.remarks"
            label="订单备注："
            readonly
            placeholder="无备注"
            right-icon="arrow"
            @click="editRemarks(i)"
            class="mb-1"
          />
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
    <!-- 编制订单备注 -->
    <div>
      <van-action-sheet v-model:show="show" title="订单备注" @close="closeText">
        <div class="h-70vh bg-gray-50 py-5">
          <van-cell-group inset>
            <van-field
              v-model="textTemp"
              rows="5"
              autosize
              type="textarea"
              maxlength="200"
              placeholder="请输入留言"
              show-word-limit
            />
          </van-cell-group>

          <div class="flex justify-center pb-20 pt-40">
            <div class="w-80vw">
              <van-button plain type="primary" size="large" @click="submit"
                >确定</van-button
              >
            </div>
          </div>
        </div>
      </van-action-sheet>
    </div>
    <!-- 支付弹窗 -->
    <div>
      <van-action-sheet v-model:show="showPay" title="支付">
        <div class="h-70vh bg-gray-50 py-5">
          没有接支付宝沙盒，生成的订单状态都是未支付的。 直接点击确定。
          <div class="flex justify-center pb-20 pt-40">
            <div class="w-80vw">
              <van-button plain type="primary" size="large" @click="submitPay"
                >确定</van-button
              >
            </div>
          </div>
        </div>
      </van-action-sheet>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { http } from "@/util/http";
import { onMounted, ref, watch } from "vue";
import { useRouter } from "vue-router";
import iconPark from "../../components/iconPark.vue";
import info from "./info.vue";
import {
  Field,
  CellGroup,
  Button,
  Card,
  ConfigProvider,
  ActionSheet,
  Toast,
} from "vant";
const props = defineProps({
  model: { type: String, default: "1" },
});

const router = useRouter();
let model = ref();
let data = <any>ref([]); //存商品信息的
let total = ref(0);
let goodSum = ref(0); //商品数量
let myinfo = <any>ref(); //地址信息
let showPay = ref(false); //支付弹窗
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
      remarks: "",
      key: i, //key用来判断备注的位置
      cartId: temp[i].cartId,
      shop: res.shop, //商铺id
    });
  }
};
fetch(model.value.model);
//提交订单
//这里打算一个商品就生成一个订单。
const placeOrder = () => {
  //弹出一个支付的弹窗
  console.log("提交");
  showPay.value = true;
};
//确认支付
const submitPay = () => {
  Toast.loading({
    message: "加载中...",
    forbidClick: true,
  });
  setTimeout(async () => {
    for (let i in data.value) {
      console.log();
      // 生成订单
      const res = await http.post("orders", {
        user: myinfo.value.user,
        commodity: data.value[i].id, //商品id
        goodsNum: data.value[i].num, //数量
        money: data.value[i].num * data.value[i].price, //金额 price*goodsNum
        userInfo: myinfo.value.id, //地址id
        remarks: data.value[i].remarks,
        state: "未支付",
        shop: data.value[i].shop,
      });
      //删除购物车
      const cart = await http.delete(`shopping-cart/${data.value[i].cartId}`);
    }
    //删除购物车信息
    Toast.success("支付成功");
    showPay.value = false;
    router.go(-1);
  }, 2000);
};
//编辑备注
let show = ref(false);
let textTemp = ref("");
let textKey = ref("");
const editRemarks = (temp: any) => {
  show.value = true;
  textTemp.value = temp.remarks;
  textKey.value = temp.key;
};
const closeText = () => {
  textTemp.value = "";
  textKey.value = "";
};
const submit = () => {
  data.value[textKey.value].remarks = textTemp.value;
  show.value = false;
  closeText();
};
</script>

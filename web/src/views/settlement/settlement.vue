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
      <van-action-sheet
        v-model:show="showPay"
        title="支付"
        @close="closeSubPlay"
      >
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
  // 传进来的是一个字符串化的对象。{数组，商品总数}
  //商品页进来就只传入一个商品对象和商品总数为1。
  //{model: orderModel.value, total: TotalAmount.value,}
  model: { type: String, default: "1" },
});

const router = useRouter();
let model = ref();
let data = <any>ref([]); //存商品信息的
let total = ref(0);
let goodSum = ref(0); //商品数量
let myinfo = <any>ref(); //地址信息
let showPay = ref(false); //支付弹窗
let isCart = ref(false); //判断是不是购物车结算。
let orders = <any>ref([]); //存生成的订单id
let isPlay = false; //标记是否支付。
const goBack = () => {
  router.go(-1);
};
model.value = JSON.parse(props.model);
total.value = model.value.total;
isCart.value = model.value.key === "cart" ? true : false;
const fetch = async (temp: any) => {
  goodSum.value = temp.length;

  for (let i in temp) {
    const res = await http.get(`commoditys/${temp[i].commodity}`);
    if (isCart.value) {
      data.value.push({
        id: res._id,
        image: res.image[0].url,
        name: res.commodityName,
        introduce: res.commodityIntroduce, //介绍
        price: res.price,
        kucun: res.commodityNum,
        num: temp[i].goodsNum, //数量
        remarks: "",
        key: i, //key用来判断备注的位置
        cartId: temp[i].cartId,
        shop: res.shop, //商铺id
      });
    } else {
      data.value.push({
        id: res._id,
        image: res.image[0].url,
        name: res.commodityName,
        introduce: res.commodityIntroduce, //介绍
        price: res.price,
        kucun: res.commodityNum, //库存
        num: temp[i].goodsNum, //数量
        remarks: "",
        key: i, //key用来判断备注的位置
        shop: res.shop, //商铺id
      });
    }
  }
};
fetch(model.value.model);
//提交订单
//这里打算一个商品就生成一个订单。
const placeOrder = () => {
  Toast.loading({
    message: "加载中...",
    forbidClick: true,
  });
  setTimeout(async () => {
    for (let i in data.value) {
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
      orders.value.push(res._id); //存生成的订单id
      if (isCart.value) {
        //删除购物车
        const cart = await http.delete(`shopping-cart/${data.value[i].cartId}`);
      }
      //库存减掉相应的数量
      const kk = await http.put(`commoditys/${data.value[i].id}`, {
        commodityNum: data.value[i].kucun - data.value[i].num,
      });
    }
    Toast.success("创建订单成功~");

    console.log("提交");
    isPlay = false; //标记是否支付。
    showPay.value = true;
  }, 2000);
};
//确认支付支付后状态为已支付。

const submitPay = () => {
  Toast.loading({
    message: "加载中...",
    forbidClick: true,
  });
  setTimeout(async () => {
    //修改订单里面的状态
    for (let i in orders.value) {
      const res = await http.put(`/orders/${orders.value[i]}`, {
        state: "待发货",
      });
    }
    Toast.success("支付成功~");
    isPlay = true; //标记是否支付
    showPay.value = false;
  }, 2000);
};
//关闭支付弹窗
const closeSubPlay = () => {
  if (isPlay) {
    //支付成功。
    Toast.success("支付成功~");

    // router.push("/my/sending");
    router.go(-1);
  } else {
    //未支付
    Toast.fail("未支付~");
    router.push("/my/pending");

    // router.go(-1);
  }
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

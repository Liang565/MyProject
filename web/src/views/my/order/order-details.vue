<template>
  <div>
    <div>
      <!-- 返回前一个页面 -->
      <button @click="goBack" class="flex items-center pl-3 pt-2">
        <icon-park
          type="left"
          theme="outline"
          size="24"
          :spin="false"
          fill="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          :strokeWidth="2"
        />
        {{ model.state }}
      </button>
    </div>
    <div class="pt-5">
      <div v-if="model.state === '未支付'">
        <info
          @selectInfo="
            (aa) => {
              myinfo = aa;
            }
          "
        ></info>
      </div>
      <div class="flex justify-center">
        <div class="w-90vw mb-3 bg-gray-100 rounded-lg">
          <van-card
            :num="data.goodsNum"
            :thumb="good.image[0].url"
            :tag="data.state"
            :price="good.price"
            class="rounded-t-lg"
            @click="goGoods(good)"
          >
            <template #title>
              <div
                class="text-xl w-40 overflow-hidden text-ellipsis whitespace-nowrap"
              >
                {{ good.commodityName }}
              </div>
            </template>
            <template #desc>
              <div class="w-44 overflow-hidden text-ellipsis whitespace-nowrap">
                {{ good.commodityIntroduce }}
              </div>
            </template>
            <template #footer>
              <div>合计￥{{ data.money }}</div>
            </template>
          </van-card>
          <van-field
            v-model="data.remarks"
            label="订单备注："
            readonly
            placeholder="无备注"
            right-icon="arrow"
            @click="editRemarks(data)"
            class="mb-1"
          />
          <div class="text-sm">
            <div>
              商品总价：<span class="text-red-600">￥{{ data.money }}</span>
            </div>
            <div v-if="model.state === '未支付'">
              需付款：<span class="text-red-600">￥{{ data.money }}</span>
            </div>
            <div v-if="model.state !== '未支付'">
              收货信息： {{ userInfo.name }}, {{ userInfo.tel }},
              {{ userInfo.province }}/ {{ userInfo.city }}/
              {{ userInfo.county }}/
              {{ userInfo.address }}
            </div>
            <div v-if="model.state === '待收货'">
              快递号：{{ data.express }}
            </div>
            <div>
              订单编号：<span class="text-gray-600">{{ data._id }}</span>
            </div>
            <div>
              创建时间：<span class="text-gray-600">{{ data.createdAt }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <van-action-bar v-if="model.state === '未支付'">
        <van-action-bar-button
          type="danger"
          round
          text="取消订单"
          @click="action('取消订单')"
        />

        <van-action-bar-button
          type="warning"
          round
          text="继续付款"
          @click="
            () => {
              showPay = true;
            }
          "
        />
      </van-action-bar>
      <van-action-bar v-if="model.state === '待发货'">
        <van-action-bar-button type="danger" round text="联系卖家" />

        <van-action-bar-button
          type="warning"
          round
          text="申请退货"
          @click="action('申请退货')"
        />
      </van-action-bar>
      <van-action-bar v-if="model.state === '待收货'">
        <van-action-bar-button type="danger" round text="联系卖家" />

        <van-action-bar-button
          type="warning"
          round
          text="确认收货"
          @click="action('确认收货')"
        />
      </van-action-bar>
      <van-action-bar v-if="model.state === '已收货'">
        <van-action-bar-button type="danger" round text="联系卖家" />

        <van-action-bar-button
          type="warning"
          round
          text="申请退货"
          @click="action('申请退货')"
        />
      </van-action-bar>
      <van-action-bar v-if="model.state === '退货申请'">
        <van-action-bar-button type="danger" round text="联系卖家" />

        <van-action-bar-button
          type="warning"
          round
          text="取消申请"
          @click="action('取消申请')"
        />
      </van-action-bar>
    </div>
    <!-- 编制订单备注 -->
    <div v-if="model.state === '未支付'">
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
    <div v-else>
      <van-action-sheet v-model:show="show" title="订单备注">
        <div class="h-70vh bg-gray-50 py-5">
          <van-cell-group inset>
            <van-field
              v-model="textTemp"
              rows="5"
              autosize
              type="textarea"
              maxlength="200"
              show-word-limit
              readonly
            />
          </van-cell-group>
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
          请直接点击确定。
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
<script setup lang="ts">
import { http } from "@/util/http";
import goodsVue from "@/views/goods/goods.vue";
import { onMounted, ref } from "vue";
import {
  Field,
  CellGroup,
  Button,
  Card,
  ConfigProvider,
  ActionSheet,
  Toast,
  ActionBar,
  ActionBarIcon,
  ActionBarButton,
  Dialog,
} from "vant";
import { useRoute, useRouter } from "vue-router";
import { string } from "vue-types";
import iconPark from "../../../components/iconPark.vue";
import info from "../../settlement/info.vue";
import orderIndexVue from "./order-index.vue";
let model = ref();
//   {
//   state: "",
//   userInfo: "",
//   id: "",
//   good: "",
// }
let myinfo = ref();
let data = <any>ref({
  commodity: "",
  createdAt: "",
  goodsNum: 0,
  money: "",
  remarks: "",
  state: "",
  updatedAt: "",
  user: "",
  userInfo: "",
  express: "",
});
let good = <any>ref({
  commodityIntroduce: "",
  commodityName: "",
  createdAt: "",
  image: [{ url: "" }],
  parameter: "",
  price: 0,
  shop: "",
  title: "",
  updatedAt: "",
});
let userInfo = ref({
  address: "",
  city: "",
  county: "",
  name: "",
  postalCode: "",
  province: "",
  tel: "",
});
let showPay = ref(false); //支付弹窗
let isPlay = false; //标记是否支付。

//关闭支付弹窗
const closeSubPlay = () => {
  if (isPlay) {
    //支付成功。
    Toast.success("支付成功~");
    router.push("/my/pending");

    // router.push("/my/sending");
    router.go(-1);
  } else {
    //未支付
    Toast.fail("支付失败~");
  }
};
const router = useRouter();
model.value = useRoute().query;
console.log(model.value);

const goBack = () => {
  router.go(-1);
};
const fetch = async () => {
  const res = await http.get(`orders/${model.value.id}`);
  data.value = res;
  model.value.state = res.state;
  const res1 = await http.get(`commoditys/${model.value.good}`);
  good.value = res1;
  if (model.value.state !== "未支付") {
    const res3 = await http.get(`user-info/${model.value.userInfo}`);
    userInfo.value = res3;
    console.log(res3);
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
const submitPay = () => {
  Toast.loading({
    message: "加载中...",
    forbidClick: true,
  });
  setTimeout(async () => {
    //修改订单里面的状态
    const res = await http.put(`/orders/${model.value.id}`, {
      state: "待发货",
    });
    Toast.success("支付成功~");
    isPlay = true; //标记是否支付
    showPay.value = false;
  }, 2000);
};

const goGoods = (temp: { _id: any }) => {
  router.push(`/goods/${temp._id}`);
};

const action = (temp: string) => {
  let tempState = ref("已收货");

  if (temp === "取消订单") tempState.value = "取消订单";
  else if (temp === "取消申请") tempState.value = "已收货";
  else if (temp === "申请退货") tempState.value = "退货申请";
  else if (temp === "确认收货") tempState.value = "已收货";

  Dialog.confirm({
    title: "",
    message: `是否确认${temp}？`,
  })
    .then(async () => {
      const res = await http.put(`orders/${model.value.id}`, {
        state: tempState.value,
      });
      if (res) {
        Toast.loading("已确认~");
        // router.push(`/my/order-index/${JSON.stringify({ state: "已收货" })}`);
        router.go(0);
      } else Toast.success("取消失败~");
    })
    .catch(() => {
      // on cancel
    });
};
//删除订单
onMounted(() => {
  fetch();
});
</script>
<style></style>

<template>
  <div>
    <!-- 不是首页进入购物车页面-->
    <div class="flex justify-between mb-5 ml-5 mt-2">
      <div class="flex w-16">
        <div class="mr-2" v-if="goodsCome">
          <!-- 返回前一个页面 -->
          <button @click="goBack">
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
          </button>
        </div>
        <div v-if="goodsCome">
          <!-- 返回首页 -->
          <button @click="goHome">
            <icon-park
              type="home"
              theme="outline"
              size="24"
              :spin="false"
              fill="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
              :strokeWidth="2"
            />
          </button>
        </div>
      </div>
      <div class="text-xl">购物车({{ total }})</div>
      <!-- 编辑 -->
      <div class="w-16 h-7">
        <button @click="editCart">
          <icon-park
            type="edit-two"
            theme="outline"
            size="24"
            :spin="false"
            fill="#000000"
            strokeLinecap="round"
            strokeLinejoin="round"
            :strokeWidth="2"
            v-if="isEditCart"
          />
          <span v-if="!isEditCart">完成</span>
        </button>
      </div>
    </div>

    <div class="m-2 pb-11">
      <van-checkbox-group v-model="checked" ref="checkboxGroup">
        <van-checkbox :name="i._id" v-for="i in data">
          <div class="w-80vw mb-2">
            <van-swipe-cell>
              <van-card
                :num="i.goodsNum"
                :price="i.goodsNum * i.commodity.price"
                :desc="i.commodity._id"
                :thumb="i.commodity.image[0].url"
                @click="goGoods(i.commodity)"
              >
                <template #title>
                  <div class="text-xl">
                    {{ i.commodity.commodityName }}
                  </div>
                </template>
                <!-- @click.stop() 阻止事件冒泡 -->
                <template #footer>
                  <van-button
                    size="small"
                    icon="minus"
                    color="rgb(59, 130, 246)"
                    @click.stop="minusGNum(i)"
                  />
                  <van-button
                    size="small"
                    icon="plus"
                    color="rgb(59, 130, 246)"
                    @click.stop="plusGNum(i)"
                  />
                </template>
              </van-card>

              <template #right>
                <van-button
                  square
                  text="删除"
                  type="danger"
                  class="delete-button"
                  @click="removeCart([i._id], thisUser)"
                />
              </template>
            </van-swipe-cell>
          </div>
        </van-checkbox>
      </van-checkbox-group>
    </div>
    <!-- <div
      class="flex justify-between items-center pl-3 p-3 w-full fixed bottom-12 bg-white"
    > -->
    <div :class="goodsCome ? buttom2 : buttom1">
      <div>
        <button @click="toggleAll">
          <div class="flex">
            <icon-park
              type="full-selection"
              theme="outline"
              size="24"
              :spin="false"
              fill="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
              :strokeWidth="2"
              v-if="!isCheckAll"
            />
            <icon-park
              v-if="isCheckAll"
              type="full-selection"
              theme="filled"
              size="24"
              :spin="false"
              fill="#4a90e2"
              strokeLinecap="round"
              strokeLinejoin="round"
              :strokeWidth="2"
            />
            <div class="text-sm mt-1">全选</div>
          </div>
        </button>
      </div>
      <div class="flex items-center mx-2" v-if="isEditCart">
        <div>
          <span class="text-sm"> 已选：{{ checked.length }}</span>
          合计：
          <span class="text-sm text-red-500"> ￥ </span>
          <span class="text-xl text-red-500">{{ TotalAmount }}</span>
        </div>
        <div class="ml-3">
          <van-button round type="primary">结算</van-button>
        </div>
      </div>
      <div class="flex items-center" v-if="!isEditCart">
        <div>
          已选：<span>{{ checked.length }}</span>
        </div>
        <div class="mx-2">
          <van-button
            round
            type="primary"
            @click="removeCart(checked, thisUser)"
            >删除</van-button
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { Curd } from "../../util/api/curd";
import {
  Card,
  Button,
  Toast,
  Search,
  Checkbox,
  CheckboxGroup,
  RadioGroup,
  Radio,
  SwipeCell,
} from "vant";
import { http } from "../../util/http";
import iconPark from "../../components/iconPark.vue";
import { object } from "vue-types";

const router = useRouter();
let goodsCome = ref(false);
const { fetch, search, data, query, goGoods, total, totalSum, removeCart } =
  Curd("shopping-cart");
const minusGNum = async (temp: { goodsNum: number; _id: any }) => {
  if (temp.goodsNum === 1) {
    Toast.fail("商品不能再减少了~");
  } else {
    Toast.loading({
      message: "加载中...",
      forbidClick: true,
      duration: 500,
    });
    http.put(`shopping-cart/${temp._id}`, { goodsNum: temp.goodsNum - 1 });
    setTimeout(() => {
      query.value.where = { user: localStorage.getItem("userid") };
      fetch();
    }, 500);
  }
};
const plusGNum = async (temp: { _id: any; goodsNum: number }) => {
  Toast.loading({
    message: "加载中...",
    forbidClick: true,
    duration: 500,
  });
  http.put(`shopping-cart/${temp._id}`, { goodsNum: temp.goodsNum + 1 });
  setTimeout(() => {
    query.value.where = { user: localStorage.getItem("userid") };
    fetch();
  }, 500);
};

const goBack = () => {
  router.go(-2);
};
const goHome = () => {
  router.push("/");
};
//编辑购物车
let isEditCart = ref(true);
const editCart = () => {
  isEditCart.value = !isEditCart.value;
};

//复选
let checked = ref([]);
let isCheckAll = ref(false);
const checkboxGroup = ref(null);
let TotalAmount = ref(0); //总金额
// 全选
const toggleAll = () => {
  isCheckAll.value = !isCheckAll.value;
  checkboxGroup.value.toggleAll(isCheckAll.value);
};
//监听器，监听checked的变化从而更改结算价格的变化
watch(checked, (newValue, oldValue) => {
  totalSum(checked.value).then((tt) => {
    //返回值是个promise
    TotalAmount.value = tt;
  });
  //改变全选图标
  if (checked.value.length == data.value.length) {
    isCheckAll.value = true;
  } else {
    isCheckAll.value = false;
  }
});
let buttom1 =
  "flex justify-between items-center pl-3 p-3 w-full fixed bottom-12 bg-white";
let buttom2 =
  "flex justify-between items-center pl-3 p-3 w-full fixed bottom-0 bg-white";

let thisUser = localStorage.getItem("userid");
onMounted(() => {
  query.value.where = { user: localStorage.getItem("userid") };
  fetch();
  //key=cart1，其他地方进入购物车页，key=cart首页切换到购物车
  if (useRoute().meta.key == "cart1") {
    goodsCome.value = true; //返回键是否显示
  }
});
</script>
<style>
.delete-button {
  height: 100%;
}
</style>

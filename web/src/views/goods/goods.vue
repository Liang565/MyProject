<template>
  <div>
    <div class="flex justify-evenly">
      <div class="translate-y-1/4">
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
      <div class="translate-y-1/4">
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
      <div>
        <!-- 点击进去后是一个搜索页 -->
        <button @click="goSearch">
          <van-search shape="round" placeholder="请输入搜索关键词" />
        </button>
      </div>
      <div class="translate-y-1/4">
        <!-- 跳转到购物车 -->
        <button @click="goCart">
          <icon-park
            type="shopping"
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
      <div class="translate-y-1/4">
        <!-- 分享 -->
        <button @click="share">
          <icon-park
            type="more"
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
    <!-- 商品详情页主体 -->
    <div class="mb-20">
      <!-- {{ goodImage }} -->
      <div>
        <van-swipe :autoplay="3000" lazy-render :height="500">
          <van-swipe-item v-for="image in goodImage" :key="image">
            <!-- 在容器内垂直居中 -->
            <div class="relative top-1/2 -translate-y-1/2">
              <img :src="image.url" />
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
      <!-- 一个小框 -->
      <div
        class="w-11/12 bg-blue-300 h-auto relative left-1/2 -translate-x-1/2 rounded-lg mt-10"
      >
        <div class="text-lg text-red-600">￥{{ price }}</div>
        <div class="text-base">
          {{ commodityIntroduce }}
        </div>
      </div>
    </div>
    <!-- 底部导航 -->
    <div>
      <van-action-bar>
        <van-action-bar-icon icon="chat-o" text="客服" />
        <van-action-bar-icon
          icon="star"
          text="已收藏"
          color="#ff5000"
          @click="collect"
          v-if="collected"
        />
        <van-action-bar-icon
          icon="star-o"
          text="收藏"
          @click="collect"
          v-else
        />

        <van-action-bar-icon icon="shop-o" text="店铺" @click="goShop" />
        <van-action-bar-button
          type="warning"
          color="rgb(147 197 253)"
          text="加入购物车"
          @click="addCart"
        />
        <!-- 弹出层 -->
        <van-popup
          v-model:show="addCartshow"
          position="bottom"
          :style="{ height: '80%' }"
          :closeable="true"
          :safe-area-inset-bottom="true"
        >
          <div class="m-5 h-5/6">
            <div class="flex justify-start">
              <div>
                <myimage :src="images" :height="'60'" />
              </div>
              <div class="text-lg text-red-600 translate-y-1/2">
                <span class="text-sm">￥</span>{{ price }}
              </div>
            </div>
            <div class="my-5">
              <span class="border-2 border-rose-600 text-red-500">
                {{ data.commodityName }}
              </span>
            </div>
            <div class="flex justify-between">
              <div>
                购买数量
                <span v-if="data.commodityNum > 0" class="text-xs text-gray-600"
                  >有货</span
                >
              </div>
              <div class="flex mr-10">
                <div @click="minusCatNum">
                  <icon-park
                    type="reduce"
                    theme="outline"
                    size="24"
                    :spin="false"
                    fill="#000000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    :strokeWidth="2"
                  />
                </div>
                <div class="w-12 text-center">
                  {{ cartModel.goodsNum }}
                </div>
                <div @click="addCatNum">
                  <icon-park
                    type="add"
                    theme="outline"
                    size="24"
                    :spin="false"
                    fill="#000000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    :strokeWidth="2"
                  />
                </div>
              </div>
            </div>
            <div class="fixed bottom-10 left-1/2 -translate-x-1/2">
              <van-button
                type="primary"
                class="w-80"
                :round="true"
                @click="addCartOk"
                >确定</van-button
              >
            </div>
          </div>
        </van-popup>
        <van-action-bar-button
          color="rgb(134, 239, 172)"
          type="danger"
          text="立即购买"
        />
      </van-action-bar>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import iconPark from "../../components/iconPark.vue";
import { http } from "../../util/http";
import { ActionBar, ActionBarIcon, ActionBarButton, Popup, Toast } from "vant";
import { useRouter } from "vue-router";
import myimage from "../../components/myimage.vue";
import { Commodity } from "@icon-park/vue-next/es/map";
import { Action } from "../../util/api/action-api";

const router = useRouter();

//存放商品数据
let data = ref();
let goodImage = ref();
let price = ref(); //价格
let commodityIntroduce = ref(); //简介
let shop = ref(); //商铺id
let images = ref();
//获取商品信息 628ce027da8a5a6628010393
//接收一个商品的id
const findOne = async () => {
  const res = <any>await http.get(`commoditys/${props.id}`);
  data.value = res;
  price.value = res.price;
  goodImage.value = res.image;
  commodityIntroduce.value = res.commodityIntroduce;
  shop.value = res.shop;
  images.value = res.image;
};

const props = defineProps({
  id: String,
});

const goSearch = () => {
  // 这里要跳转到搜索页
  console.log("点击搜索条");

  router.push("/search");
};

const goBack = () => {
  router.go(-1);
};
const goHome = () => {
  router.push("/");
};
const goCart = () => {
  // 这里要跳转到购物车

  router.push("/cart1");
};

const share = () => {
  // 这里展示分享页面
  console.log("分享");
};
//跳转到商铺
const goShop = () => {
  router.push(`/shop/${shop.value}`);
};

//加入到购物车
let addCartshow = ref(false);
let cartModel = ref({
  user: localStorage.getItem("userid"),
  commodity: props.id,
  goodsNum: 0,
});
const minusCatNum = () => {
  if (cartModel.value.goodsNum <= 0) {
    Toast({
      message: "数量低于范围~",
      position: "bottom",
    });
  } else cartModel.value.goodsNum--;
};
const addCatNum = () => {
  cartModel.value.goodsNum++;
};
const addCart = () => {
  addCartshow.value = true;
};
const addCartOk = async () => {
  if (cartModel.value.goodsNum === 0) {
    Toast.fail("数量为0~");
  } else {
    const res = await http.post("shopping-cart/addCart", cartModel.value);
    Toast.success("添加成功~");
  }
};

const { Collect, getCollect } = Action();
//用户id
const userid = localStorage.getItem("userid");
//展示未收藏和已收藏
let collected = ref(false);
//收藏商品
const collect = async () => {
  Collect(<string>props.id).then((t) => {
    collected.value = t;
  });
  if (collected.value) {
    Toast.success("收藏成功~");
  } else {
    Toast.success("取消收藏~");
  }
};

onMounted(() => {
  findOne();

  getCollect(<string>props.id).then((t) => {
    collected.value = t;
  });
});
</script>

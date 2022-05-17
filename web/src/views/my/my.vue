<template>
  <div class="bg-gray-400 h-800">
    <!-- 用户的信息 -->
    <div class="flex mx-5 pt-10">
      <div class="border-2 w-20 h-20">
        <!-- 点击图片进入修改头像 -->
        <van-image width="80" :src="Image" />
      </div>
      <div>
        <div>用户名：{{ userStore.state.admin.username }}</div>
        <div>账号id：{{ userStore.state.admin.id }}</div>
      </div>
    </div>
    <!-- 我的订单 -->
    <div class="mt-10">
      <van-cell-group :inset="true">
        <van-cell title="我的订单" is-link @click="test">
          <!-- 使用 title 插槽来自定义标题 -->
          <template #value>
            <span class="text-xs">全部</span>
          </template>
        </van-cell>
        <van-cell>
          <van-grid :column-num="5">
            <van-grid-item icon="pending-payment" text="待付款" />
            <van-grid-item icon="send-gift-o" text="待发货" />
            <van-grid-item icon="logistics" text="待收货" />
            <van-grid-item icon="records" text="待评价" />
            <van-grid-item icon="after-sale" text="售后/退款" />
          </van-grid>
        </van-cell>
      </van-cell-group>
    </div>
    <!-- 地址等设置 -->
    <div class="mt-10">
      <van-cell-group inset>
        <van-cell>
          <template #title>
            <van-icon name="location-o"> 地址管理 </van-icon>
          </template>
        </van-cell>
        <van-cell>
          <template #title>
            <van-icon name="star-o"> 我的收藏 </van-icon>
          </template>
        </van-cell>
        <van-cell>
          <template #title>
            <van-icon name="eye-o">我的足迹</van-icon>
          </template>
        </van-cell>
        <van-cell>
          <template #title>
            <van-icon name="question-o">帮助</van-icon>
          </template>
        </van-cell>
        <van-cell>
          <template #title>
            <van-icon name="service-o">联系客服</van-icon>
          </template>
        </van-cell>
        <van-cell>
          <template #title>
            <van-icon name="friends-o">关于我们</van-icon>
          </template>
        </van-cell>
      </van-cell-group>
    </div>
    <div class="flex justify-center my-10">
      <van-button type="danger" class="w-400" @click="LogOut"
        >退出登录</van-button
      >
    </div>
  </div>
</template>
<script lang="ts" setup>
import router from "../../router";
import userStore from "../../stores/user-store";
import { http } from "../../util/http";
import { onMounted, ref } from "vue";

const test = () => {
  router.push("/my/order-index");
};
//退出登录 删除token？
const LogOut = () => {
  console.log("执行logOut");
  // message.success("退出");
  localStorage.removeItem("token");
  router.push("/login");
};
//获取当前用户信息
//获取用户名

const getUser = async () => {
  const data = await http.get("auth/user");
  console.log(data);
  userStore.setAdmin(data); //设置全局的用户名
};
let Image = ref("");
const setImage = () => {
  // if(userStore.state.admin.image?&&userStore.state.admin.image?!=""&&userStore.state.admin.image?!='https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg')
  if (
    userStore.state.admin.image &&
    userStore.state.admin.image !=
      "https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg"
  ) {
    console.log("tttt");

    console.log(userStore.state.admin.image);
  } else {
    // Image.value = "https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg";
    Image.value = "";
  }
};
onMounted(() => {
  getUser();
  setImage();
});
</script>

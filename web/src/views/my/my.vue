<template>
  <div class="bg-gray-400 h-100vh">
    <!-- 用户的信息 -->
    <div class="flex mx-5 justify-start items-center pt-5">
      <div class="border-2 w-24 h-24">
        <!-- 点击图片进入修改头像 -->
        <van-image width="92" height="92" :src="Image" @click="editImg" />
        <div>
          <van-popup
            v-model:show="editImgviss"
            closeable
            close-icon="close"
            @close="closePopup"
          >
            <div class="my-10">
              <div>
                <van-image width="400" :src="Image" />
              </div>
              <div class="flex justify-center pb-2">
                <a-upload
                  :action="httpURL + '/upload'"
                  @change="handleChange"
                  v-if="showUpload"
                  :max-count="1"
                >
                  <van-button
                    color="linear-gradient(to right, #ff6034, #ee0a24)"
                    class="w-56"
                  >
                    修改头像
                  </van-button>
                </a-upload>
                <div class="flex w-full justify-around" v-if="!showUpload">
                  <div>
                    <van-button type="warning" @click="editimgColose"
                      >取消</van-button
                    >
                  </div>
                  <div>
                    <van-button type="success" @click="editimgOk"
                      >确认</van-button
                    >
                  </div>
                </div>
              </div>
            </div>
          </van-popup>
        </div>
      </div>
      <div class="ml-3">
        <div>
          <span class="text-sm"> 用户名:</span>
          {{ Username }}
        </div>
        <div>
          <span class="text-sm">账号id: </span>
          {{ userid }}
        </div>
      </div>
    </div>
    <!-- 我的订单 -->
    <div class="mt-8">
      <van-cell-group :inset="true">
        <van-cell title="我的订单" is-link @click="goOrder">
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
    <div class="mt-8">
      <van-cell-group inset>
        <van-cell @click="goInfo">
          <template #title>
            <van-icon name="location-o"> 地址管理 </van-icon>
          </template>
        </van-cell>
        <van-cell @click="goMyCollect">
          <template #title>
            <van-icon name="star-o"> 我的收藏 </van-icon>
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

    <div class="flex justify-center pt-10 pb-20">
      <div v-if="Login">
        <van-button type="danger" class="w-80" @click="LogOut"
          >退出登录</van-button
        >
      </div>
      <div v-if="!Login">
        <van-button type="primary" class="w-80" @click="toLogin"
          >登录</van-button
        >
      </div>
    </div>
  </div>
  <!-- 信息确认框 -->
  <div>
    <login-dialog
      v-model:showDialog="showDialog"
      @getShow="
        (a) => {
          showDialog = a;
        }
      "
    />
  </div>
</template>
<script lang="ts" setup>
import userStore from "../../stores/user-store";
import { http, httpURL } from "../../util/http";
import { onMounted, ref } from "vue";
import { Toast, Popup, Button, Dialog } from "vant";
import { useRouter } from "vue-router";
import loginDialog from "../../components/loginDialog.vue";
let showDialog = ref(false);
let aa = ref("");
const router = useRouter();
//页面跳转
const goOrder = () => {
  if (token) {
    router.push(`/my/order-index/${JSON.stringify({ state: "全部" })}`);
  } else {
    Toast.fail("当前身份为游客，请登录！");
  }
};
const goMyCollect = () => {
  if (token) {
    router.push("/myCollect");
  } else {
    Toast.fail("当前身份为游客，请登录！");
  }
};
const goInfo = () => {
  if (token) {
    router.push("/myInfo");
  } else {
    Toast.fail("当前身份为游客，请登录！");
  }
};

//退出登录 删除token？
const LogOut = () => {
  console.log("执行logOut");
  Toast.success("退出登录");
  localStorage.removeItem("token");
  localStorage.removeItem("userid");
  localStorage.removeItem("username");
  localStorage.removeItem("image");
  localStorage.removeItem("role");
  setTimeout(() => {
    showDialog.value = true;
    Login.value = !Login.value;
    Image.value = "";
    Username.value = "";
    userid.value = "";
  }, 1000);
};
let Image = ref();
Image.value = localStorage.getItem("image");
let Username = ref();
Username.value = localStorage.getItem("username");
let userid = ref();
userid.value = localStorage.getItem("userid");

let editImgviss = ref(false);
const editImg = () => {
  if (token) {
    console.log("修改头像");
    editImgviss.value = true;
  } else {
    Toast.fail("当前身份为游客，请登录！");
  }
};
let showUpload = ref(true);
const handleChange = (file: {
  file: { status: string; response: { url: any } };
}) => {
  if (file.file.status == "done") {
    //上传成功
    Image.value = file.file.response?.url;
    Toast.success("上传成功");
    showUpload.value = false;
  }
  if (file.file.status == "uploading") {
    Toast.loading("上传中");
  }
  if (file.file.status == "error") {
    Toast.fail("上传失败");
  }
};
//关闭弹出层
const closePopup = () => {
  showUpload.value = true;
  Image.value = localStorage.getItem("image");
};
//确认修改
let ImgModel = ref({ image: String });
const editimgOk = async () => {
  const IDD = localStorage.getItem("userid");
  ImgModel.value.image = Image.value;
  const res = await http.put(`/users/${IDD}`, ImgModel.value);
  if (res) {
    localStorage.setItem("image", Image.value);
    Toast.success("修改成功");
  }
  closePopup();
};
//取消修改
const editimgColose = () => {
  closePopup();
};
//是否登录？

let Login = ref(false);
const toLogin = () => {
  router.push("login");
  // router.push("/login");
};
//信息确认框
let token = localStorage.getItem("token");
onMounted(() => {
  if (token) {
    Login.value = !Login.value;
  } else {
    showDialog.value = true;
  }
});
</script>

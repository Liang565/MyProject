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

    <div class="mb-20">
      <div v-for="i in COMPS">
        <component
          :is="pushComponents(i.name)"
          :option="i.option"
          :content="i.content"
          :index="i.index"
        ></component>
      </div>
    </div>
    <!-- 底部导航 -->
    <div></div>
  </div>
</template>
<script setup lang="ts">
import { defineAsyncComponent, onMounted, ref } from "vue";
import iconPark from "../../components/iconPark.vue";
import { http } from "../../util/http";
import { ActionBar, ActionBarIcon, ActionBarButton, Popup, Toast } from "vant";
import { useRouter } from "vue-router";
const props = defineProps({
  id: String,
});
let data = ref();
let COMPS = ref();
let token = localStorage.getItem("token");
/**添加组件 */
const pushComponents = (components: any) => {
  return defineAsyncComponent(() => import(`./components/${components}.vue`));
};
const router = useRouter();

const goSearch = () => {
  // 这里要跳转到搜索页
  console.log("点击搜索条");

  router.push("/search");
};

const share = () => {
  // 这里展示分享页面
  console.log("分享");
};
const goBack = () => {
  router.go(-1);
};
const goHome = () => {
  router.push("/");
};
const goCart = () => {
  // 这里要跳转到购物车
  if (token) {
    router.push("/cart1");
  } else {
    Toast.fail("当前身份为游客，请登录！");
  }
};

const fetch = async () => {
  const res = await http.get(`shops/${props.id}`);
  console.log(res.components);
  if (res) {
    data.value = res;
    COMPS.value = res.components;
  }
};
onMounted(() => {
  fetch();
});
</script>

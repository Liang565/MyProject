<template>
  <div>
    <van-nav-bar
      title="order"
      left-text="返回"
      left-arrow
      @click-left="$router.go(-1)"
    />
    <!-- 顶部 -->
    <div class="flex">
      <div></div>
      <div>
        <van-search v-model="value" placeholder="请输入搜索关键词" />
      </div>
    </div>

    <div>
      <van-tabs v-model:active="active" swipeable @change="change">
        <van-tab
          v-for="index in routerMap"
          :title="index.title"
          :name="index.path"
        >
          <div>
            <router-view></router-view>
          </div>
          <div>asjajd</div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
  <div>
    {{ routerMap }}
  </div>
  <div>
    {{ active }}
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import router from "../../../router";

let active = ref("");
const change = () => {
  console.log(active);
};
const routerMap = router
  .getRoutes()
  .map((v) => ({
    title: v.meta.title,
    icon: v.meta.icon,
    key: v.meta.key,
    path: v.path,
    meta: v.meta,
  }))
  .filter((v: any) => {
    return v.meta.navOrder;
  });
</script>

<template>
  <div>
    <div class="h-full">
      <van-tabs v-model:active="active" :swipeable="true" @change="change">
        <van-tab
          v-for="index in routerMap"
          :title="index.title"
          :name="index.path"
        >
          <div>
            <router-view></router-view>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ActionBar, ActionBarIcon, ActionBarButton, Tab, Tabs } from "vant";
import { defineAsyncComponent, ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
let active = ref("");
const change = () => {
  router.push(active.value);
};
const routerMap = router
  .getRoutes()
  .map((v) => ({
    title: <string>v.meta.title,
    icon: v.meta.icon,
    key: v.meta.key,
    path: v.path,
    meta: v.meta,
  }))
  .filter((v: any) => {
    return v.meta.hot;
  });

/**添加组件 */
const pushComponents = (components: any) => {
  return defineAsyncComponent(
    () => import(`../../components/components/${components}.vue`)
  );
};
</script>

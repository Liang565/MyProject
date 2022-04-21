<template>
  <div class="bg-green-400">
    <a-layout>
      <a-layout-sider class="bg-blue-400 h-100vh">
        <div>
          <a-menu mode="inline" @click="handleClick">
            <a-sub-menu v-for="list in Menw" :key="list.key">
              <template #icon>
                <div></div>
              </template>
              <!-- #加上属性 -->
              <template #title>
                <div>{{ list.title }}</div>
              </template>

              <a-menu-item v-for="ii in list.children" :key="ii.url">
                <div>
                  {{ ii.title }}
                </div>
              </a-menu-item>
            </a-sub-menu>
          </a-menu>
        </div>
      </a-layout-sider>
      <a-layout>
        <a-layout-header class="bg-slate-500 text-white">
          <div class="bg-blue-500 w-60 float-right">
            当前用户：
            {{ adminStore.state?.admin?.username }}
            <a-button @click="LogOut" class="bg-red-500 hover:bg-white"
              >退出登录</a-button
            >
          </div>
        </a-layout-header>

        <a-layout-content>
          <div class="p-5"><router-view></router-view></div>
        </a-layout-content>

        <a-layout-footer class="bg-white">Footer</a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { RAndLogin } from "../util/register-and-login";
import adminStore from "../stores/admin-store";
import router from "../router";

const { getUser, LogOut } = RAndLogin();
const Menw = router
  .getRoutes()
  .map((v: any) => ({
    title: v.meta.title,
    icon: v.meta.icon,
    key: v.meta.key,
    path: v.path,
    meta: v.meta,
    //children里面存放遍历的children的title和path
    children: v.children.map((v) => ({ title: v.meta?.title, url: v.path })),
  }))
  .filter((v) => {
    //筛选掉children
    return v.meta.Menu;
  });
const handleClick = ({ key }) => {
  router.push(key);
};
onMounted(() => {
  getUser();
});
</script>

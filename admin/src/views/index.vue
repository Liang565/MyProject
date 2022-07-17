<template>
  <div>
    <a-layout>
      <a-layout-sider
        class="h-100vh"
        theme="dark"
        v-model:collapsed="collapsed"
        collapsible
      >
        <div>
          <div>
            <a-menu
              mode="inline"
              @click="handleClick"
              v-model:openKeys="OpenKeys"
              v-model:selectedKeys="SelectedKeys"
              theme="dark"
            >
              <a-sub-menu v-for="list in Menw" :key="list.key">
                <template #icon>
                  <span class="translate-y-1">
                    <icon
                      :type="list.icon"
                      fill="rgb(255, 255, 255)"
                      theme="outline"
                      size="24"
                      :spin="false"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      :strokeWidth="2"
                  /></span>
                </template>
                <!-- #加上属性 -->
                <template #title>
                  <span class="text-lg">{{ list.title }}</span>
                </template>

                <a-menu-item v-for="ii in list.children" :key="ii.url">
                  <template #icon>
                    <icon
                      :type="ii.icon"
                      size="20"
                      fill="rgb(255, 255, 255)"
                      theme="outline"
                      :spin="false"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      :strokeWidth="2"
                    />
                  </template>
                  <span>{{ ii.title }}</span>
                  <!-- <div>
                    {{ ii.title }}
                  </div> -->
                </a-menu-item>
              </a-sub-menu>
            </a-menu>
          </div>
        </div>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background-color: #fff">
          <div class="flex justify-between w-full">
            <div class="-ml-12">
              <a-button type="ghost" @click="toggleCollapsed">
                <MenuUnfoldOutlined v-if="collapsed" />
                <MenuFoldOutlined v-else />
              </a-button>
            </div>
            <div class="flex justify-end items-center">
              <div class="mx-3">
                当前用户：
                {{ adminStore.state?.admin?.username }}
              </div>
              <a-button @click="LogOut" v-if="!isAdminLogin">退出登录</a-button>
              <a-button @click="AdminLogOut" v-if="isAdminLogin"
                >返回管理员</a-button
              >
            </div>
          </div>
        </a-layout-header>

        <a-layout-content>
          <div class="text-2xl mx-5 my-2">{{ $route.meta.title }}</div>
          <div class="px-5"><router-view></router-view></div>
        </a-layout-content>

        <!-- <a-layout-footer>Footer</a-layout-footer> -->
      </a-layout>
    </a-layout>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref, watch } from "vue";
import { RAndLogin } from "../util/register-and-login";
import adminStore from "../stores/admin-store";
import { useRouter } from "vue-router";
import { message } from "ant-design-vue";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  MailOutlined,
  DesktopOutlined,
  InboxOutlined,
  AppstoreOutlined,
} from "@ant-design/icons-vue";
import icon from "../components/icon.vue";

const router = useRouter();

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
    children: v.children.map((v) => ({
      title: v.meta?.title,
      url: v.path,
      meta: v.meta,
      icon: v.meta.icon,
    })),
  }))
  .filter((v) => {
    //筛选掉children
    return v.meta.Menu;
  });
const handleClick = ({ key }) => {
  SelectedKeys.value[0] = <never>key;
  router.push(key);
};
//默认选中的页面
let SelectedKeys = ref([]);

//展开的
let OpenKeys = ref();

// 记录是不是管理员一键登录
let isAdminLogin = ref(false);
const AdminLogOut = () => {
  console.log("执行adminLogOut");
  localStorage.setItem("userid", <string>localStorage.getItem("adminId"));
  localStorage.setItem("username", <string>localStorage.getItem("adminname"));
  localStorage.setItem("role", <string>localStorage.getItem("adminrole"));
  localStorage.removeItem("adminId");
  localStorage.removeItem("adminname");
  localStorage.removeItem("adminrole");
  isAdminLogin.value = false;

  setTimeout(() => {
    router.go(0);
  }, 1000);
  message.success("返回管理员登录");

  router.push("/");
};

onMounted(() => {
  if (localStorage.getItem("adminId")) {
    isAdminLogin.value = true;
  }
  getUser();
  //设置全局的用户名
  SelectedKeys.value[0] = <never>router.currentRoute.value.href; //获取当前页面路由

  //展开的导航栏根据不同用户而不同
  if (localStorage.getItem("role") == "user") {
    OpenKeys.value = ["home", "shoper"];
  } else {
    OpenKeys.value = ["home", "management"];
  }
});
let collapsed = ref(false);

const toggleCollapsed = () => {
  collapsed.value = !collapsed.value;
  // openKeys = collapsed ? [] : preOpenKeys;
};
</script>

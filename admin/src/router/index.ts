import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";
import { message } from "ant-design-vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

// router.addRoute({
//   path: "/",
//   meta: { title: "分类管理", isMenu: true, promiss: "public" },
//   component: () => import("../views/class/class.vue"),
// });
export default router;

//
router.beforeEach((to, from, next) => {
  //判断页面是否为登录页或者是否已经登录
  if (to.meta.isLogin || localStorage.token) {
    //判断页面权限和当前登录权限是否一致
    if (
      to.meta.promiss !== "public" &&
      to.meta.promiss !== localStorage.getItem("role") &&
      localStorage.getItem("role") !== "admin"
    ) {
      message.warn("没有权限进入" + to.meta.title);
      if (from.path === "/") {
        router.push("/");
      }
    } else {
      return next();
    }
  } else {
    router.push("/login");
  }
});

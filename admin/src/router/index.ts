import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/a.vue";
import mainvue from "../views/main.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/b.vue"),
    },

    {
      path: "/login",
      name: "login",
      meta: { title: "登录页", isPublic: true },
      component: () => import("../views/login/login.vue"),
    },
  ],
});

export default router;

//
router.beforeEach((to, from, next) => {
  if (to.meta.isPublic || localStorage.token) {
    return next();
  } else {
    router.push("/login");
  }
});

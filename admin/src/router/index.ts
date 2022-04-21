import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
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

import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";
import { routes2 } from "./routes2";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...routes, ...routes2],
});

export default router;

// router.beforeEach((to, from, next) => {
//   // if (to.path === "/my" && !localStorage.getItem("token")) {
//   //   router.push("/login");
//   // } else {
//   //   }
//   next();
// });

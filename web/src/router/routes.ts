export const routes = [
  {
    path: "/",
    meta: { title: "索引", key: "index", Nav: false },
    component: () => import("../views/index.vue"),
    children: [
      {
        path: "/",
        meta: { title: "首页", key: "home", icon: "home-o", Nav: true },
        component: () => import("../views/home/home.vue"),
      },
      {
        path: "/recommend",
        meta: { title: "推荐", key: "recommend", icon: "fire-o", Nav: true },
        component: () => import("../views/recommend/recommend.vue"),
      },
      {
        path: "/cart",
        meta: { title: "购物车", key: "cart", icon: "cart-o", Nav: true },
        component: () => import("../views/cart/cart.vue"),
        props: true,
      },
      {
        path: "/my",
        meta: { title: "我的", key: "my", icon: "setting-o", Nav: true },
        component: () => import("../views/my/my.vue"),
      },
    ],
  },
  {
    path: "/login",
    meta: {
      title: "登录页",
      isPublic: true,
    },
    component: () => import("../views/login/login.vue"),
  },
  {
    path: "/my/order-index",
    meta: {
      title: "订单导航页",
      key: "order-index",
      navOrder: false,
    },
    component: () => import("../views/my/order/order-index.vue"),
  },
];

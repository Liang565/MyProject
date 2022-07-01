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
    children: [
      {
        path: "/my/pending",
        meta: {
          title: "待付款",
          key: "pending",
          navOrder: true,
        },
        component: () => import("../views/my/order/pending.vue"),
      },
      {
        path: "/my/sending",
        meta: {
          title: "待发货",
          key: "sending",
          navOrder: true,
        },
        component: () => import("../views/my/order/sending.vue"),
      },
      {
        path: "/my/receiving",
        meta: {
          title: "待收货",
          key: "receiving",
          navOrder: true,
        },
        component: () => import("../views/my/order/receiving.vue"),
      },
      {
        path: "/my/evaluate.vue",
        meta: {
          title: "待评价",
          key: "evaluate",
          navOrder: true,
        },
        component: () => import("../views/my/order/evaluate.vue"),
      },
      {
        path: "/my/after-sale",
        meta: {
          title: "售后/退款",
          key: "after-sale",
          navOrder: true,
        },
        component: () => import("../views/my/order/after-sale.vue"),
      },
    ],
  },
  {
    path: "/goods/:id",
    meta: {
      title: "商品",
      key: "goods",
    },
    component: () => import("../views/goods/goods.vue"),
    props: true,
  },
  {
    path: "/shop/:id",
    meta: {
      title: "商铺",
      key: "shop",
    },
    component: () => import("../views/shop/shop.vue"),
    props: true,
  },
  {
    path: "/search",
    meta: {
      title: "搜索页",
      key: "search",
    },
    component: () => import("../views/search/search.vue"),
  },
  {
    path: "/cart1",
    meta: { title: "购物车", key: "cart1" },
    component: () => import("../views/cart/cart.vue"),
  },
];

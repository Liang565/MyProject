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
        children: [
          {
            path: "/recommend",
            meta: {
              title: "商品推荐",
              key: "hotGoods",
              hot: true,
            },
            component: () => import("../views/recommend/hotGoods.vue"),
          },
          {
            path: "/hotShops",
            meta: {
              title: "商铺推荐",
              key: "hotShops",
              hot: true,
            },
            component: () => import("../views/recommend/hotShops.vue"),
          },
        ],
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
    path: "/my/order-index/:model",
    meta: {
      title: "订单导航页",
      key: "order-index",
      navOrder: false,
    },
    component: () => import("../views/my/order/order-index.vue"),
    props: true,
    // children: [
    //   {
    //     path: "/my/allOrder",
    //     meta: {
    //       title: "全部",
    //       key: "allOrder",
    //       navOrder: true,
    //     },
    //     component: () => import("../views/my/order/allOrder.vue"),
    //   },
    //   {
    //     path: "/my/pending",
    //     meta: {
    //       title: "待付款",
    //       key: "pending",
    //       navOrder: true,
    //     },
    //     component: () => import("../views/my/order/pending.vue"),
    //   },
    //   {
    //     path: "/my/sending",
    //     meta: {
    //       title: "待发货",
    //       key: "sending",
    //       navOrder: true,
    //     },
    //     component: () => import("../views/my/order/sending.vue"),
    //   },
    //   {
    //     path: "/my/receiving",
    //     meta: {
    //       title: "待收货",
    //       key: "receiving",
    //       navOrder: true,
    //     },
    //     component: () => import("../views/my/order/receiving.vue"),
    //   },

    //   {
    //     path: "/my/after-sale",
    //     meta: {
    //       title: "售后/退款",
    //       key: "after-sale",
    //       navOrder: true,
    //     },
    //     component: () => import("../views/my/order/after-sale.vue"),
    //   },
    // ],
  },
];

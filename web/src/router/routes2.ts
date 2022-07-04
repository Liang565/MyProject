export const routes2 = [
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
  {
    path: "/myCollect",
    meta: { title: "我的收藏", key: "myCollect" },
    component: () => import("../views/my/manage/myCollect.vue"),
  },
];

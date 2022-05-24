export const routes = [
  {
    path: "/",
    meta: { title: "首页", key: "home", Menu: true, promiss: "public" },
    component: () => import("../views/index.vue"),
    children: [
      {
        path: "/home",
        meta: { title: "首页1", isMenu: true, promiss: "public" },
        component: () => import("../views/home/home.vue"),
      },
    ],
  },
  {
    path: "/",
    meta: {
      title: "信息管理",
      key: "management",
      Menu: true,
      promiss: "user",
    },
    component: () => import("../views/index.vue"),
    children: [
      {
        path: "/user",
        meta: { title: "用户管理", isMenu: true, promiss: "admin" },
        component: () => import("../views/user/user.vue"),
      },
      {
        path: "/order",
        meta: { title: "订单管理", isMenu: true, promiss: "user" },
        component: () => import("../views/order/order.vue"),
      },

      {
        path: "/class",
        meta: { title: "分类管理", isMenu: true, promiss: "public" },
        component: () => import("../views/class/class.vue"),
      },
      {
        path: "/goods",
        meta: { title: "商品管理", isMenu: true, promiss: "user" },
        component: () => import("../views/goods/goods.vue"),
      },
      {
        path: "/shop",
        meta: { title: "商铺管理", isMenu: true, promiss: "public" },
        component: () => import("../views/shop/shop.vue"),
      },
      {
        path: "/build-shop",
        meta: { title: "商铺搭建", isMenu: true, promiss: "public" },
        component: () => import("../views/shop/build-shop.vue"),
      },
      {
        path: "/promiss",
        meta: { title: "权限管理", isMenu: true, promiss: "admin" },
        component: () => import("../views/promiss/promiss.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    meta: { title: "登录页", isPublic: true, promiss: "public" },
    component: () => import("../views/login/login.vue"),
  },
  // {
  //   path: "/test",
  //   name: "test",
  //   meta: { title: "登录页", isPublic: true, promiss: "public" },

  //   component: () => import("../components/myImg/myimg.vue"),
  // },
];

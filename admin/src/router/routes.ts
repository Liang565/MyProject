export const routes = [
  {
    path: "/",
    meta: {
      title: "首页",
      key: "home",
      Menu: true,
      promiss: "public",
      icon: "home",
    },
    component: () => import("../views/index.vue"),
    children: [
      {
        path: "/",
        meta: {
          title: "首页",
          isMenu: true,
          promiss: "public",
          icon: "home-two",
        },
        component: () => import("../views/home/home.vue"),
      },
    ],
  },
  {
    path: "/",
    meta: {
      title: "移动端管理",
      key: "web",
      Menu: true,
      promiss: "admin",
      icon: "spanner",
    },
    component: () => import("../views/index.vue"),
    children: [
      {
        path: "/buildHome",
        meta: {
          title: "首页搭建",
          isMenu: true,
          promiss: "admin",

          icon: "spanner",
        },
        component: () => import("../views/webManage/buildHome.vue"),
      },
      {
        path: "/buildHotGoods",
        meta: {
          title: "推荐商品搭建",
          isMenu: true,
          promiss: "admin",

          icon: "endocrine",
        },
        component: () => import("../views/webManage/buildHotGoods.vue"),
      },
      {
        path: "/buildHotShop",
        meta: {
          title: "推荐商铺搭建",
          isMenu: true,
          promiss: "admin",

          icon: "booth",
        },
        component: () => import("../views/webManage/buildHotShop.vue"),
      },
      {
        path: "/components",
        meta: {
          title: "组件管理",
          isMenu: true,
          promiss: "admin",
          icon: "booth",
        },
        component: () => import("../views/webManage/components.vue"),
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
      icon: "info",
    },
    component: () => import("../views/index.vue"),
    children: [
      {
        path: "/user",
        meta: {
          title: "用户管理",
          isMenu: true,
          promiss: "admin",
          icon: "every-user",
        },
        component: () => import("../views/user/user.vue"),
      },

      {
        path: "/class",
        meta: {
          title: "分类管理",
          isMenu: true,
          promiss: "public",
          icon: "category-management",
        },

        component: () => import("../views/class/class.vue"),
      },
      {
        path: "/Allgoods",
        meta: {
          title: "商品管理",
          isMenu: true,
          promiss: "admin",
          icon: "commodity",
        },
        component: () => import("../views/goods/Allgoods.vue"),
      },
      {
        path: "/shop",
        meta: {
          title: "商铺管理",
          isMenu: true,
          promiss: "public",
          icon: "application",
        },
        component: () => import("../views/shop/shop.vue"),
      },

      {
        path: "/promiss",
        meta: {
          title: "权限管理",
          isMenu: true,
          promiss: "admin",
          icon: "permissions",
        },
        component: () => import("../views/promiss/promiss.vue"),
      },
    ],
  },
  {
    path: "/",
    meta: {
      title: "商家管理",
      key: "shoper",
      Menu: true,
      promiss: "user",
      icon: "shop",
    },
    component: () => import("../views/index.vue"),
    children: [
      {
        path: "/myGoods",
        meta: { title: "我的商品", isMenu: true, promiss: "user", icon: "box" },
        component: () => import("../views/goods/goods.vue"),
      },
      {
        path: "/build-shop",
        meta: {
          title: "商铺搭建",
          isMenu: true,
          promiss: "user",
          icon: "newlybuild",
        },
        component: () => import("../views/shop/build-shop.vue"),
      },
      {
        path: "/order",
        meta: {
          title: "订单管理",
          isMenu: true,
          promiss: "user",
          icon: "order",
        },
        component: () => import("../views/order/order.vue"),
      },
      {
        path: "/showClass",
        meta: {
          title: "查看分类",
          isMenu: true,
          promiss: "public",
          icon: "more-four",
        },
        component: () => import("../views/class/showClass.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    meta: { title: "登录页", isLogin: true, promiss: "public" },
    component: () => import("../views/login/login.vue"),
  },
  // {
  //   path: "/test",
  //   name: "test",
  //   meta: { title: "登录页", isPublic: true, promiss: "public" },

  //   component: () => import("../components/myImg/myimg.vue"),
  // },
];

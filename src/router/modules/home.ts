import { RouteRecordRaw } from "vue-router";

const homePage = [
  // 首页
  {
    path: "/home",
    name: "home",
    meta: {
      authentication: true,
      menu: {
        title: "首页",
        icon: "icon-home"
      }
    },
    component: () => import("@/layouts/admin.vue"),
    children: [
      {
        path: "",
        name: "home",
        meta: { menu: { title: "首页" } },
        component: () => import("@/views/home/index.vue")
      }
    ]
  }
] as RouteRecordRaw[];
export default homePage;

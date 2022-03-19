import { RouteRecordRaw } from "vue-router";

const errorPage = [
  // 错误页面
  {
    path: "/error",
    name: "errorPage",
    meta: {
      menu: { title: "错误页面", icon: "icon-error" }
    },
    component: () => import("@/layouts/error.vue"),
    children: [
      {
        path: "404",
        name: "404",
        meta: { menu: { title: "404" } },
        component: () => import("@/views/error/404.vue")
      },
      {
        path: "noPermission",
        name: "noPermission",
        // meta: { menu: { title: "没有权限" } },
        component: () => import("@/views/error/noPermission.vue")
      }
    ]
  }
] as RouteRecordRaw[];
export default errorPage;

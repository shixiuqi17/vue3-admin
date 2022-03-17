import { RouteRecordRaw } from "vue-router";

const errorPage = [
  // 错误页面
  {
    path: "/error",
    name: "errorPage",
    meta: { title: "错误页面", icon: "icon-error" },
    component: () => import("@/layouts/error.vue"),
    children: [
      {
        path: "404",
        name: "404",
        meta: { title: "404" },
        component: () => import("@/views/error/404.vue")
      },
      {
        path: "noPermission",
        name: "noPermission",
        meta: { title: "没有权限" },
        component: () => import("@/views/error/noPermission.vue")
      }
    ]
  }
] as RouteRecordRaw[];
export default errorPage;

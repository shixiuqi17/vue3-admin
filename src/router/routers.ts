import { RouteRecordRaw } from "vue-router";

const routers = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/auth/login.vue")
  },
  // 首页
  {
    path: "/home",
    meta: { authentication: true, title: "首页", icon: "icon-home" },
    component: () => import("@/layouts/admin.vue"),
    children: [
      {
        path: "",
        name: "home",
        meta: { title: "首页" },
        component: () => import("@/views/home/index.vue")
      }
    ]
  },
  // 错误页面
  {
    path: "/error",
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
  },
  // 富文本编辑器
  {
    path: "/markdown",
    meta: { authentication: true, title: "富文本编辑器", icon: "icon-home" },
    component: () => import("@/layouts/admin.vue"),
    children: [
      {
        path: "markDown1",
        name: "markdown",
        meta: { title: "富文本编辑器" },
        component: () => import("@/views/markDown/index.vue")
      }
    ]
  }
] as RouteRecordRaw[];

export default routers;

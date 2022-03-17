import { RouteRecordRaw } from "vue-router";

const routers = [
  {
    path: "/",
    meta: { authentication: true },
    component: () => import("@/layouts/admin.vue"),
    children: [
      {
        path: "",
        name: "home",
        component: () => import("@/views/home/index.vue")
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/auth/login.vue")
  },
  {
    path: "error/404",
    name: "404",
    component: () => import("@/views/error/404.vue")
  }
] as RouteRecordRaw[];

export default routers;

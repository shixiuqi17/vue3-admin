import { RouteRecordRaw } from "vue-router";

const routers = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/home/index.vue")
  },
  {
    path: "/auth",
    name: "auth",
    component: () => import("@/views/auth/index.vue"),
    children: [
      {
        path: "login",
        name: "login",
        component: () => import("@/views/auth/login.vue")
      }
    ]
  }
] as RouteRecordRaw[];

export default routers;

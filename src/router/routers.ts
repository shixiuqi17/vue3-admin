import { RouteRecordRaw } from "vue-router";

const routers = [
  {
    path: "/",
    name: "home",
    meta: { authentication: true },
    component: () => import("@/views/home/index.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/auth/login.vue")
  }
] as RouteRecordRaw[];

export default routers;

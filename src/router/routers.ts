import { RouteRecordRaw } from "vue-router";

const routers = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/home.vue")
  }
] as RouteRecordRaw[];

export default routers;

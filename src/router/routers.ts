import { RouteRecordRaw } from "vue-router";
import homePage from "./modules/home";
import errorPage from "./modules/error";
import editorPage from "./modules/editor";
const routers = [
  {
    path: "",
    redirect: "/home"
  },
  // 登录页
  {
    path: "/login",
    name: "login",
    meta: { guest: true },
    component: () => import("@/views/auth/login.vue")
  },
  ...homePage,
  ...errorPage,
  ...editorPage
] as RouteRecordRaw[];

export default routers;

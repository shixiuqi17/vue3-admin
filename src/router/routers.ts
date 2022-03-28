import { RouteRecordRaw } from "vue-router";
import homePage from "./modules/home";
import errorPage from "./modules/error";
import editorPage from "./modules/editor";
import componentsPage from "./modules/componentsPage";
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
  // 没有的页面定向到404
  {
    path: "/:any(.*)",
    name: "notFound",
    meta: { hidden: false },
    component: () => import("@/views/error/404.vue")
  },
  ...homePage,
  ...editorPage,
  ...componentsPage,
  ...errorPage
] as RouteRecordRaw[];

export default routers;

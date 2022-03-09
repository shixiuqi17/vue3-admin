// 自动配置路由
import { RouteRecordRaw } from "vue-router";
import { toHumpName } from "@/utils";

// 编辑文件夹拿父级路由页面
const layouts = import.meta.globEager("../layouts/*.vue");
// 遍历文件夹拿子集路由页面
const views = import.meta.globEager("../views/**/*.vue");

// 获取路由页面
function getRoutes() {
  const layoutRouters = [] as RouteRecordRaw[];
  // 遍历文件
  Object.entries(layouts).forEach(([file, module]) => {
    const route = getRouteByModule(file, module);
    route.children = getChildRoutes(route);
    layoutRouters.push(route);
  });
  return layoutRouters;
}

// 获取子路由页面
function getChildRoutes(layoutRoute: RouteRecordRaw) {
  const routes = [] as RouteRecordRaw[];
  Object.entries(views).forEach(([file, module]) => {
    if (file.includes(`../views/${layoutRoute.name as string}`)) {
      const route = getRouteByModule(file, module);
      routes.push(route);
    }
  });
  return routes;
}

// 定义路由
function getRouteByModule(file: string, module: { [key: string]: any }) {
  const name = file.replace(/.+layouts\/|.+views\/|\.vue/gi, "");
  const route = {
    name: toHumpName(name.replace("/", "-")),
    path: `/${name}`,
    component: module.default
  } as RouteRecordRaw;
  return Object.assign(route, module.default?.route);
}

/* 页面路由需要自定义配置
export default {
  route: { path: "/routerName" }
} */

const routes =
  import.meta.env.VITE_ROUTER_AUTOLOAD == "true"
    ? getRoutes()
    : ([] as RouteRecordRaw[]);

export default routes;

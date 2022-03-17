import { defineStore } from "pinia";
import { useRouter } from "vue-router";
export const useRouterStore = defineStore("router", {
  state: () => {
    return {
      routes: getRoutes()
    };
  }
});

function getRoutes() {
  const router = useRouter();
  const routes = router
    .getRoutes() // 获取所有的路由
    .filter((route) => route.children.length && !route.meta.hidden)
    .map((route) => {
      route.children = route.children.filter((route) => !route.meta?.hidden);
      return route;
    });
  return routes;
}

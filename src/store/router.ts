import { defineStore } from "pinia";
import { useRouter } from "vue-router";
export const router = defineStore("router", {
  state: () => {
    return {
      routes: getRoutes()
    };
  }
});

function getRoutes() {
  const router = useRouter();
  const routes = router.getRoutes().filter((route) => {
    return route.children.length && !route.meta.hidden;
  });
  return routes;
}

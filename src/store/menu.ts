import { defineStore } from "pinia";
import router from "@/router";
import { handleRouteLink } from "@/utils";
import { IMenu } from "types/menu";
import { RouteLocationNormalized } from "vue-router";
import store from "@/utils/store";
export const useMenuStore = defineStore("menus", {
  state: () => {
    return {
      menus: [] as IMenu[],
      historyMenu: [
        { title: "首页", name: "home", routerLink: "/home" }
      ] as IMenu[]
    };
  },
  actions: {
    // 添加路由历史菜单
    addHistoryMenu(route: RouteLocationNormalized) {
      this.historyMenu =
        (store.get("historyMenu") as IMenu[]) ?? this.historyMenu;

      if (!route.meta?.menu) return;

      const menu: IMenu = {
        ...route.meta.menu,
        name: route.name as string,
        routerLink: route.fullPath
      };
      const isHas = this.historyMenu.some((menu) => menu.name == route.name);
      if (!isHas) this.historyMenu.push(menu);

      store.set("historyMenu", this.historyMenu);
    },

    // 删除路由历史菜单
    removeHistoryMenu(menu: IMenu, curPath: string) {
      const $router = router;
      const index = this.historyMenu.indexOf(menu);
      const prevRoute = this.historyMenu[index - 1];
      this.historyMenu.splice(index, 1);
      store.set("historyMenu", this.historyMenu);
      if (curPath == menu.routerLink)
        $router.push(prevRoute.routerLink as string);
    },

    // 初始化menu菜单
    menuInit() {
      this.getMenuByRouter();
    },

    // 根据路由获取menu菜单
    getMenuByRouter() {
      const menus = router
        .getRoutes() // 获取所有路由
        .filter((route) => route.children.length && route.meta.menu) //筛选有菜单属性的路由
        .map((route) => {
          // 将父路由数据整理
          let fRouteLink = route.path;
          let menu: IMenu = {
            ...route.meta.menu,
            routerLink: fRouteLink,
            name: route.name as string
          };
          menu.children = route.children
            .filter((route) => route.meta?.menu)
            .map((route) => {
              let cMenu = {
                ...route.meta?.menu,
                routerLink: handleRouteLink(fRouteLink, route.path),
                name: route.name
              };
              return cMenu;
            }) as IMenu[];
          return menu;
        });
      this.menus = menus;
    }
  }
});

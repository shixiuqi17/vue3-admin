import { defineStore } from "pinia";
import router from "@/router";
import { handleRouteLink } from "@/utils";
import { IMenu } from "types/menu";
export const useMenuStore = defineStore("menus", {
  state: () => {
    return {
      menus: [] as IMenu[]
    };
  },
  actions: {
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

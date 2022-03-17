import store from "@/utils/store";
import { RouteLocationNormalized, Router } from "vue-router";

class Guard {
  constructor(private router: Router) {}
  public run() {
    this.router.beforeEach((to, from) => {
      // 根据权限重定向
      const token = store.get("token");
      if (this.isLogin(to, token?.token) === false) return { name: "login" };
      if (this.isGuest(to, token?.token) === false) return from;
    });
  }

  // 验证是否登录
  private isLogin(route: RouteLocationNormalized, token: string): boolean {
    return Boolean(
      !route.meta.authentication || (route.meta.authentication && token)
    );
  }

  // 验证是否是游客
  private isGuest(route: RouteLocationNormalized, token: string): boolean {
    return Boolean(!route.meta.guest || (route.meta.guest && !token));
  }
}

export default (router: Router) => {
  new Guard(router).run();
};

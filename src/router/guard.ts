import store from "@/utils/store";
import { RouteLocationNormalized, Router } from "vue-router";

class Guard {
  constructor(private router: Router) {}
  public run() {
    this.router.beforeEach((to, from) => {
      // 登录权限重定向
      const token = store.get("token");
      if (this.isLogin(to, token?.token) === false) return { name: "login" };
    });
  }

  // 验证是否登录
  private isLogin(route: RouteLocationNormalized, token: string): boolean {
    return Boolean(
      !route.meta.authentication || (route.meta.authentication && token)
    );
  }
}

export default (router: Router) => {
  new Guard(router).run();
};

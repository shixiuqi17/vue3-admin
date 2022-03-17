import "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    authentication?: boolean; //登录后才可进入
    guest?: boolean; // 游客
    hidden?: boolean; //是否在menu显示
    title?: string; //显示在menu的标题
    icon?: string; //显示在menu的图标
    permission?: string[]; // 权限组
  }
}

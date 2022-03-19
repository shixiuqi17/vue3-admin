import "vue-router";
import { IMenu } from "./menu";

declare module "vue-router" {
  interface RouteMeta {
    authentication?: boolean; //登录后才可进入
    guest?: boolean; // 游客
    permission?: string[]; // 权限组
    menu?: IMenu;
  }
}

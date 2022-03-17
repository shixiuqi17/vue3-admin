import "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    authentication?: boolean;
    hidden?: boolean;
    title?: string;
    icon?: string;
  }
}

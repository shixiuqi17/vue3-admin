import { createRouter, createWebHistory } from "vue-router";
import { App } from "vue";
import routes from "./routers";
import layoutRouters from "@/router/autoLoad";

const router = createRouter({
  history: createWebHistory(),
  routes: [...routes, ...layoutRouters]
});

export function setupRouter(app: App) {
  app.use(router);
}

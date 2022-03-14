import { createRouter, createWebHistory } from "vue-router";
import { App } from "vue";
import routes from "./routers";
import guard from "./guard";

const router = createRouter({
  history: createWebHistory(),
  routes
});

export function setupRouter(app: App) {
  guard(router);
  app.use(router);
}

import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../views/home.vue")
    }
  ]
});

export function setupRouter(app: any) {}

export default router;

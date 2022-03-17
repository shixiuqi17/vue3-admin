import { App } from "vue";
import setupElementPlus from "./elementPlus";
import setupI18n from "./i18n";
import setupPinia from "./pinia";

// 插件引入
export function setupPlugins(app: App) {
  setupElementPlus(app);
  setupI18n(app);
  setupPinia(app);
}

import { App } from "vue";
import setupElementPlus from "./elementPlus";

// 插件引入
export function setupPlugins(app: App) {
  setupElementPlus(app);
}

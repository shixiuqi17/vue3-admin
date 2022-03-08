import vue from "@vitejs/plugin-vue";
import { Plugin } from "vite";
import { setupMockPlugin } from "./mock";

export default function setupVitePlugins(isBuild: boolean, env: ViteEnv) {
  const plugins: Plugin[] = [vue()];

  // 配置mock插件
  plugins.push(setupMockPlugin(isBuild));

  return plugins;
}

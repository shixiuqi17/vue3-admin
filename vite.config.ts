import { defineConfig, ConfigEnv, loadEnv } from "vite";
import alias from "./vite/alias";
import { parseEnv } from "./vite/utils";
import setupVitePlugins from "./vite/plugins";

// export default defineConfig({
//   plugins: [vue()],
//   resolve: {
//     // 配置名别 （path包 + @types/node类型提示）
//     alias
//   }
// });

export default ({ command, mode }: ConfigEnv) => {
  // 判断是否在编译模式
  const isBuild = command == "build";
  const __DEV__ = mode === "development";
  const root = process.cwd();

  // 将env变量转换为正确的数据类型
  const env = parseEnv(loadEnv(mode, root));

  if (__DEV__) {
    // 解决警告You are running the esm-bundler build of vue-i18n.
    alias["vue-i18n"] = "vue-i18n/dist/vue-i18n.cjs.js";
  }
  return {
    // plugins: [vue()], // vite统一管理插件
    plugins: setupVitePlugins(isBuild, env),
    resolve: {
      alias
    }
  };
};

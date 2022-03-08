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
  const root = process.cwd();
  // 将env变量转换为正确的数据类型
  const env = parseEnv(loadEnv(mode, root));
  
  return {
    // plugins: [vue()], // vite统一管理插件
    plugins: setupVitePlugins(isBuild, env),
    resolve: {
      alias
    }
  };
};

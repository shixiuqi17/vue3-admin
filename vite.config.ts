import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // 配置名别 （path包 + @types/node类型提示）
    alias: { "@": path.resolve(__dirname, "src") }
  }
});

import { App } from "vue";
import { createI18n } from "vue-i18n";
import messages from "./lang";

const i18n = createI18n({
  locale: "zh-CN",
  fallbackLocale: "zh-CN",
  legacy: false, // 让 setup 函数可以通过 t 访问
  globalInjection: true, // 让 template 可以像 vue2 那样使用 $t 来访问
  messages
});
export default function setupI18n(app: App) {
  app.use(i18n);
}

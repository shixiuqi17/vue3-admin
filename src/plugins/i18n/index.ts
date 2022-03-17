import { App } from "vue";
import { createI18n } from "vue-i18n";
import zh_cn from "@/lang/zh-CN";
import en_us from "@/lang/en-US";
const i18n = createI18n({
  locale: "zh-CN",
  fallbackLocale: "zh-CN",
  legacy: false, // 让 setup 函数可以通过 t 访问
  globalInjection: true, // 让 template 可以像 vue2 那样使用 $t 来访问
  messages: {
    "zh-CN": zh_cn,
    "en-US": en_us
  }
});
export default function setupI18n(app: App) {
  app.use(i18n);
}

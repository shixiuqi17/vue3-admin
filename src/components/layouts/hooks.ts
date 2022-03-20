import { useI18n } from "vue-i18n";
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

// 菜单栏切换语言，useI18n只能在setup函数下使用，暂未找到解决方案
export function currentLang() {
  const { locale } = useI18n();
  let isChinese = ref(true);
  watch(
    locale,
    (lang) => {
      isChinese.value = lang === "zh-CN" ? true : false;
    },
    { immediate: true }
  );
  return isChinese;
}

// 获取当前活跃路由路径
export function currentRouterPath() {
  const router = useRouter();
  const route = useRoute();
  let path = ref("");
  path.value = router.currentRoute.value.fullPath;
  watch(
    () => route.path,
    (value) => {
      path.value = value;
    }
  );
  return path;
}

<template>
  <el-menu
    :collapse="isCollapse"
    background-color="#304156"
    text-color="#bfcbd9"
    default-active="/home"
    class="el-menu-vertical-demo"
    unique-opened
    router
  >
    <el-sub-menu
      :index="routeIndex + ''"
      v-for="(route, routeIndex) in routerStore.menus"
      :key="routeIndex"
    >
      <template #title>
        <i :class="['menu-icon', 'iconfont', route.icon]"></i>
        <span v-if="showChinese">{{ route.title }}</span>
        <span v-else>{{ route.name }}</span>
      </template>
      <el-menu-item
        :index="routeChild.routerLink"
        v-for="(routeChild, routeChildIndex) in route.children"
        :key="routeChildIndex"
      >
        <span v-if="showChinese">{{ routeChild.title }}</span>
        <span v-else>{{ routeChild.name }}</span>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import { onUnmounted, ref, watch } from "vue";
import { useMenuStore } from "@/store/menu";
import { useI18n } from "vue-i18n";
import emitter from "@/plugins/mitt";

// 收缩侧边栏
let isCollapse = ref(false);
emitter.on("isCollapse", (val) => {
  isCollapse.value = val as boolean;
});
onUnmounted(() => {
  emitter.off("isCollapse");
});

// 获取渲染menu的路由列表
const routerStore = useMenuStore();
routerStore.menuInit();

// 菜单栏切换语言，useI18n只能在setup函数下使用，暂未找到解决方案
const { locale } = useI18n();
let showChinese = ref(true);
watch(
  locale,
  (val) => {
    if (val === "zh-CN") {
      showChinese.value = true;
    } else {
      showChinese.value = false;
    }
  },
  { immediate: true }
);
</script>

<style lang="scss" scoped>
h4 {
  margin: 20px 0;
  text-align: center;
  font-weight: 400;
  font-size: 26px;
  color: #fff;
}
.el-menu {
  overflow: hidden;
}
.menu-icon {
  vertical-align: middle;
  margin-right: 5px;
  width: 24px;
  text-align: center;
  font-size: 18px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>

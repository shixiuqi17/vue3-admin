<template>
  <el-menu
    :collapse="isCollapse"
    :default-active="activePath"
    background-color="#304156"
    text-color="#bfcbd9"
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
        <span v-show="isChinese">{{ route.title }}</span>
        <span v-show="!isChinese">{{ route.name }}</span>
      </template>
      <el-menu-item
        :index="routeChild.routerLink"
        v-for="(routeChild, routeChildIndex) in route.children"
        :key="routeChildIndex"
      >
        <span v-show="isChinese">{{ routeChild.title }}</span>
        <span v-show="!isChinese">{{ routeChild.name }}</span>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import { onUnmounted, ref } from "vue";
import { useMenuStore } from "@/store/menu";
import emitter from "@/plugins/mitt";
import { currentLang, currentRouterPath } from "./hooks";

// menu菜单高亮，根据路由变化改变
let activePath = currentRouterPath();

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

let isChinese = currentLang();
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

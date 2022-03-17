<template>
  <el-menu
    :collapse="isCollapse"
    unique-opened
    background-color="#304156"
    text-color="#bfcbd9"
    default-active="/home"
    router
  >
    <el-sub-menu
      :index="routeIndex + ''"
      v-for="(route, routeIndex) in routerList.routes"
      :key="routeIndex"
    >
      <template #title>
        <i :class="['menu-icon', 'iconfont', route.meta.icon]"></i>
        <span>{{ route.meta.title }}</span>
      </template>
      <el-menu-item
        :index="routeLink(route.path, routeChild.path)"
        v-for="(routeChild, routeChildIndex) in route.children"
        :key="routeChildIndex"
        >{{ routeChild.meta?.title }}
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import { onUnmounted, ref } from "vue";
import { router } from "@/store/router";
import emitter from "@/plugins/mitt";

// 收缩侧边栏
let isCollapse = ref(false);
emitter.on("isCollapse", (val) => {
  isCollapse.value = val as boolean;
});
onUnmounted(() => {
  emitter.off("isCollapse");
});

const routerList = router();
// menu菜单路由跳转
const routeLink = (routePath: string, routeChildPath: string) => {
  if (routePath === "/home") {
    return "/home";
  }
  return `${routePath}/${routeChildPath}`;
};

console.log(routerList.routes);
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
</style>

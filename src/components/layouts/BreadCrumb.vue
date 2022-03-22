<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">
      <span v-if="isChinese">首页</span>
      <span v-else>home</span>
    </el-breadcrumb-item>
    <template v-if="menuStore.routeCrumbs?.name !== 'home'">
      <el-breadcrumb-item
        v-for="(item, index) in menuStore.routeCrumbs?.matched"
        :key="index"
      >
        <span v-if="isChinese">{{ item.meta.menu?.title }}</span>
        <span v-else>{{ item.name }}</span>
      </el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>

<script lang="ts" setup>
import { useMenuStore } from "@/store/menu";
import { currentLang } from "./hooks";

let menuStore = useMenuStore();

let isChinese = currentLang();
</script>

<style lang="scss" scoped></style>

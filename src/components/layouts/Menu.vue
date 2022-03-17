<template>
  <el-menu
    default-active="2"
    :collapse="isCollapse"
    unique-opened
    background-color="#304156"
    text-color="#bfcbd9"
  >
    <!-- <h4>vue admin</h4> -->
    <el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>Navigator One</span>
      </template>
      <el-menu-item index="1-1">item one</el-menu-item>
      <el-menu-item index="1-2">item one</el-menu-item>
      <el-menu-item index="1-3">item three</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="2">
      <template #title>
        <el-icon><location /></el-icon>
        <span>Navigator One</span>
      </template>
      <el-menu-item index="2-2">item one</el-menu-item>
      <el-menu-item index="2-4">item one</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import {
  Location,
  Document,
  Menu as IconMenu,
  Setting
} from "@element-plus/icons-vue";

let isCollapse = ref(false);
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
</style>

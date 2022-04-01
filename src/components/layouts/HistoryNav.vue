<template>
  <div class="history-list">
    <div
      v-for="(item, index) in menuStore.historyMenu"
      :key="item.name"
      :class="['nav-item', { active: activePath === item.routerLink }]"
      @click="routerLink(item.routerLink as string)"
    >
      <span v-show="isChinese">{{ item.title }}</span>
      <span v-show="!isChinese">{{ item.name }}</span>
      <i
        v-if="item.name !== 'home'"
        class="iconfont icon-close"
        @click.stop="menuStore.removeHistoryMenu(item, activePath)"
      ></i>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useMenuStore } from "@/store/menu";
import { currentLang, currentRouterPath } from "./hooks";
import { useRouter } from "vue-router";

const router = useRouter();
let isChinese = currentLang();
let activePath = currentRouterPath();

// 历史菜单列表
const menuStore = useMenuStore();
const routerLink = (path: string) => {
  router.push(path);
};
</script>

<style lang="scss" scoped>
.history-list {
  background-color: #fff;
  display: flex;
  padding: 12px 15px;
  text-align: center;
  white-space: nowrap;
  overflow-y: hidden;
  overflow-x: auto;

  &::-webkit-scrollbar {
    height: 5px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
    background: rgba(0, 0, 0, 0.1);
    scrollbar-arrow-color: red;
  }
  &::-webkit-scrollbar-track {
    border-radius: 0;
    background: rgba(0, 0, 0, 0.1);
  }
  .nav-item + .nav-item {
    margin-left: 10px;
  }
  .nav-item {
    height: 30px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #000;
    border-radius: 5px;
    padding: 5px 8px;
    font-size: 12px;
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s;
    &.active {
      background-color: $myColor;
      border: 1px solid $myColor;
      color: #fff;
      i {
        color: #fff;
      }
    }
    &:hover {
      background-color: $myColor;
      border: 1px solid $myColor;
      color: #fff;
      i {
        color: #fff;
      }
    }
    i {
      margin-left: 5px;
      font-size: 12px;
      padding: 2px;
      transition: all 0.2s;
      border-radius: 50%;
      color: #000;
      &:hover {
        background-color: #000;
      }
    }
  }
}
</style>

<template>
  <div class="history-list">
    <div
      v-for="(item, index) in navList"
      :key="index"
      class="nav-item"
      @click="deleteNavTag(index)"
    >
      {{ item }}<i class="iconfont icon-close"></i>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";

let navList = reactive([
  "导航页面",
  "导航页面1",
  "导航页面2",
  "导航页面3",
  "导航页面4",
  "导航页面5",
  "导航页面6",
  "导航页面7"
]);
const deleteNavTag = (index: number) => {
  navList.splice(index, 1);
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
    // background-color: #55c5d6;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #000;
    border-radius: 5px;
    padding: 5px 8px;
    font-size: 12px;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: all 1s;
    i {
      margin-left: 5px;
      font-size: 12px;
      padding: 2px;
      transition: all 0.2s;
      color: #000;
      &:hover {
        background-color: #8a8787;
        border-radius: 50%;
      }
    }
  }
}
</style>

<template>
  <div
    class="notice-wapper"
    @mouseenter="showNotice = true"
    @mouseleave="showNotice = false"
  >
    <el-badge :value="6">
      <i class="iconfont icon-notice"></i>
    </el-badge>
    <transition
      v-show="showNotice"
      class="animate__animated"
      enter-active-class="animate__fadeIn"
      leave-active-class="animate__fadeOut"
    >
      <el-tabs v-model="activeName" class="demo-tabs">
        <el-tab-pane label="通知" name="notice">
          <div
            class="notice-item"
            v-for="(item, index) in noitceData"
            :key="index"
          >
            <img :src="`src/assets/images/avatar/${item.img}`" alt="" />
            <div class="title">{{ item.title }}</div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="站内信" name="message">
          <div
            class="notice-item"
            v-for="(item, index) in messageData"
            :key="index"
          >
            <img :src="`src/assets/images/avatar/${item.img}`" alt="" />
            <div class="title">{{ item.title }}</div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

let showNotice = ref(false);
const activeName = ref("notice");

// 定义 “通知” 的数据
interface INoticeData {
  img: string;
  title: string;
}
const noitceData: INoticeData[] = [
  { img: "avatar.gif", title: "以下是我的邮箱和电话" },
  { img: "15919_100.gif", title: "shixiuqimail@163.com" },
  { img: "15918_100.gif", title: "18221497902" }
];

// 定义 站内信 的数据
interface IMessageDatta extends INoticeData {}

const messageData: IMessageDatta[] = [
  { img: "15640_100.gif", title: "我是第一条站内信！" },
  { img: "15918_100.gif", title: "我是第二条站内信！" },
  { img: "15919_100.gif", title: "我是第三条站内信" }
];
</script>

<style lang="scss" scoped>
.animate__fadeIn {
  animation-duration: 0.4s;
}
.animate__fadeOut {
  animation-duration: 0.4s;
}
.notice-wapper {
  position: relative;
  margin-right: 20px;
  .iconfont {
    cursor: pointer;
  }
  .demo-tabs {
    width: 300px;
    padding: 15px 15px;
    background-color: #fff;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    .notice-item + .notice-item {
      margin-top: 15px;
    }
    .notice-item {
      display: flex;
      align-items: center;
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
      .title {
        margin-left: 10px;
        font-size: 14px;
      }
    }
    :deep(.el-tabs__content) {
      height: 120px;
      overflow: auto;
      scrollbar-width: none;
      -ms-overflow-style: none;
      &::-webkit-scrollbar {
        display: none;
      }
    }
    :deep(.el-tabs__item) {
      font-size: 12px;
      padding: 0 10px;
    }
  }
}
</style>

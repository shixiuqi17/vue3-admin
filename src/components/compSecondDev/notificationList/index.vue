<template>
  <div class="notification-list-wrapper">
    <el-tabs v-model="activeName" class="demo-tabs">
      <el-tab-pane
        :label="item.title"
        :name="item.title"
        v-for="item in props.list"
        :key="item.title"
      >
        <el-scrollbar max-height="300px">
          <div class="content-item">
            <div
              class="container"
              v-for="item1 in item.content"
              :key="item1.time"
            >
              <div class="avatar" v-if="item1.avatar">
                <el-avatar size="small" :src="item1.avatar"></el-avatar>
              </div>
              <div class="content">
                <div v-if="item1.title" class="title">
                  <div>{{ item1.title }}</div>
                  <el-tag v-if="item1.tag" size="small" :type="item1.tagType">{{
                    item1.tag
                  }}</el-tag>
                </div>
                <div class="time" v-if="item1.desc">{{ item1.desc }}</div>
                <div class="time" v-if="item1.time">{{ item1.time }}</div>
              </div>
            </div>
          </div>
          <div class="actions">
            <div
              class="actions-item"
              v-for="(action, i) in props.actions"
              :key="i"
            >
              <i :class="['iconfont', action.icon]"></i>
              <div class="a-text">{{ action.text }}</div>
            </div>
          </div>
        </el-scrollbar>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { ActionOptions, ListOptions } from "./types";
import { ref } from "vue";

const activeName = ref("通知");

const props = defineProps({
  list: {
    type: Array as PropType<ListOptions[]>,
    required: true
  },
  actions: {
    type: Array as PropType<ActionOptions[]>,
    default: () => []
  }
});
</script>

<style lang="scss" scoped>
.notification-list-wrapper {
  :deep(.el-tabs__nav) {
    width: 100%;
    display: flex;
  }
  :deep(.el-tabs__item) {
    flex: 1;
    text-align: center;
  }
  .content-item {
    padding-bottom: 50px;
    .container {
      display: flex;
      align-items: center;
      padding: 12px 20px;
      cursor: pointer;
      transition: all 0.3s;
      &:hover {
        background: #e6f6ff;
      }
      .avatar {
        flex: 1;
      }
      .content {
        flex: 3;
        .title {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .time {
          font-size: 12px;
          color: #999;
          margin-top: 4px;
        }
      }
    }
  }

  .actions {
    height: 50px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    border-top: 1px solid #eee;
    position: absolute;
    bottom: 0;
    background: #fff;
    width: 100%;
    .actions-item + .actions-item {
      border-left: 1px solid #eee;
    }
    .actions-item {
      height: 50px;
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      .iconfont {
        margin-right: 4px;
      }
    }
  }
}
</style>

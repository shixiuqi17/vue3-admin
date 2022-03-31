<template>
  <div class="notification-wrapper">
    <el-popover
      popper-class="notification-el-popover"
      placement="bottom"
      :width="300"
      trigger="hover"
    >
      <template #default>
        <slot></slot>
      </template>
      <template #reference>
        <el-badge :value="props.value" :max="props.max" :is-dot="props.isDot">
          <!-- icon图标 -->
          <slot name="icon" v-if="slots.icon && !icon"></slot>
          <i
            :class="['iconfont', props.icon]"
            v-else-if="!slots.icon && icon"
          ></i>
          <el-icon v-else><bell /></el-icon>
        </el-badge>
      </template>
    </el-popover>
  </div>
</template>

<script lang="ts" setup>
import { Bell } from "@element-plus/icons-vue";
import { useSlots } from "vue";

const slots = useSlots();

const props = defineProps({
  icon: {
    type: String,
    default: "icon-notice"
  },
  value: {
    type: [String, Number],
    default: ""
  },
  max: {
    type: Number,
    default: 99
  },
  isDot: {
    type: Boolean,
    default: false
  }
});
</script>

<style lang="scss" scoped>
.notification-wrapper {
  cursor: pointer;
}
</style>

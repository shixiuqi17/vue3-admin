<template>
  <div class="select-date-wapper">
    <div class="date-start">
      <el-date-picker
        v-model="startDate"
        type="date"
        :placeholder="props.startPlaceholder"
        :disabled-date="startDisabledDate"
        v-bind="$attrs.startOptions"
      >
      </el-date-picker>
    </div>
    <div class="date-end">
      <el-date-picker
        v-model="endDate"
        type="date"
        :placeholder="props.endPlaceholder"
        :disabled-date="endDisabledDate"
        :disabled="endDateDisabled"
        v-bind="$attrs.endOptions"
      >
      </el-date-picker>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";

const props = defineProps({
  startPlaceholder: {
    type: String,
    default: "请选择开始日期"
  },
  endPlaceholder: {
    type: String,
    default: "请选择结束日期"
  },
  // 是否禁止今天之前的日期
  disableBeforeToday: {
    type: Boolean,
    default: false
  }
});

const emits = defineEmits(["select", "startDate", "endDate"]);

const ONEDAY = 86400000;
let startDate = ref<Date | undefined>(undefined);
let endDate = ref<Date | undefined>(undefined);
let endDateDisabled = ref(false);

// 开始日期禁选函数
const startDisabledDate = (time: Date) => {
  if (props.disableBeforeToday) {
    return time.getTime() < Date.now() - ONEDAY;
  }
};

// 结束日期禁选函数
const endDisabledDate = (time: Date) => {
  if (startDate.value) {
    return time.getTime() < startDate.value.getTime();
  }
};

// 监听开始时间
watch(
  () => startDate.value,
  (val) => {
    if (val) {
      emits("startDate", val);
      endDateDisabled.value = false;
    } else {
      endDate.value = undefined;
      endDateDisabled.value = true;
    }
  },
  { immediate: true }
);

// 监听结束时间
watch(
  () => endDate.value,
  (val) => {
    if (val) {
      emits("endDate", val);
      emits("select", {
        startDate: startDate.value,
        endDate: val
      });
    }
  }
);
</script>

<style lang="scss" scoped>
.select-date-wapper {
  display: flex;
  .date-end {
    margin-left: 15px;
  }
}
</style>

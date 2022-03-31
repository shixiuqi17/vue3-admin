<template>
  <el-card>
    <select-date
      disableBeforeToday
      :startOptions="startOptions"
      :endOptions="startOptions"
      @startDate="startDate"
      @endDate="endDate"
      @select="select"
    ></select-date>
    <div style="margin-top: 30px">
      开始日期：<span v-if="date1">{{ date1 }}</span>
    </div>
    <div style="margin-top: 50px">
      结束日期：<span v-if="date2">{{ date2 }}</span>
    </div>
  </el-card>
</template>

<script lang="ts" setup>
import SelectDate from "@/components/compSecondDev/selectDate/index.vue";
import { ref } from "vue";

let date1 = ref<Date | undefined>(undefined);
let date2 = ref<Date | undefined>(undefined);
const startDate = (date: Date) => {
  date1.value = date;
};
const endDate = (date: Date) => {
  date2.value = date;
};
const select = (date: object) => {
  console.log(date);
};
const startOptions = {
  clearable: true
};
</script>

<style lang="scss" scoped>
.el-card {
  height: 230px;
}
</style>

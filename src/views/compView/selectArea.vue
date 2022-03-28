<template>
  <el-card>
    <SelectArea @change="selectAreaData" />
    <div style="margin-top: 30px">{{ data }}</div>
  </el-card>
</template>

<script lang="ts" setup>
import SelectArea from "@/components/selectArea/index.vue";
import { ref } from "vue";

let data = ref({});
const selectAreaData = (val: object) => {
  data.value = val;
  console.log(val);
};
</script>

<style lang="scss" scoped>
.el-card {
  height: 200px;
}
</style>

<template>
  <el-card>
    <SelectArea @change="selectAreaData" />
    <div v-if="Object.keys(data).length !== 0">
      <h2>已选择内容：</h2>
      <div>
        <div>省：{{ data.province.name }} 编号：{{ data.province.code }}</div>
        <div style="margin-top: 10px">
          市：{{ data.city.name }} 编号：{{ data.city.code }}
        </div>
        <div style="margin-top: 10px">
          区：{{ data.area.name }} 编号：{{ data.area.code }}
        </div>
      </div>
    </div>
  </el-card>
</template>

<script lang="ts" setup>
import SelectArea from "@/components/compSecondDev/selectArea/index.vue";
import { ref } from "vue";

let data = ref({} as any);
const selectAreaData = (val: any) => {
  data.value = val;
  console.log(val);
};
</script>

<style lang="scss" scoped>
.el-card {
  height: 230px;
}
</style>

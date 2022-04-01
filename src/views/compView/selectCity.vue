<template>
  <el-card>
    <SelectCity @choose="choose" />
  </el-card>
</template>

<script lang="ts" setup>
import SelectCity from "@/components/compSecondDev/selectCity/index.vue";

const choose = (val: object) => {
  console.log(val);
};
</script>

<style lang="scss" scoped>
.el-card {
  height: 230px;
}
</style>

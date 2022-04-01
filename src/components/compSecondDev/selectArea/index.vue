<template>
  <div class="select-area-page">
    <!-- 省份 -->
    <el-select :placeholder="$t('selectProvince')" v-model="province" clearable>
      <el-option
        v-for="provice in allAreas"
        :key="provice.code"
        :value="provice.code"
        :label="provice.name"
      ></el-option>
    </el-select>

    <!-- 城市 -->
    <el-select
      :disabled="!province"
      :placeholder="$t('selectCity')"
      v-model="city"
      clearable
    >
      <el-option
        v-for="city in citiesData"
        :key="city.code"
        :value="city.code"
        :label="city.name"
      ></el-option>
    </el-select>

    <!-- 区域 -->
    <el-select
      :disabled="!province || !city"
      :placeholder="$t('selectArea')"
      v-model="area"
      clearable
    >
      <el-option
        v-for="area in areasData"
        :key="area.code"
        :value="area.code"
        :label="area.name"
      ></el-option>
    </el-select>
  </div>
</template>

<script lang="ts" setup>
import { watch, ref } from "vue";
import pca from "./data/pca-code.json";

interface IPcaData {
  code: string;
  name: string;
  children?: { code: string; name: string }[];
}
let allAreas = ref(pca);
let citiesData = ref([] as IPcaData[]);
let areasData = ref([] as IPcaData[] | undefined);
let province = ref<string>("");
let city = ref<string>("");
let area = ref<string>("");

const emits = defineEmits(["change"]);

// 监听省级变化
watch(
  () => province.value,
  (val) => {
    city.value = "";
    area.value = "";

    if (!val) {
      citiesData.value = [];
      return;
    }
    allAreas.value.find((item) => {
      if (item.code === val) {
        citiesData.value = item.children;
      }
    });
  }
);

// 监听市级变化
watch(
  () => city.value,
  (val) => {
    area.value = "";

    if (!val) {
      areasData.value = [];
      return;
    }
    citiesData.value.find((item) => {
      if (item.code === val) {
        areasData.value = item.children;
      }
    });
  }
);

// 监听区域变化，组件传值
watch(
  () => area.value,
  (val) => {
    if (!val) return;

    let provinceData = {
      name: allAreas.value.find((item) => item.code === province.value)?.name,
      code: province.value
    };
    let cityData = {
      name: citiesData.value.find((item) => item.code === city.value)?.name,
      code: city.value
    };
    let areaData = {
      name: areasData.value?.find((item) => item.code === val)?.name,
      code: val
    };
    emits("change", {
      province: provinceData,
      city: cityData,
      area: areaData
    });
  }
);
</script>

<style lang="scss" scoped>
.select-area-page {
  .el-select + .el-select {
    margin-left: 15px;
  }
}
</style>

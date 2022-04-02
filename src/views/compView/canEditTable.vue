<template>
  <el-card>
    <CanEditTable
      stripe
      highlight-current-row
      :data="tableData"
      :options="options"
      @cancel-edit="cancelEdit"
      @confirm-edit="confirmEdit"
    >
      <template #date="{ scope }">
        <el-icon class="mgr-5"><timer /></el-icon>
        <span>{{ scope.row.date }}</span>
      </template>
      <template #name="{ scope }">
        <el-popover effect="light" trigger="hover" placement="top" width="auto">
          <template #default>
            <div>name: {{ scope.row.name }}</div>
            <div>address: {{ scope.row.address }}</div>
          </template>
          <template #reference>
            <el-tag>{{ scope.row.name }}</el-tag>
          </template>
        </el-popover>
      </template>
      <template #action="{ scope }">
        <el-button type="primary" size="small">按钮</el-button>
        <el-button type="danger" size="small">按钮</el-button>
      </template>
    </CanEditTable>
  </el-card>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import CanEditTable from "@/components/compSecondDev/canEditTable/index.vue";
import { TableOptions } from "@/components/compSecondDev/canEditTable/types";
import { Timer } from "@element-plus/icons-vue";

interface TableData {
  date: string;
  name: string;
  address: string;
}

let tableData = ref<TableData[]>([]);
setTimeout(() => {
  tableData.value = [
    {
      date: "2016-05-03",
      name: "Tom",
      address: "No. 189, Grove St, Los Angeles"
    },
    {
      date: "2016-05-02",
      name: "Tom",
      address: "No. 189, Grove St, Los Angeles"
    },
    {
      date: "2016-05-04",
      name: "Tom",
      address: "No. 189, Grove St, Los Angeles"
    },
    {
      date: "2016-05-01",
      name: "Tom",
      address: "No. 189, Grove St, Los Angeles"
    }
  ];
}, 500);

const options: TableOptions[] = [
  {
    label: "日期",
    prop: "date",
    align: "center",
    slot: "date",
    editable: true
  },
  { label: "姓名", prop: "name", align: "center", slot: "name" },
  { label: "地址", prop: "address", align: "center", editable: true },
  { label: "操作", action: true, align: "center" }
];

const cancelEdit = (scope: any) => {
  console.log(scope);
};
const confirmEdit = (scope: any) => {
  console.log(scope);
};
</script>

<style lang="scss" scoped></style>

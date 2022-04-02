<template>
  <el-table
    :data="data"
    v-loading="isLoading"
    class="can-edit-table"
    v-bind="$attrs"
  >
    <template v-for="(item, index) in tableOptions" :key="index">
      <el-table-column
        :label="item.label"
        :prop="item.prop"
        :align="item.align"
        :width="item.width"
      >
        <template #default="scope">
          <!-- 编辑数据-->
          <template v-if="showEditItem(scope)">
            <!-- @blur="editInputChange($event, scope, 'blur')" -->
            <div class="edit-item">
              <el-input
                v-model="scope.row[item.prop!]"
                @change="editInputChange($event, scope, 'change')"
                @keyup.enter="editInputChange($event, scope, 'keyup')"
              ></el-input>
              <el-icon color="#008000" @click="confirmEdit(scope)"
                ><Check
              /></el-icon>
              <!-- <el-icon color="#ff0000" @click="cancelEdit(scope)"
                ><Close
              /></el-icon> -->
            </div>
          </template>

          <!-- 展示数据 -->
          <template v-else>
            <div class="flex-align-center">
              <slot v-if="item.slot" :name="item.slot" :scope="scope"></slot>
              <span v-else>{{ scope.row[item.prop!] }} </span>
              <el-icon
                v-if="item.editable"
                class="edit-icon"
                @click="clickEditIcon(scope, item.prop)"
                ><edit
              /></el-icon>
            </div>
          </template>
        </template>
      </el-table-column>
    </template>
    <el-table-column
      :label="actionOptions?.label"
      :align="actionOptions?.align"
      :width="actionOptions?.width"
    >
      <template #default="scope">
        <slot name="action" :scope="scope"></slot>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import { computed, PropType, ref } from "vue";
import { Edit, Check } from "@element-plus/icons-vue";
import { TableOptions } from "./types";
import _ from "lodash";

const emits = defineEmits(["confirmEdit", "cancelEdit"]);

const props = defineProps({
  options: {
    type: Array as PropType<TableOptions[]>,
    required: true
  },
  data: {
    type: Array as PropType<any[]>,
    required: true
  }
});

// 表格数据项
const tableOptions = computed(() =>
  props.options.filter((item) => !item.action)
);

// 表格操作项
const actionOptions = computed(() => props.options.find((item) => item.action));

// 表格加载中
const isLoading = computed(() => !props.data || !props.data.length);

//编辑列表项
let currentEditIndex = ref("");
let currentEditItem = ref("");
const clickEditIcon = (scope: any, item: any) => {
  currentEditItem.value = scope.row[item];
  // 编辑列的唯一标识
  currentEditIndex.value = scope.$index + scope.column.id;
};

// 显示编辑项
const showEditItem = (scope: any) => {
  return scope.$index + scope.column.id === currentEditIndex.value;
};

// 编辑input变化
const editInputChange = (e: any, scope: any, event: string) => {
  if (event === "change") {
    emitConfirmEdit.value = e !== currentEditItem.value;
  } else if (event === "blur") {
    emitConfirmEdit.value = e.target.value !== currentEditItem.value;
  }

  confirmEdit(scope);
};

// 确认编辑
let emitConfirmEdit = ref(false);
const confirmEdit = (scope: any) => {
  currentEditIndex.value = "";
  if (!emitConfirmEdit.value) return;
  emits("confirmEdit", scope);
  emitConfirmEdit.value = false;
};

// 取消编辑
const cancelEdit = (scope: any) => {
  currentEditIndex.value = "";
  emits("cancelEdit", scope);
};
</script>

<style lang="scss" scoped>
.can-edit-table {
  :deep(.cell) {
    display: inline-block;
  }
  .edit-icon {
    margin-left: 5px;
    cursor: pointer;
  }
  .edit-item {
    display: flex;
    align-items: center;
    .el-icon {
      margin-left: 7px;
      cursor: pointer;
    }
  }
}
</style>

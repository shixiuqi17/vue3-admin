<template>
  <ToastEditor
    v-model="content"
    :height="300"
    placeholder="请输入markdown内容"
  />
  <div>{{ content }}</div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import ToastEditor from "@/components/markdown/ToastEditor/index.vue";

const content = ref("初始内容");
</script>

<style lang="scss" scoped>
#editor {
  background-color: #fff;
}
</style>

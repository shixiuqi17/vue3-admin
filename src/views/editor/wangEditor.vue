<template>
  <WangEditor v-model="content" :height="300" />
  <div v-html="content"></div>
</template>

<script lang="ts" setup>
import WangEditor from "@/components/markdown/wangEditor/index.vue";
import { ref } from "vue";

const content = ref("初始内容");
</script>

<style lang="scss" scoped></style>

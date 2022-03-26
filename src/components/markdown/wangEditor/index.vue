<template>
  <div id="editor"></div>
</template>

<script lang="ts" setup>
import { nextTick } from "vue";
import wangEditor from ".";

interface IProps {
  modelValue?: string;
  height?: number;
}
const props = withDefaults(defineProps<IProps>(), {
  modelValue: "",
  height: 300
});
const emit = defineEmits(["update:modelValue"]);
nextTick(() => new wangEditor("#editor", editorChange, props));
const editorChange = (newHTML: string) => {
  emit("update:modelValue", newHTML);
};
</script>

<style lang="scss" scoped></style>

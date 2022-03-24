<template>
  <div id="editor"></div>
</template>

<script lang="ts" setup>
import { nextTick } from "vue";
import ToastEditor from ".";

interface IProps {
  modelValue?: string;
  height?: number;
  placeholder?: string;
}
const props = withDefaults(defineProps<IProps>(), {
  modelValue: "",
  height: 500,
  placeholder: ""
});

const emit = defineEmits(["update:modelValue"]);

// 初始化编辑器
nextTick(() => {
  const toastui = new ToastEditor(
    "#editor",
    props.modelValue,
    `${props.height}px`
  );
  toastui.editor.on("change", (type: string) => {
    emit(
      "update:modelValue",
      toastui.editor[type == "markdown" ? "getMarkdown" : "getHTML"]()
    );
  });
});
</script>

<style lang="scss" scoped></style>

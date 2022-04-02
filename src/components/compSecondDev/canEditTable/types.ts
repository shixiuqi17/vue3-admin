export interface TableOptions {
  label: string; //表头
  prop?: string; //字段名称
  width?: string | number; //列宽度
  align?: "left" | "center" | "right"; //对齐方式
  slot?: string; //自定义列表模板名称
  action?: boolean; // 定义为按钮操作列
  editable?: boolean; //是否可编辑
}

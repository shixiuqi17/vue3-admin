export default class {
  editor: wangEditor;
  constructor(el: string, callback: Function, config: { [key: string]: any }) {
    this.editor = new wangEditor(el);
    this.editor.config.height = config.height;
    this.editor.config.onchange = callback;
    this.editor.create();
    this.editor.txt.html(config.modelValue);
  }
}

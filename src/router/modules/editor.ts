import { RouteRecordRaw } from "vue-router";

const editorPage = [
  // 富文本编辑器
  {
    path: "/editor",
    name: "editor",
    meta: {
      authentication: true,
      menu: {
        title: "编辑器",
        icon: "icon-fuwenbenbianjiqi_ziti"
      }
    },
    component: () => import("@/layouts/admin.vue"),
    children: [
      {
        path: "toastEditor",
        name: "toastEditor",
        meta: { menu: { title: "toast-ui-editor" } },
        component: () => import("@/views/editor/toastEditor.vue")
      },
      {
        path: "wangEditor",
        name: "wangEditor",
        meta: { menu: { title: "wang-editor" } },
        component: () => import("@/views/editor/wangEditor.vue")
      }
    ]
  }
] as RouteRecordRaw[];
export default editorPage;

import { RouteRecordRaw } from "vue-router";

const editorPage = [
  // 富文本编辑器
  {
    path: "/editor",
    name: "editor",
    meta: {
      authentication: true,
      menu: {
        title: "富文本编辑器",
        icon: "icon-fuwenbenbianjiqi_ziti"
      }
    },
    component: () => import("@/layouts/admin.vue"),
    children: [
      {
        path: "markDown",
        name: "markdown",
        meta: { menu: { title: "富文本编辑器" } },
        component: () => import("@/views/editor/index.vue")
      },
      {
        path: "cat",
        name: "cat",
        meta: { menu: { title: "毛毛毛" } },
        component: () => import("@/components/svg/cat.vue")
      }
    ]
  }
] as RouteRecordRaw[];
export default editorPage;

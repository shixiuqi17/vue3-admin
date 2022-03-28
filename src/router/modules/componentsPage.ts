import { RouteRecordRaw } from "vue-router";

// 二次封装组件展示页面
const componentsPage = [
  // 级联选择器 - 省市区选择
  {
    path: "/selectArea",
    name: "cascader",
    meta: {
      menu: { title: "级联选择器", icon: "icon-cascader" }
    },
    component: () => import("@/layouts/admin.vue"),
    children: [
      {
        path: "",
        name: "selectArea",
        meta: { menu: { title: "省市区选择器" } },
        component: () => import("@/views/compView/selectArea.vue")
      }
    ]
  }
] as RouteRecordRaw[];
export default componentsPage;

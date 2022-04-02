import { RouteRecordRaw } from "vue-router";

// 二次封装组件展示页面
const componentsPage = [
  // 级联选择器 - 省市区选择
  {
    path: "/component",
    name: "component",
    meta: {
      menu: { title: "组件库二次封装", icon: "icon-kaifazujian" }
    },
    component: () => import("@/layouts/admin.vue"),
    children: [
      {
        path: "/selectArea",
        name: "selectArea",
        meta: { menu: { title: "省市区三级联动" } },
        component: () => import("@/views/compView/selectArea.vue")
      },
      {
        path: "/selectDate",
        name: "selectDate",
        meta: { menu: { title: "日期选择器" } },
        component: () => import("@/views/compView/selectDate.vue")
      },
      {
        path: "/selectCity",
        name: "selectCity",
        meta: { menu: { title: "城市选择器" } },
        component: () => import("@/views/compView/selectCity.vue")
      },
      {
        path: "/canEditTable",
        name: "canEditTable",
        meta: { menu: { title: "可编辑表单" } },
        component: () => import("@/views/compView/canEditTable.vue")
      }
    ]
  }
] as RouteRecordRaw[];
export default componentsPage;

import Layout from "@/layout";

export default {
  path: "/table",
  component: Layout,
  children: [
    {
      path: "ratable",
      name: "Table",
      component: () => import("@/views/table"),
      meta: { title: "表格", icon: "el-icon-s-grid", roles: ["admin"] },
    },
  ],
};

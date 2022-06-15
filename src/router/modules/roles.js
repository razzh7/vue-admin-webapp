import Layout from "@/layout";

export default {
  path: "/permission",
  component: Layout,
  children: [
    {
      path: "assign",
      name: "Assign",
      component: () => import("@/views/permission"),
      meta: { title: "权限分配", icon: "el-icon-lock", roles: ["admin"] },
    },
  ],
};

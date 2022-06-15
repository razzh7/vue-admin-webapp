import Layout from "@/layout";

export default {
  path: "/test",
  component: Layout,
  children: [
    {
      path: "index",
      name: "Test",
      component: () => import("@/views/routertest"),
      meta: { title: "测试单元", icon: "el-icon-s-promotion", affix: true },
    },
  ],
};

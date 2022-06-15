import Layout from "@/layout";

export default {
  path: "/github", // path中不加/相当于父组件路径/https://github.com/rzhAvenir
  component: Layout,
  children: [
    {
      path: "https://github.com/rzhAvenir",
      meta: { title: "Me", icon: "el-icon-info" },
    },
  ],
};

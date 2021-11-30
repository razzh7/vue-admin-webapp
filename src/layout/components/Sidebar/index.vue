<template>
  <div>
    <el-scrollbar class="scrollbar-wrapper">
      <el-menu
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import SidebarItem from "./SidebarItem"
export default {
  data() {
    return {};
  },
  components: { SidebarItem },
  computed: {
    ...mapGetters(['sidebar']),
    isCollapse() {
      return !this.sidebar.opened
    },
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
  },
};
</script>

<style>
.scrollbar-wrapper {
    overflow-x: hidden !important;
  }
</style>
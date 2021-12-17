<template>
  <div class="app-wrapper" :class="classObj">
    <div :class="{ 'drawer-bg': sidebar.opened && classObj.mobile }" @click="toggleSidebar"></div>
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <div class="nav-header">
        <navbar />
        <view-tags />
      </div>
      <page-main />
    </div>
  </div>
</template>

<script>
import { Navbar, Sidebar, PageMain, ViewTags } from "./components"
import { mapGetters } from "vuex"
import ResizeMixins from "./mixin/ResizeHandler"

export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar,
    PageMain,
    ViewTags
  },
  mixins: [ResizeMixins],
  computed: {
    ...mapGetters(['sidebar', 'device']),
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        mobile: this.device === 'mobile' ? true : false,
        withoutAnimation: this.sidebar.withoutAnimation
      }
    }
  },
  methods: {
    toggleSidebar() {
      this.$store.dispatch('app/closeSidebar', { withoutAnimation: false }) // 移动端切换菜单栏时，开启动画
    }
  }

}
</script>

<style lang="scss">
.app-wrapper {
  width: 100%;
  height: 100%;
}
.drawer-bg {
  background-color: #000;
  opacity: .3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 998;
}
</style>
<template>
  <div class="app-wrapper" :class="classObj">
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <navbar />
      <page-main />
    </div>
  </div>
</template>

<script>
import { Navbar, Sidebar, PageMain } from "./components"
import { mapGetters } from "vuex"
export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar,
    PageMain
  },
  computed: {
    ...mapGetters(['sidebar']),
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened
      }
    }
  }

}
</script>

<style lang="scss">
.app-wrapper {
  width: 100%;
  height: 100%;
}
</style>
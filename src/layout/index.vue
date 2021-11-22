<template>
  <div class="app-wrapper">
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <navbar />
      <page-main />
    </div>
  </div>
</template>

<script>
import { Navbar, Sidebar, PageMain } from "./components"
export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar,
    PageMain
  }
}
</script>

<style lang="scss">
.app-wrapper {
  width: 100%;
  height: 100%;
}
</style>
<template>
  <div :class="{'has-logo': showLogo }">
    <logo :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="this.$route.path"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :active-text-color="variables.menuActiveText"
        :unique-opened="false"
        :collapse="isCollapse"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item v-for="route in permission_routes" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
import Logo from './Logo.vue'
import variables from '@/styles/variables.scss'

export default {
  components: { SidebarItem, Logo },
  computed: {
    ...mapGetters(['sidebar', 'showLogo', 'permission_routes']),
    isCollapse() {
      return !this.sidebar.opened
    },
    // routes() { // 获取路由表
    //    return this.$router.options.routes // Vue router首次初始化添加的routes信息，addRoute的路由信息不回添加到这里
    // },
    variables() {
      return variables
    },
  },
}
</script>

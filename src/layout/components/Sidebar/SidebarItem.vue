<template>
  <div class="sidebar-item">
    <template v-if="isOnlyChild(item.children, item) && !item.hidden">
      <!-- page-link的作用在于区分外链和内部path -->
      <!-- 详见路由文件中的Github -->
      <page-link :to="resolvePath(onlyOneChild.path)">
        <el-menu-item>{{ onlyOneChild.meta.title }}</el-menu-item>
      </page-link>
      <!-- <router-link :to="resolvePath(onlyOneChild.path)">
        <el-menu-item>{{ onlyOneChild.meta.title }}</el-menu-item>
      </router-link> -->
    </template>
  </div>
</template>

<script>
import { isExternal } from "@/utils/validate"
import PageLink from "./Link"
import path from "path"

export default {
   name: 'SidebarItem',
   components: { PageLink },
   props: {
     item: {
       type: Object,
       default: {}
     },
     basePath: String,
     default: ''
   },
   data() {
     return {
       onlyOneChild: null
     }
   },
   methods: {
     isOnlyChild(children = [], parent) {
       
       const showChildren = children.filter(child => {
         if (child.hidden) { // 过滤路由，查看子路由个数
           return false
         } else {
           return true
         }
       })

       if (showChildren.length === 1) {
         this.onlyOneChild = showChildren[0]
         return true
       }
       if (showChildren.length === 0) { // 说明只有路由只有一层
          this.onlyOneChild = { ...parent }
          return true
       }
        return false
     },
     resolvePath(routePath) {
       if (isExternal(routePath)) {
         console.log(77,routePath)
         return routePath
       }

       return path.resolve(this.basePath, routePath)
     }
   }
}
</script>

<style>

</style>
<template>
  <div class="page-main">
    <transition name="fade-transform" mode="out-in">
      <!-- 添加key解决多级菜单切换时无动画的问题 -->
      <router-view :key="this.$route.path"></router-view>
    </transition>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.page-main {
  min-height: calc(100vh - 50px);
}
</style>
<template>
  <div class="logo" v-show="true">
  <transition name="sidebarLogoFade">
    <router-link  v-if="collapse" key="collapse" class="img-container" to="/">
      <img :src="logo" alt="Vue-admin">
      <span class="logo-title">{{ logoTitle }}</span>
    </router-link>
    <router-link  v-if="!collapse" key="expend" class="img-container" to="/">
      <img :src="logo" alt="Vue-admin">
      <span class="logo-title">{{ logoTitle }}</span>
    </router-link>
  </transition>
  </div>
</template>

<script>
import logo from '../../../assets/logo/logo.png'
export default {
  data() {
    return {
      logoTitle: 'Vue Admin WebApp',
      logo: logo
    }
  },
  props: {
    collapse: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.sidebarLogoFade-enter-active {
  transition: opacity 1.5s;
}

.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
  opacity: 0;
}

.logo {
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  // border-bottom: 1px dashed #ccc;
  background-color: #2b2f3a;
  overflow: hidden;
  .img-container {
    width: 100%;
    height: 100%;

    img {
      width: 32px;
      height: 32px;
      vertical-align: middle;
    }

    .logo-title {
      display: inline-block;
      // margin: 0;
      margin-left: 10px;
      color: #fff;
      font-weight: 700;
      line-height: 50px;
      font-size: 14px;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
    }
  }
}
</style>
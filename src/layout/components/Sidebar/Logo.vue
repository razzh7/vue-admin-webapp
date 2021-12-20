<template>
  <div class="logo" v-show="true">
    <div class="img-container">
      <img src="../../../assets/logo/logo.png" alt="Vue-admin">
      <span class="logo-name">Vue-admin-razzh</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.logo {
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-bottom: 1px dashed #ccc;
  background-color: #021423;
  overflow: hidden;
  .img-container {
    height: 30px;
    img {
      height: 100%;
      vertical-align: middle;
    }
    .logo-name {
      display: inline-block;
      margin: 0;
      color: #fff;
      font-weight: 600;
      line-height: 50px;
      font-size: 14px;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
    }
  }
}
</style>
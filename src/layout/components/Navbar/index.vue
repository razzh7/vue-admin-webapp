<template>
  <div class="navbar">
    <hamburger @toggleClick="toggleClick" :is-active="sidebar.open"/>
  </div>
</template>

<script>
import Hamburger from "@/components/Hamburger"
import { mapGetters } from "vuex"
export default {
  components: {
    Hamburger
  },
  computed: {
    ...mapGetters(['sidebar'])
  },
  methods: {
    toggleClick() {
      this.$store.dispatch('app/toggleSideBar');
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
 height: 50px;
 background: #fff;
 box-shadow: 0 1px 4px rgba(0,21,41,.08);
}
</style>
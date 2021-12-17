<template>
  <div class="view-tags">
    <router-link
    v-for="tag in viewTags"
    :key="tag.path"
    :to="{path: tag.path }"
    tag="span"
    class="view-tags-item"
    :class="isActive(tag)?'active':''">
      {{ tag.title }}
      <span class="el-icon-close" v-if="tag.path !== '/dashboard'" @click.stop="romveTag(tag)"></span>
      <!-- stop 禁止冒泡关闭按钮的冒泡事件,从而冒泡到router-link触发addTags -->
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import path from 'path'
export default {
  watch: {
    $route() {
      this.addTags()
    }
  },
  mounted() {
    this.initTags()
    this.addTags()
  },
  computed: {
    ...mapGetters(['view_tags', 'permission_routes']),
    viewTags() {
      return this.view_tags
    },
    routes() {
      return this.permission_routes
    }
  },
  methods: {
    href(tag) {
      return tag.path
    },
    addTags() { // 添加tags
      this.$store.dispatch('viewtags/addTags', this.$route)
    },
    isActive(route) { // 选择激活tags
      return route.path === this.$route.path
    },
    romveTag(tag) { // 删除某项tags
    console.log('I am tag',tag)
      this.$store.dispatch('viewtags/removeTag', tag)
    },
    initTags() { // 初始化路由
      const routes = this.routes
      const affixTags = this.filterTags(routes)

      affixTags.forEach(r => {
        if (r.title) {
          this.$store.dispatch('viewtags/addTags', r)
        }
      })
    },
    filterTags(routes, basePath='/') {
      let tags = []
      routes.forEach(r => {
        if (r.meta && r.meta.affix) {
          const tagPath = path.resolve(basePath, r.path)
          tags.push({
            fullPath: tagPath,
            path: tagPath,
            title: r.meta.title,
            meta: { ...r.meta }
          })
        }

        if (r.children) {
          let affixTag = this.filterTags(r.children, r.path)
          tags = [...tags, ...affixTag]
        }
      })

      return tags
    }
  }
}
</script>

<style lang="scss" scoped>
.view-tags {
  height: 34px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .12), 0 0 3px 0 rgba(0, 0, 0, .04);

  .view-tags-item {
    display: inline-block;
    box-sizing: border-box;
    position: relative;
    cursor: pointer;
    height: 26px;
    line-height: 26px;
    border: 1px solid #d8dce5;
    color: #495060;
    background-color: #fff;
    padding: 0 8px;
    font-size: 12px;
    margin-left: 5px;
    margin-top: 4px;
    
    &:first-of-type {
      margin-left: 15px;
    }
    &:last-of-type {
      margin-right: 15px;
    }
    &.active {
      background-color: #42b983;
      color: #fff;
      border-color: #42b983;
      &::before {
        content: '';
        background: #fff;
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        position: relative;
        margin-right: 2px;
      }
    }

    .el-icon-close {
      position: relative;
      z-index: 9;
      width: 16px;
      height: 16px;
      line-height: 16px;
      text-align: center;
      border-radius: 50%;
      transition: all .3s cubic-bezier(0.645, 0.045, 0.355, 1);
      &:hover {
        background-color: #b4bccc;
        color: #fff;
      }
      &::before {
        display: inline-block;
        transform: scale(.6);
      }
    }
  }
}
</style>
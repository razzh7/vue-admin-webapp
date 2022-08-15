<template>
  <div class="costom-search">
    <el-input
      v-for="(item, index) in nums"
      :key="index"
      :placeholder="item.pher"
      v-model="input[item.modelName]"
      :maxlength="item.length"
      :clearable="clearable"
      :style="styles"
    >
    </el-input>
    <slot name="costom"></slot>
    <el-button :size="btnSize" icon="el-icon-search" plain type="primary" @click="submit">
      搜索
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'TopSearch',
  props: {
    nums: {
      type: Array,
      default: () => [],
    },
    btnSize: {
      type: String,
      default: 'medium',
    },
    clearable: {
      type: Boolean,
      default: true,
    },
    styles: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      input: {},
    }
  },
  methods: {
    submit() {
      this.$emit('search', this.input)
    },
  },
}
</script>

<style lang="scss" scoped>
.costom-search {
  display: flex;
  align-content: center;
}
.el-input {
  width: 200px;
  margin-right: 30px;
}
</style>

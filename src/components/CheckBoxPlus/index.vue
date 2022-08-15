<template>
  <el-checkbox-group
    v-bind="$attrs"
    v-on="$listeners"
    v-model="checkList"
    @change="$emit('change', checkList)"
  >
    <el-checkbox v-for="(item, key) in mapList" :key="key" :label="item.dictValue" :border="border">
      {{ item.dictLabel }}
    </el-checkbox>
  </el-checkbox-group>
</template>

<script>
export default {
  name: 'CheckBoxPlus',
  data() {
    return {
      checkList: [],
      mapList: [],
    }
  },
  watch: {
    editData(n, o) {
      if (n !== o) {
        this.checkList = n
      }
    },
  },
  props: {
    editData: {
      type: Array,
      default: () => [],
    },
    mapType: {
      type: String,
      default: '',
    },
    border: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    this.fetchMap()
  },
  methods: {
    async fetchMap() {
      if (!this.mapType) return
      const { rows } = await this.$http.map(this.mapType)
      this.mapList = rows
      if (this.editData.length > 0) {
        this.checkList = this.editData
      }
    },
  },
}
</script>

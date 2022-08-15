<template>
  <el-select
    v-bind="$attrs"
    v-on="$listeners"
    v-model="value"
    :loading="loading"
    :loading-text="loadingText"
    :placeholder="placeholder"
    @change="$emit('change', value)"
    @visible-change="fetchMap"
  >
    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
import { matchMap } from '@/utils/tools'
export default {
  name: 'SelectPlus',
  props: {
    isEdit: {
      type: Boolean,
      default: false,
    },
    mapType: {
      type: String,
      default: '',
    },
    loadingText: {
      type: String,
      default: '正在加载中...',
    },
    placeholder: {
      type: String,
      default: '请选择',
    },
  },
  data() {
    return {
      loading: true,
      value: '',
      options: [],
    }
  },
  mounted() {
    if (this.isEdit) {
      this.mapEditData()
    }
  },
  methods: {
    async fetchMap() {
      if (!this.mapType) return
      if (this.options.length > 0) return
      const { rows } = await this.$http.map(this.mapType)

      if (rows.length > 0) {
        this.options = this.handleSelectMap(rows)

        this.$nextTick(() => {
          this.loading = false
        })
      }
    },
    handleSelectMap(data) {
      const options = []
      data.forEach(v => {
        const dictLabel = matchMap(data, v.dictValue)
        if (dictLabel) {
          options.push({
            label: dictLabel,
            value: v.dictValue,
          })
        }
      })
      return options
    },
    async mapEditData() {
      const { rows } = await this.$http.map(this.mapType)

      if (rows.length > 0) {
        this.handleEditData(rows)
      }
    },
    handleEditData(data) {
      data.forEach(v => {
        const dictLabel = matchMap(data, v.dictValue)
        if (dictLabel) {
          this.value = dictLabel
        }
      })
    },
  },
}
</script>

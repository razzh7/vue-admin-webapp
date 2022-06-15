const path = require('path')
const fs = require('fs')
console.log('🚀 Start...')

const TargetFile = process.argv[2]
const PageName = process.argv[3]
const MenuName = process.argv[4]
console.log('目标文件----', process.argv[2])
console.log('页面标题----', process.argv[3])
const PAGE_TEMPALTE = `<template>
  <div>${MenuName}</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>
`
try {
  fs.statSync(path.join(__dirname, `../src/views/${TargetFile}/${PageName}.vue`))
} catch (e) {
  fs.writeFileSync(path.join(__dirname, `../src/views/${TargetFile}/${PageName}.vue`), PAGE_TEMPALTE)
}

process.on('exit', () => {
  console.log('✨done')
})

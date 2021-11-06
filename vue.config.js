const path = require('path');
const resolve = function(dir) {
  return path.join(__dirname, dir);
}
console.log('config',process.env.VUE_APP_BASE_API)
module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('views', resolve('src/views'))
  },
}
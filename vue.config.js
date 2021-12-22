const path = require('path');
const resolve = function(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  publicPath: '/',
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('views', resolve('src/views'))
  },
}
// const files = require.context('./modules', false, /\.js$/);
// console.dir(files);

// files.keys().forEach(key => {
//   // if(key === './index.js') return;
//   // console.log(files(key).default)
//   // console.log(8,files(key))
//   // configRouters = configRouters.concat(files(key).default)
// })
// // console.log(configRouters)
// // console.log(11,files.keys())
// const obj = files(files.keys()[1]);
// console.log(12,obj)
// // console.log(13,files.keys()[1])
// const cache = {};
const path = require('path')
const files = require.context('./modules', false, /\.js$/)
let modules = {};
// function importAll(r) {
//   r.keys().forEach((key) => (cache[key] = r(key)));
// }

// importAll(require.context('./modules', false, /\.js$/));
files.keys().forEach(key => {
  let name = path.basename(key, '.js')
  modules[name] = files(key).default || files(key)
})
console.log(28,files(files.keys()[0]))
console.log(29,files(files.keys()[0]).default)
console.log(modules)
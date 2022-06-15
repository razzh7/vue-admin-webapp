console.log("目标文件----", process.argv[2]);
console.log("页面标题----", process.argv[3]);
console.log("icon----", process.argv[4]);
console.log("🚀 Start...");
const path = require("path");
const fs = require("fs");
const fileSave = require("file-save");
function findDir(value) {
  return path.join(__dirname, value);
}

const filesName = [];
const TargetFile = process.argv[2];
const MenuName = process.argv[3];
const MenuIcon = process.argv[4];
let PageName = [];
const files = fs.readdirSync(findDir(`../src/views/${TargetFile}`));
const FilesLength = files.length;
let Code = "";
let SubMenu = "";

function strToUpperCase(str) {
  return str.toLowerCase().replace(/(^)[a-z]/g, (c) => c.toUpperCase());
}

// 逐个导入子菜单
files.forEach((file) => {
  const name = path.basename(file, ".vue");
  // 捕获子菜单标题
  fs.readFileSync(
    findDir(`../src/views/${TargetFile}/${file}`),
    "utf-8"
  ).replace(/(?<=>).*?(?=<)/, function (c) {
    const name = c.trim();
    PageName.push(name);
    console.log("页面标题名字----", c.trim());
  });
  filesName.push(name);
  Code += `import ${strToUpperCase(
    name
  )} from '@/views/${TargetFile}/${name}'\n`;
});

// 子菜单Children信息
for (let i = 0; i < FilesLength; i++) {
  SubMenu += `{
      path: '${filesName[i]}',
      name: ${strToUpperCase(filesName[i])},
      component: ${strToUpperCase(filesName[i])},
      meta: {
        title: '${PageName[i]}',
        roles: ['admin'],
      },
    },`;
}

// 主模版
const MAIN_TEMPALTE = `
import Layout from '@/layout'
${Code}

export default {
  path: '/${TargetFile}',
  component: Layout,
  meta: { title: '${MenuName}', icon: '${MenuIcon}' },
  children: [${SubMenu}]
}
`;

fileSave(findDir(`../src/router/modules/${TargetFile}.js`))
  .write(MAIN_TEMPALTE, "utf8")
  .end("\n");

process.on("exit", () => {
  console.log("✨done");
});

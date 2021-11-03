# vue-admin-razzh

个人后台模版搭建中

借鉴：

+ https://github.com/PanJiaChen/vue-element-admin

+ https://github.com/gcddblue/vue-admin-webapp

## 从中学到了什么

require.context: 检索指定文件夹下的所有文件

+ Params1 要检索的目录
+ Params2 是否递归目录中的子文件夹
+ Params3 检索文件的条件，筛选以什么后缀结尾的文件
+ 返回值： function 项目中以files变量命名
  + 函数下的属性方法：
  + keys(Params1)  返回一个以检索文件相对该文件夹的相对路径
  + Params1: 传入相对路径返回检索文件的导出模块
    + files.keys(files.keys()[index])


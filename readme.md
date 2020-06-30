##### 一个库构建完后的一般产物
- 一个 CommonJS 格式的 js 文件
- 一个未压缩的 UMD 格式的 js 文件
- 一个已压缩的 UMD 格式的 js 文件
- 可能包括若干的 css 文件
- 可能包括若干的其它资源文件

##### 模块化支持
- IIFE
- Common.js （服务端）
 - node.js
- AMD （浏览器端）
 - RequireJS
- CMD （浏览器端）
 - SeaJS
- ES6 Module （两端）

#### rollup构建js库

#### pkg.module
- pkg.main pkg.main 字段指向的是编译后生成的 ES5 版本的代码
- pkg.module 字段要指向的是一个基于 ES6 模块规范的使用ES5语法书写的模块
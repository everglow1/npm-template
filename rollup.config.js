import json from 'rollup-plugin-json';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import sourceMaps from 'rollup-plugin-sourcemaps';
const pkg = require('./package.json')

export default {
  input: 'src/main.js',
  output: [
    { file: pkg.main, name: pkg.name, format: 'umd', sourcemap: true },
    { file: pkg.module, format: 'es', sourcemap: true }
  ],
  plugins: [
    commonjs(),
    json(),
    resolve({
      // 将自定义选项传递给解析插件
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    }),
    babel({
      exclude: 'node_modules/**' // 只编译源代码
    }),
    sourceMaps()
  ],
  // 指出应将哪些模块视为外部模块
  external: ['lodash']
}
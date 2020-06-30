import { version } from '../package.json';
const test = require('./foo')
const fs = require('fs')
export default function () {
  console.log('version' + version);
  console.log('test:', test)
  console.log('fs:', fs)
}
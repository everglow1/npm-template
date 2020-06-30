'use strict';

var version = "0.0.1";

const test = require('./foo');
const fs = require('fs');
function main () {
  console.log('version' + version);
  console.log('test:', test);
  console.log('fs:', fs);
}

module.exports = main;

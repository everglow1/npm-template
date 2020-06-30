'use strict';

require('lodash');

var version = "0.0.1";

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var Point = function () {
  function Point() {
    classCallCheck(this, Point);
  }

  createClass(Point, [{
    key: "test1",
    value: function test1() {
      console.log(1111);
    }
  }, {
    key: "test2",
    value: function test2() {
      console.log(2222);
    }
  }]);
  return Point;
}();

var index = 42;

function mainTest() {
  console.log('version' + version);
  console.log('test:', test);
  var point = new Point();
  console.log(point);
  console.log('answer' + index);
}

module.exports = mainTest;

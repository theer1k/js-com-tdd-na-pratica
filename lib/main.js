'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var sum = function sum(num1, num2) {
  return num1 + num2;
};

var div = function div(num1, num2) {
  if (num1 === 0 || num2 === 0) {
    return 'not possible divide by 0';
  }

  return num1 / num2;
};

var sub = function sub(num1, num2) {
  return num1 - num2;
};

var mult = function mult(num1, num2) {
  return num1 * num2;
};

exports.sum = sum;
exports.sub = sub;
exports.mult = mult;
exports.div = div;
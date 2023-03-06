(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.RollupTsTemplate = {}));
})(this, (function (exports) { 'use strict';

	function add(a, b) {
	  return a + b;
	}
	function minus(a, b) {
	  return a - b;
	}
	function multiply(a, b) {
	  return a * b;
	}
	function divide(a, b) {
	  return a / b;
	}

	function hello() {
	  console.log('hello');
	}

	exports.add = add;
	exports.divide = divide;
	exports.hello = hello;
	exports.minus = minus;
	exports.multiply = multiply;

}));

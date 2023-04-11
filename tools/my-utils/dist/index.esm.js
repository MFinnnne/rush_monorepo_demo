import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _defineProperty from '@babel/runtime/helpers/defineProperty';

var Vector = /*#__PURE__*/function () {
  function Vector() {
    var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    _classCallCheck(this, Vector);
    _defineProperty(this, "list", void 0);
    _defineProperty(this, "len", this.getDimension());
    this.list = list;
  }
  _createClass(Vector, [{
    key: "getDimension",
    value: function getDimension() {
      return this.list.length;
    }
  }, {
    key: "getItem",
    value: function getItem(index) {
      return this.list[index];
    }
  }, {
    key: "add",
    value: function add(another) {
      if (this.getDimension() === another.getDimension()) {
        var finalList = [];
        for (var i = 0; i < this.getDimension(); i++) {
          finalList.push(this.getItem(i) + another.getItem(i));
        }
        return new Vector(finalList);
      } else {
        return '维度不相等，无法进行加法运算';
      }
    }
  }, {
    key: "sub",
    value: function sub(another) {
      if (this.getDimension() === another.getDimension()) {
        var finalList = [];
        for (var i = 0; i < this.getDimension(); i++) {
          finalList.push(this.getItem(i) - another.getItem(i));
        }
        return new Vector(finalList);
      } else {
        return '维度不相等，无法进行减法运算';
      }
    }
  }, {
    key: "mul",
    value: function mul(K) {
      var finalList = [];
      for (var i = 0; i < this.getDimension(); i++) {
        finalList.push(this.getItem(i) * K);
      }
      return new Vector(finalList);
    }
  }, {
    key: "pos",
    value: function pos() {
      return this.mul(1);
    }
  }, {
    key: "neg",
    value: function neg() {
      return this.mul(-1);
    }
  }, {
    key: "norm",
    value: function norm() {
      var sum = 0;
      for (var i = 0; i < this.getDimension(); i++) {
        sum += Math.pow(this.getItem(i), 2);
      }
      return Math.sqrt(sum);
    }
  }, {
    key: "normalize",
    value: function normalize() {
      var finalList = [];
      var norm = this.norm();
      if (norm === 0) {
        throw '向量的模不能为0';
      }
      for (var i = 0; i < this.getDimension(); i++) {
        finalList.push(this.getItem(i) / norm);
      }
      return new Vector(finalList);
    }
  }, {
    key: "dotMul",
    value: function dotMul(another) {
      if (another.getDimension() === this.getDimension()) {
        var _final = 0;
        for (var i = 0; i < this.getDimension(); i++) {
          _final += this.getItem(i) * another.getItem(i);
        }
        return _final;
      } else {
        console.log('两个向量点乘时其维度必须相等');
      }
    }
  }, {
    key: "toStr",
    value: function toStr() {
      var str = "";
      for (var i = 0; i < this.list.length; i++) {
        if (i !== this.list.length - 1) {
          str += "".concat(this.list[i], ",");
        } else {
          str += this.list[i];
        }
      }
      return "Vector(".concat(str, ")");
    }
  }], [{
    key: "zero",
    value: function zero(dim) {
      return new Vector(new Array(dim).fill(0));
    }
  }]);
  return Vector;
}();
var Matrix = /*#__PURE__*/function () {
  function Matrix(twoDimArray) {
    var _this = this;
    _classCallCheck(this, Matrix);
    _defineProperty(this, "twoDimArray", void 0);
    _defineProperty(this, "len", function () {
      return _this.getRowNum();
    });
    this.twoDimArray = twoDimArray;
    console.log('我改动了这里');
  }
  _createClass(Matrix, [{
    key: "shape",
    value: function shape() {
      return [this.twoDimArray.length, this.twoDimArray[0].length];
    }
  }, {
    key: "getRowNum",
    value: function getRowNum() {
      return this.shape()[0];
    }
  }, {
    key: "getColNum",
    value: function getColNum() {
      return this.shape()[1];
    }
  }, {
    key: "size",
    value: function size() {
      var shape = this.shape();
      return shape[0] * shape[1];
    }
  }, {
    key: "rowVector",
    value: function rowVector(index) {
      return new Vector(this.twoDimArray[index]);
    }
  }, {
    key: "colVector",
    value: function colVector(index) {
      var finalList = [];
      for (var i = 0; i < this.getRowNum(); i++) {
        var row = this.twoDimArray[i];
        finalList.push(row[index]);
      }
      return new Vector(finalList);
    }
  }, {
    key: "getItem",
    value: function getItem(position) {
      return this.twoDimArray[position[0]][position[1]];
    }
  }, {
    key: "add",
    value: function add(another) {
      if (this.size() === another.size()) {
        var finalList = [];
        for (var i = 0; i < this.getRowNum(); i++) {
          var row = [];
          for (var j = 0; j < this.getColNum(); j++) {
            row.push(this.getItem([i, j]) + another.getItem([i, j]));
          }
          finalList.push(row);
        }
        return new Matrix(finalList);
      } else {
        console.log('矩阵相加，其大小必须相等');
      }
    }
  }, {
    key: "sub",
    value: function sub(another) {
      if (this.size() === another.size()) {
        var finalList = [];
        for (var i = 0; i < this.getRowNum(); i++) {
          var row = [];
          for (var j = 0; j < this.getColNum(); j++) {
            row.push(this.getItem([i, j]) - another.getItem([i, j]));
          }
          finalList.push(row);
        }
        return new Matrix(finalList);
      } else {
        console.log('矩阵相减，其大小必须相等');
      }
    }
  }, {
    key: "mul",
    value: function mul(K) {
      var finalList = [];
      for (var i = 0; i < this.getRowNum(); i++) {
        var row = [];
        for (var j = 0; j < this.getColNum(); j++) {
          row.push(this.getItem([i, j]) * K);
        }
        finalList.push(row);
      }
      return new Matrix(finalList);
    }
  }, {
    key: "division",
    value: function division(K) {
      return this.mul(1 / K);
    }
  }, {
    key: "mulVector",
    value: function mulVector(vector) {
      if (vector.len === this.getColNum()) {
        var finalList = [];
        for (var i = 0; i < this.getRowNum(); i++) {
          finalList.push(this.rowVector(i).dotMul(vector));
        }
        return new Vector(finalList);
      } else {
        console.log('矩阵与向量相乘时，矩阵的列数必须与向量的长度相等');
      }
    }
  }, {
    key: "mulMatrix",
    value: function mulMatrix(matrix) {
      if (this.getColNum() === matrix.getRowNum()) {
        var finalList = [];
        for (var i = 0; i < this.getRowNum(); i++) {
          var resultList = [];
          var rowVector = this.rowVector(i);
          for (var j = 0; j < matrix.getColNum(); j++) {
            var colVector = matrix.colVector(j);
            resultList.push(rowVector.dotMul(colVector));
          }
          finalList.push(resultList);
        }
        return new Matrix(finalList);
      } else {
        console.log('矩阵与矩阵相乘，其中一个矩阵的列数必须与另一个矩阵的行数相等');
      }
    }
  }, {
    key: "pos",
    value: function pos() {
      return this.mul(1);
    }
  }, {
    key: "neg",
    value: function neg() {
      return this.mul(-1);
    }
  }, {
    key: "toStr",
    value: function toStr() {
      return "Matrix(".concat(this.twoDimArray, ")");
    }
  }], [{
    key: "zero",
    value: function zero(r, c) {
      var finalList = [];
      for (var i = 0; i < r; i++) {
        var row = [];
        for (var j = 0; j < c; j++) {
          row.push(0);
        }
        finalList.push(row);
      }
      return new Matrix(finalList);
    }
  }]);
  return Matrix;
}();

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
function square(a) {
  return a * a;
}
function mat_add(mat1, mat2) {
  var m1 = new Matrix(mat1);
  var m2 = new Matrix(mat2);
  console.log(m1);
  console.log(m2);
  return m1.add(m2);
}

function hello() {
  console.log('hello');
}

export { add, divide, hello, mat_add, minus, multiply, square };

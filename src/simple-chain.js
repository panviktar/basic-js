const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    if (value === undefined) {
      value = "( )";
    }
    this.arr.push(value);
    return this;
  },
  removeLink(position) {
    if (isNaN(position) || position <= 0 || position > this.arr.length) {
      this.arr.length = 0;
      throw new Error();
    };
    this.arr.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let result = '( ' + this.arr.join(' )~~( ') + ' )';
    this.arr = [];
    return result;
  },
};

module.exports = chainMaker;
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
    if (typeof (position) === 'number' && position <= this.arr.length && position >= 0) {
      return this.arr.splice(position - 1, 1);
    }
    this.arr = [];
    throw new Error();

  },

  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let result = this.arr.join("~~");
    this.arr = [];
    return result;
  },
};

module.exports = chainMaker;

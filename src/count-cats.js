// const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
    let newArr = arr.flat().filter((item) => {
        return typeof item === "string";
    });
    // console.log(newArr);
    // console.log(+newArr.length);
    if (newArr.length === 0) return +0;
    return +newArr.length;
};

const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    let add = [];

    if (str === null) str = "null";
    str = String(str);
    if (options === undefined) return result;
    if (!("separator" in options)) options.separator = "+";

    if ("addition" in options) {
        if (options.addition === null) options.addition = "null";
        options.addition = String(options.addition);
        if (!("additionSeparator" in options)) options.additionSeparator = "|";

        add = options.addition;
        if ("additionRepeatTimes" in options)
            for (let i = 2; i <= options.additionRepeatTimes; i++) {
                add = add + options.additionSeparator + options.addition;
            }
    }

    let result = str + add;
    if ("repeatTimes" in options)
        for (let i = 2; i <= options.repeatTimes; i++) {
            result = result + options.separator + str + add;
        }

    return result;
};

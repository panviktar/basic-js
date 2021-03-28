const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    let monthForSeason = date.getMonth();
    if (date === undefined) return "Unable to determine the time of year!";
    if (Object.prototype.toString.call(date) !== "[object Date]") throw Error;
    if (monthForSeason < 2 || monthForSeason === 11) return 'winter';
    if (monthForSeason < 5) return 'spring';
    if (monthForSeason < 8) return 'summer';
    if (monthForSeason < 11) return 'autumn';
};


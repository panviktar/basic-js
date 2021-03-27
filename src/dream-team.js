const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arrMembers) {
  if (!Array.isArray(arrMembers) || arrMembers.length === 0) return false;
  let arrTeamName = arrMembers.map((item) => {
    if (typeof item === "string") {
      let trimItem = item.trimLeft();
      return trimItem[0].toUpperCase();
    }
  });
  return arrTeamName.sort().join("");
};

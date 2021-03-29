const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

function dateSample(sampleActivity) {
  if (
      typeof sampleActivity !== "string" ||
      +sampleActivity > 15 ||
      +sampleActivity < 1 ||
      !isFinite(+sampleActivity)
  )
    return false;
  let k
  let t
  if (t < 0) return false;
  return t;
}

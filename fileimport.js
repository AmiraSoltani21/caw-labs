const { mean } = require("./notation.js");

const scores = [10, 15, 18, 20, 13, 17];

const average = mean(scores);

console.log("Scores:", scores);
console.log("Average:", average);

module.exports = { meanOfArray: mean }; // export for testing

const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  // Fill this in
  let arr = [];
  let inc = increment;

  for(let i = 1; i <= 10; i++) {
    arr.push(addNums(inc));
    inc += increment;
  }

  return arr;
}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  // Fill this in
  let arr = [];
  let inc = increment;

  for(let i = 1; i <= 10; i++) {
    arr.push(addManyNums(inc));
    inc += increment;
  }

  return arr;
}

module.exports = [addNums10, addManyNums10];
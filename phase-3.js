const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  // Copy your `addNums10` code here
  // Then, add timing code

  // Your code here
  let arr = [];
  let inc = increment;

  console.time('addNums');
  for(let i = 1; i <= 10; i++) {
    let startTime = Date.now();

    arr.push(addNums(inc));

    let endTime = Date.now();
    console.log(`${endTime - startTime}`);

    console.timeLog('addNums');

    inc += increment;
  }
  console.timeEnd('addNums');

  return arr;
}


function addManyNums10Timing(increment) {
// Copy your `addManyNums10` code here
// Then, add timing code

  // Your code here
  let arr = [];
  let inc = increment;

  console.time('addManyNums');
  for(let i = 1; i <= 10; i++) {
    let startTime = Date.now();

    arr.push(addManyNums(inc));

    let endTime = Date.now();
    console.log(`${endTime - startTime}`);

    console.timeLog('addManyNums');

    inc += increment;
  }
  console.timeEnd('addManyNums');

  return arr;
}

function addNums100Timing(increment) {
  let arr = [];
  let inc = increment;

  // console.time('addNums');
  for(let i = 1; i <= 100; i++) {
    let startTime = Date.now();

    arr.push(addNums(inc));

    let endTime = Date.now();
    console.log(`${endTime - startTime}`);

    // console.timeLog('addNums');

    inc += increment;
  }
  // console.timeEnd('addNums');

  return arr;
}

function addManyNums100Timing(increment) {
  let arr = [];
  let inc = increment;

  // console.time('addManyNums');
  for(let i = 1; i <= 100; i++) {
    let startTime = Date.now();

    arr.push(addManyNums(inc));

    let endTime = Date.now();
    console.log(`${endTime - startTime}`);

    // console.timeLog('addManyNums');

    inc += increment;
  }
  // console.timeEnd('addManyNums');

  return arr;
}


n = 1000000
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);

console.log("\n***********\n");

n = 1000000
console.log(`addNums100(${n}): `);
addNums100Timing(1000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums100(${n}): `);
addManyNums100Timing(5000);
#!/usr/bin/node
const process = require('node:process');
const factorial = (number) => {
  if (isNaN(number) || number === 0 || process.argv.length === 2) {
    return 1;
  }
  return number * factorial(number - 1);
};

console.log(factorial(Number(process.argv[2])));

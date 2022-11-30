#!/usr/bin/node
const process = require('node:process');

const factorial = (number) => {
  if (isNaN(number) || number === 0 || number === 1) {
    return 1;
  }
  return number * factorial(number - 1);
};

console.log(factorial(process.argv[2]));

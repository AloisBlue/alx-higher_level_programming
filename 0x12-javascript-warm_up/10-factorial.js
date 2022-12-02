#!/usr/bin/node
const args = process.argv;

function factorial (param) {
  if (isNaN(param) || param === 1 || Number(param) === 0) {
    return 1;
  }

  return param * factorial(param - 1);
}

console.log(factorial(args[2]));

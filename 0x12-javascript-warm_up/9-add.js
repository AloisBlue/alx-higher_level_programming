#!/usr/bin/node
const process = require('node:process');

let { argv } = process;
let a = Number(argv[2]);
let b = Number(argv[3]);

function add(a, b) {
  let sum = a + b;
  return sum;
};

console.log(add(a, b));

#!/usr/bin/node
const process = require('node:process');

const { argv } = process;
const a = Number(argv[2]);
const b = Number(argv[3]);

function add (a, b) {
  const sum = a + b;
  return sum;
}

console.log(add(a, b));

#!/usr/bin/node
const process = require('node:process');

function add(a, b) {
  return a + b;
};

console.log(add(Number(process.argv[2]), Number(process.argv[3])));

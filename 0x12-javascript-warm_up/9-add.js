#!/usr/bin/node
const process = require('node:process');

function add(a, b) {
  let sum = Number(a) + Number(b);
  console.log(sum);
  return sum;
};

add(process.argv[2], process.argv[3]);

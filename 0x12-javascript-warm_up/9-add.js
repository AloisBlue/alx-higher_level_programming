#!/usr/bin/node
const process = require('node:process');

let { argv } = process;
let a = argv[2];
let b = argv[3];

function add(a, b) {
  let sum = Number(a) + Number(b);
  console.log(sum);
  return sum;
};

add(a, b);

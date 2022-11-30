#!/usr/bin/node
const process = require('node:process');

const { argv } = process;
const arg = argv[2];

if (arg) {
  console.log(arg);
} else {
  console.log('No argument');
}

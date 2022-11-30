#!/usr/bin/node
const process = require('node:process');

const { argv } = process;
const n = Number(argv[2]);
const positive = Math.sign(n);

if (positive === 1) {
  for (let i = 0; i < n; i++) {
    console.log('X'.repeat(n));
  }
} else if (positive === -1) {
  console.log('Missing size');
}

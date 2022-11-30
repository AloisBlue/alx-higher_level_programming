#!/usr/bin/node
const process = require('node:process');

const argvLength = process.argv.length;
let message = '';

if (argvLength === 2) {
  message = 'No argument';
} else if (argvLength === 3) {
  message = 'Argument found';
} else {
  message = 'Arguments found';
}

console.log(message);

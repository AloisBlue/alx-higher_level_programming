#!/usr/bin/node
if (isNaN(Number(process.argv[2]))) {
  console.log('Missing size');
} else {
  let i = 0;
  const number = Math.floor(Number(process.argv[2]));

  while (i < number) {
    console.log(Array(number).fill('X').join(''));
    i++;
  }
}

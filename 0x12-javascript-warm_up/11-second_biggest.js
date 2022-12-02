#!/usr/bin/node
const values = [];
const pathArg = process.argv;

pathArg.forEach((ag, i) => {
  if (i > 1) {
    values.push(ag);
  }
});

if (values.length > 1) {
  values.sort((a, b) => Number(b) - Number(a));
  console.log(values[1]);
} else {
  console.log(0);
}

#!/usr/bin/node
exports.converter = function (base) {
  return function (number) {
    const finalList = [];

    while (number > base) {
      const rem = toHex(number % base);
      finalList.push(toHex(rem));
      number = Math.floor(number / base);
    }

    finalList.unshift(toHex(number));

    return finalList.join('');
  };
};

function toHex (rem) {
  const hexValues = ['a', 'b', 'c', 'd', 'e', 'f'];
  let i = 0;
  let char = rem;

  while (i <= (rem - 10)) {
    char = hexValues[i];
    i++;
  }

  return char;
}

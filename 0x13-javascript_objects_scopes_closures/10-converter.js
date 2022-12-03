#!/usr/bin/node
exports.converter = function (base) {
  return function (number) {
    const finalList = [];

    while (number > base) {
      finalList.push((number % base).toString(base));
      number = Math.floor(number / base);
    }

    finalList.unshift(number.toString(base));

    return finalList.join('');
  };
};

#!/usr/bin/node
exports.nbOccurences = function (list, searchElement) {
  let occurence = 0;

  list.forEach(value => {
    if (value === searchElement) {
      occurence += 1;
    }
  });

  return occurence;
};

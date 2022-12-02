#!/usr/bin/node
const callMeMoby = function (x, theFunction) {
  let i = 0;
  console.log(x);
  while (i < x) {
    theFunction();
    i++;
  }
};

module.exports.callMeMoby = callMeMoby;

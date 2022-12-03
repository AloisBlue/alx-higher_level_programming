#!/usr/bin/node
const SquareSuper = require('./5-square');

class Square extends SquareSuper {

  charPrint (c) {
    if (c) {
      if (c === 'C') {
        for (let i = 0; i < this.height; i++) {
          console.log(Array(this.width).fill(c).join(''));
        }
      }
    } else {
      this.print();
    }
  }
}

module.exports = Square;

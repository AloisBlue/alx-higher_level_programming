#!/usr/bin/node
class Rectangle {
  constructor (w, h) {
    if ((w > 0) && (h > 0)) {
      this.width = w;
      this.height = h;
    }
  }

  print () {
    for (let i = 0; i < this.height; i++) {
      console.log(Array(this.width).fill('X').join(''));
    }
  }

  rotate () {
    this.rwidth = this.width;
    this.rheight = this.height;

    this.width = this.rheight;
    this.height = this.rwidth;
  }

  double () {
    this.width = this.width * 2;
    this.height = this.height * 2;
  }
}

class Square1 extends Rectangle {
  constructor (size) {
    super(size, size);
  }
}

class Square extends Square1 {
  constructor (square) {
    super(square);
    this.square = square;
  }

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

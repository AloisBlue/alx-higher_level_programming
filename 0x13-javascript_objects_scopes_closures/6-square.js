#!/usr/bin/node
class Rectangle {
  constructor (w, h) {
    if ((w > 0) && (h > 0)) {
      this.width = w;
      this.height = h;
    }
  }

  print (c) {
    for (let i = 0; i < this.height; i++) {
      console.log(Array(this.width).fill(c).join(''));
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
      this.print.call({
        width: this.width, height: this.height
      }, 'C');
    } else {
      this.print.call({
        width: this.width, height: this.height
      }, 'X');
    }
  }
}

module.exports = Square;

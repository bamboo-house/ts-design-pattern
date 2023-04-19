export {}

interface Shape {
  getArea(): number
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}

  setWidth(width: number) {
    this.width = width;
  }

  setHight(height: number) {
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

class Square implements Shape {
  constructor(private length: number) {}

  setLength(length: number) {
    this.length = length;
  }

  getArea(): number {
    return this.length * this.length;
  }
}

function f(shape: Shape) {
  console.log(shape.getArea());
}

function run() {
  const rectangle: Rectangle = new Rectangle(3, 4);
  const square: Square = new Square(3);

  f(rectangle);
  f(square);
}

run();
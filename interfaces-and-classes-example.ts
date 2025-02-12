//Create an interface and a class that implements the interface.
// The challenge is to define properties and methods in both the interface and class and demonstrate how they work together.

interface Shape {
    name: string;
    area(): number;
  }
  
  class Circle implements Shape {
    constructor(public radius: number) {}
  
    name = 'Circle';
  
    area(): number {
      return Math.PI * this.radius ** 2;
    }
  }
  
  const circle = new Circle(5);
  console.log(circle.name); // Output: Circle
  console.log(circle.area()); // Output: 78.54
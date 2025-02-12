// One of the fundamental concepts in TypeScript is type annotations.
// The challenge is to create a function that accepts two parameters of different types and returns a value based on the types provided.

function addOrConcat(a: number | string, b: number | string): number | string {
    if (typeof a === 'number' && typeof b === 'number') {
      return a + b;
    } else {
      return `${a}${b}`;
    }
  }
  
  console.log(addOrConcat(1, 2)); // Output: 3
  console.log(addOrConcat('Hello', 'TypeScript')); // Output: HelloTypeScript
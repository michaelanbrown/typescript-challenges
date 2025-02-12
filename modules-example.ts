//Modules help organize your code into separate files.
// The challenge is to create multiple TypeScript files and demonstrate how to import and use functions/classes defined in other files.

// math.ts
export function add(a: number, b: number): number {
    return a + b;
  }
  
// app.ts
//import { add } from './math';
  
console.log(add(3, 5)); // Output: 8
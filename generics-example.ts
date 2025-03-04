//Explore generics by creating a generic function that can work with different types.
// The challenge is to write a function that swaps the values of two variables regardless of their types.

function swap<T>(a: T, b: T): [T, T] {
    return [b, a];
  }
  
  console.log(swap<number>(1, 2)); // Output: [2, 1]
  console.log(swap<string>('hello', 'world')); // Output: ["world", "hello"]


  function example<T>(x: T): T {
    return x;
}

let result1: string = example<string>("EXAMPLE");
let result2: number = example<number>(740);
let result3: boolean = example<boolean>(false);

console.log(result1);
console.log(result2);
console.log(result3);
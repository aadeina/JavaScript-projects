// Amar => index 0
// Ahmed => index 1
// Tourad => index 2
// Cheikh => index 3

let arr = ["Amar", "Ahmed", "Tourad", "Cheikh"];

// console.log(arr.indexOf("Amar"))  // 0

// console.log(arr.length) // 4

//console.log(Math.random() * arr.length);

console.log(Math.floor(Math.random() * arr.length));

console.log(Math.trunc(Math.random() * arr.length));

// Trunc Exp
// console.log(Math.trunc(3.14159)); // prints 3
// console.log(Math.trunc(-0.99)); // prints -0
// console.log(Math.trunc(42)); // prints 42

console.log(arr[Math.trunc(Math.random() * arr.length)]);

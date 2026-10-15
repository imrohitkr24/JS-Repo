const score = 400
console.log(score); // Output: 400


const balance = new Number(1000) // creating a number object using the Number constructor
console.log(balance); // Output: [Number: 1000]


console .log(balance.toString().length); // converting the number to a string and accessing its length

console.log(balance.toFixed(2)); // converting the number to a string with 2 decimal places

const otherNumber = 123.456789
console.log(otherNumber.toPrecision(4)); // converting the number to a string with 4 significant digits

const hundred = 1000000
console.log(hundred.toLocaleString("en-IN")); // converting the number to a string with locale formatting for India


// Math object in JavaScript
console.log(Math.PI);
console.log(Math.E);
console.log(Math.max(1, 2, 3, 4, 5));
console.log(Math.min(1, 2, 3, 4, 5));

console.log(Math.abs(-10)); // Output: 10
console.log(Math.sqrt(16));
console.log(Math.round  (4.7)); // Output: 5
console.log(Math.floor(4.7));
console.log (Math.ceil(4.7));

console.log(Math.random()); // Output: random number between 0 and 1
console.log(Math.random() * 100+1 ); // Output: random number between 0 and 100


console.log(Math.floor(Math.random() * 100 + 1)); // Output: random number between 1 and 100
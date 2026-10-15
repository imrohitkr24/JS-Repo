let score = 33
console.log(typeof score); // number
score = "33"
console.log(typeof score); // string

let someNumber = 33
let stringNumber = String(someNumber) // convert number to string
console.log(typeof stringNumber); // string

let someString = "33"
let numberString = Number(someString) // convert string to number   
console.log(typeof numberString); // number




// ************************ Operation Conversion ************************
let value = 3 
let negValue = -value // convert positive to negative
console.log(negValue); // -3
console.log(2+2); // 4
console.log("2" + "2"); // 22
console.log(2 + "2"); // 22
console.log("2" + 2); // 22
console.log(2 - "2"); // 0
console.log("2" - 2); // 0
console.log(2**3); // 8
console.log(+true); // 1
console.log(+false); // 0
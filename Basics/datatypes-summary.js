// primitive

// 7 types of data types in JavaScript
// 1. String
// 2. Number
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Symbol  --unique and cannot be changed
// 7. BigInt  -- scientific number larger than 2^53 - 1


// Non-primitive data types / Reference data types
// 1. Object
// 2. Array
const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Rohit",
    age: 23,
    isMarried: false
};


// 3. Functions // return type is also a data type 

// JavaScript is a dynamically typed language, which means that we do not need to specify the data type of a variable when we declare it. The data type will be determined automatically based on the value assigned to the variable.


const id = Symbol("id");
const id2 = Symbol("id");
console.log(id === id2); // false


const bigInt = 1234567890123456789012345678901234567890n;   
console.log(bigInt); // 1234567890123456789012345678901234567890n




// ********************* Memory allocation in JavaScript *********************

//stack memory => stores primitive data types (string, number, boolean, null, undefined, symbol, bigint) and reference to non-primitive data types (object, array, function)

// heap memory => stores non-primitive data types (object, array, function) and their values are stored in heap memory and reference to them is stored in stack memory.


let myYoutubeChannel = "Codevolution"; // primitive data type stored in stack memory
let anotherChannel = myYoutubeChannel; // anotherChannel is a copy of myYoutubeChannel and stored in stack memory   

anotherChannel = "Codevolution2"; // changing the value of anotherChannel does not affect myYoutubeChannel because they are stored in different memory locations
console.log(myYoutubeChannel); // Codevolution
console.log(anotherChannel); // Codevolution

let user = {
    name: "Rohit",
    email: "rohit@example.com",
    age: 23
}; // non-primitive data type stored in heap memory how it is stored in heap memory is that the reference to the object is stored in stack memory and the actual object is stored in heap memory
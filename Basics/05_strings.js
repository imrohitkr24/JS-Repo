const name = "Rohit"; // primitive data type stored in stack memory
const repoCount = 50 
//const anotherName = name; // anotherName is a copy of name and stored in stack memory   
console.log(name + repoCount + "Value");// changing the value of anotherName does not affect name because they are stored in different memory locations

console.log(`Hello ${name} you have ${repoCount} repositories`); // using template literals to concatenate strings and variables


const gameName = new String("GTA"); // non-primitive data type stored in heap memory how it is stored in heap memory is that the reference to the object is stored in stack memory and the actual object is stored in heap memory

console.log (gameName[0]); // accessing the first character of the string
// Output: 'G'
console.log(gameName.length); // accessing the length of the string
// Output: 3
console.log(gameName.toUpperCase()); // converting the string to uppercase
// Output: 'GTA'
console.log(gameName.charAt(1)); // accessing the character at index 1
// Output: 'T'
console.log(gameName.indexOf("A")); // accessing the index of the character 'A'
// Output: 2


const newString = gameName.substring(0, 2); // extracting a substring from the string
console.log(newString); // Output: 'GT'

const anotherString = gameName.slice(0, 2); // extracting a substring from the string
console.log(anotherString); // Output: 'GT' 

const newStringOne = "    Rohit   "; // string with whitespace
console .log(newStringOne); // Output: '    Rohit   '
console.log(newStringOne.trim()); // removing whitespace from the string
// Output: 'Rohit'


const url = "https://www.youtube.com/watch?v=abc123&list=PL1234567890&index=1"; // string with URL
url.replace("https://www.youtube.com/watch?v=abc123&list=PL1234567890&index=1", "https://www.youtube.com/watch?v=xyz456&list=PL0987654321&index=2"); // replacing a substring in the string

url.includes("youtube"); // checking if the string includes a substring
// Dates

let myDate = new Date(); // Current date and time
console.log(myDate.toString()); // Output: Current date and time
console.log(myDate.toDateString()); // Output: Current date in a readable format
console.log(myDate.toISOString()); // Output: Current date in ISO format

let specificDate = new Date('2023-01-01');
console.log(specificDate.toString()); // Output: Sun Jan 01 2023 00:00:00 GMT+0000 (Coordinated Universal Time)

let timestamp = Date.now();
console.log(timestamp); // Output: Current timestamp in milliseconds since January 1, 1970

let dateFromTimestamp = new Date(timestamp);
console.log(dateFromTimestamp.toString()); // Output: Current date and time based on the timestamp
 

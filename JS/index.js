// Print to console
console.log('Hello, World!');

// -------------------------
// Variables
// -------------------------

let a = 10; // 'let' is block scoped (local variable)
var v = 5;  // 'var' is function scoped (global if declared outside)

// -------------------------
// Constants
// -------------------------

const b = 3; // Constants cannot be reassigned
// b = 4; // error: "Assignment to constant variable"

// -------------------------
// JavaScript is dynamically typed
// -------------------------

let myname = 'Pratt'; // Initially a string
console.log(myname);  // Pratt

myname = 33;          // Now a number
console.log(myname);  // 33

// -------------------------
// Objects: grouping related variables
// -------------------------

let person = {
    fname: "pratt",
    age: 21
};

// Accessing object properties
console.log(person.fname);        // dot notation
console.log(person["age"]);       // bracket notation

// -------------------------
// Arrays: list of items
// -------------------------

let names = [];       // Declare an array
names[0] = "pratt";   // Assign value to first element
console.log(names[0]);
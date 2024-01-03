/* Function declaration or function definition or function statement */
function square(num) {
  return num * num;
}

/* Function Expression - when you store a function inside of a variable 
   Anonymous function - without name
*/
const squareof = function (num) {
  return num * num;
};
console.log(squareof(5));

/* First class functions - functions can be treated as a variable */
function displaySquare(fn) {
  console.log("Square is " + fn(5));
}
displaySquare(square);

/* IIFE - Immediately invoked function expressions */
(function squareiife(num) {
  console.log(num * num);
})(6);

/* Function Scope and Shadowing */

/* let(0,1,2,3,4,5) and var(6) */
for (let i = 0; i <= 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}

/* Function Hoisting - functions are hoisted completely, bcz complete function is copied to the scope*/
functionName();
function functionName() {
  console.log("x", x); // undefined
  var x = 5;
  console.log("Function Hoisting");
}

var y = 5;
var fn = function () {
  console.log("y", y); // undefined
  /* why ? bcz creates a separate execution context for function/local scope 
    that is when we have a variable present in the scope we don't check global scope
  */
  var y = 10;
};
fn();

/* Spread vs Rest */
function multiply(num1, num2) {
  console.log("Spread", num1 * num2);
}
var arr = [5, 6];
multiply(...arr);

function consoleNums(...numbers) {
  console.log("Rest", numbers, numbers[0], numbers[1]);
}
consoleNums(5, 6);

/* const f = (a,...value, x,y) =>  { SyntaxError: Rest parameter must be last formal parameter
     console.log(x,y);
}
*/

const f = function (a, x, y, ...value) {
  console.log("Rest", x, y, value);
};
f(1, 2, 3, 4, 5, 6, 7);

/* Arrow functions 
    Syntax - without function keyword
    Implicit return
    arguments can't be console logged inside arrow functions 
*/
const add = (one, two) => {
  return one + two;
};
console.log("add", add(1, 2));

const user = {
  username: "Arrow function",
  rc1: () => {
    console.log("arrow", this.username); // undefined
  },
  rc2() {
    console.log("normal", this.username); // noraml Arrow function
  },
};

user.rc1();
user.rc2();

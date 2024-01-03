/* Lexical Scope -  variable declared outside a function is accessible inside the function, 
    but opposite is not true 
*/

const username = "username";
function scope() {
  var password = "123";
  console.log(username); // username
}
scope();
// console.log(password); ReferenceError: password is not defined

/* Closures - a closure gives you access to an outer function's scope from an inner function. 
   In JavaScript, closures are created every time a function is created, at function creation time.

   Usages:
   Private variables, encapsulation
*/
function subscribe() {
  // Outer function scope
  var name = "name";
  function displayName(num) {
    // Local scope
    console.log(name, num);
  }
  return displayName;
}
var func = subscribe();
func(5);

/* Closure scope chain */
// Global scope
var e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      // Outer scopes
      return function (d) {
        // Local scope
        return a + b + c + d + e;
      };
    };
  };
}
console.log(sum(1)(2)(3)(4));

// Question 1
let count = 0;
(function printCount() {
  if (count === 0) {
    let count = 1; // Shadowing and block scope
    console.log(count);
  }
  console.log(count); // Here count is still 0 bcz of block scope
})();

// Question 2
function createBase(num) {
  return function (innerNum) {
    console.log("add six", innerNum + num);
  };
}
var addSix = createBase(6);
addSix(10);
addSix(1);

/* Time optimization with closures */
function find() {
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }
  return function (index) {
    console.log(a[index]);
  };
}

const closure = find();

console.time("6");
closure(6);
console.timeEnd("6");
console.time("12");
closure(30);
console.timeEnd("12");

for (var i = 0; i < 3; i++) {
  // A different memory scope is created for each function
  function inner(i) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
  inner(i);
}

// Private counter
function counter() {
  var _counter = 0;
  function add(increment) {
    _counter += increment;
  }
  function retrieve() {
    return "Counter = " + _counter;
  }
  return {
    add,
    retrieve,
  };
}

const c = counter();
c.add(5);
console.log(c.retrieve());

// Module pattern - encapsulation, private variables and public functions which can access private variables
var Module = (function () {
  var a = 0;
  function privateMethod(num) {
    console.log("private " + (a + num));
  }
  return {
    publicMethod: function (num) {
      privateMethod(num);
    },
  };
})();

Module.publicMethod(5);
// Module.privateMethod(); Module.privateMethod is not a function

/* Memoization */
function memoize(func) {
  let res = {};

  return function (...args) {
    const argsIndex = JSON.stringify(args);
    if (!res[argsIndex]) res[argsIndex] = func(...args);
    return res[argsIndex];
  };
}

const clumsysquare = memoize((num) => {
  for (let i = 1; i <= 100000000; i++) {}

  return num * 2;
});

console.time("First call");
console.log(clumsysquare(9467));
console.timeEnd("First call");

// use the same value two times
console.time("Second call");
console.log(clumsysquare(9467));
console.timeEnd("Second call");

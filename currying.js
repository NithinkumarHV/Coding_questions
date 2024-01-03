/* currying - from f(a,b) to f(a)(b) */
function evaluate(operation) {
  return (a) => {
    return (b) => {
      if (operation === "sum") return a + b;
      else if (operation === "multiply") return a * b;
      else if (operation === "divide") return a / b;
      else if (operation === "subtract") return a - b;
      else return "No / Invalid Operation Selected";
    };
  };
}

console.log(evaluate("sum")(1)(2));
console.log(evaluate("multiply")(1)(2));

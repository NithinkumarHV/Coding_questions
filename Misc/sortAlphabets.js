/*
    Write a program to sort only alphabets in the alphanumeric string 

    i/p: cd19ya1
    o/p: ac19dy1
*/
function test(alphanumericString) {
  // Anything that is not a-z or A-Z will be replaced with ""
  const alphabets = alphanumericString.replace(/[^a-zA-Z]/g, "");

  const sortedAlphabets = alphabets.split("").sort().join("");

  let result = "";
  let index = 0;

  for (let i = 0; i < alphanumericString.length; i++) {
    // Anything that is between a-z or A-Z is sorted
    if (/[a-zA-Z]/.test(alphanumericString[i])) {
      result += sortedAlphabets[index];
      index++;
    } else {
      result += alphanumericString[i];
    }
  }
  return result;
}

console.log(test("cd19ya1"));

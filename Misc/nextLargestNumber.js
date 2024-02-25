/*
    Given a number, find the next largest number of that

    i/p: 56431
    o/p: 61345
*/
function nextLargestNumber(num) {
  const digits = num.toString().split("").map(Number);

  // Step 1: Find the first digit to swap
  let i = digits.length - 2;
  while (i >= 0 && digits[i] >= digits[i + 1]) {
    i--;
  }

  // If no such digit is found, the number is the largest possible permutation
  if (i === -1) {
    return "No larger number exists";
  }

  // Step 2: Find the smallest digit to the right of digits[i] that is larger than digits[i]
  let j = digits.length - 1;
  while (digits[j] <= digits[i]) {
    j--;
  }

  // Step 3: Swap digits[i] and digits[j]
  [digits[i], digits[j]] = [digits[j], digits[i]];

  // Step 4: Reverse the digits to the right of digits[i]
  const reversed = digits.splice(i + 1).reverse();

  // Combine the digits and return the next largest number
  const result = parseInt(digits.concat(reversed).join(""));
  return result;
}

console.log(nextLargestNumber(56431));

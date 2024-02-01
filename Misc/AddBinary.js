/*
    Given two binary strings a and b, return their sum as a binary string.

    Example 1:
    Input: a = "11"(3), b = "1"(1)
    Output: "100"(4)
    
    Example 2:
    Input: a = "1010", b = "1011"
    Output: "10101"
*/

function addBinary(a, b) {
  let result = "";
  let carry = 0;
  const maxLength = Math.max(a.length, b.length);

  a = a.padStart(maxLength, "0");
  b = b.padStart(maxLength, "0");

  for (let i = maxLength - 1; i >= 0; i--) {
    let sum = parseInt(a[i]) + parseInt(b[i]) + carry;
    result = (sum % 2) + result;
    carry = Math.floor(sum / 2);
  }
  if (carry > 0) {
    result = carry + result;
  }
  return result;
}

console.log(addBinary("11", "1"));

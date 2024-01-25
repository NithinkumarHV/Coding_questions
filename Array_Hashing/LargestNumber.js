/*

    https://leetcode.com/problems/largest-number/description/

    Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.
    Since the result may be very large, so you need to return a string instead of an integer.

    Example 1:

    Input: nums = [10,2]
    Output: "210"
    Example 2:

    Input: nums = [3,30,34,5,9]
    Output: "9534330"
*/

function compare(x, y) {
  return parseInt(y + x) - parseInt(x + y);
}

function largestNumber(nums) {
  let numStr = nums.map((n) => n.toString());

  numStr.sort(compare);

  let result = numStr.join("");

  return result[0] === "0" ? "0" : result;
}

console.log(largestNumber([30, 3]));

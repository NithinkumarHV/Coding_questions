/*
    https://leetcode.com/problems/plus-one/description/
    
    You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

    Increment the large integer by one and return the resulting array of digits.

    Example 1:
    Input: digits = [1,2,3]
    Output: [1,2,4]
    Explanation: The array represents the integer 123.
    Incrementing by one gives 123 + 1 = 124.
    Thus, the result should be [1,2,4].
    
    Example 2:
    Input: digits = [4,3,2,1]
    Output: [4,3,2,2]
    Explanation: The array represents the integer 4321.
    Incrementing by one gives 4321 + 1 = 4322.
    Thus, the result should be [4,3,2,2].
*/

function plusOne(nums) {
  let carry = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    let sum = nums[i] + carry;
    nums[i] = sum % 10;
    carry = Math.floor(sum / 10);

    if (carry === 0) break;
  }
  if (carry > 0) {
    // The unshift() method adds new elements to the beginning of an array.
    nums.unshift(carry);
  }
  return nums;
}

console.log(plusOne([1, 2, 3]));

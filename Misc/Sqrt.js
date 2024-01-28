/*
    https://leetcode.com/problems/sqrtx/description/

    Complexity: O(logn)

    Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.
    You must not use any built-in exponent function or operator.

    Example 1:
    Input: x = 4
    Output: 2
    Explanation: The square root of 4 is 2, so we return 2.
    
    Example 2:
    Input: x = 8
    Output: 2
    Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.

*/

function sqrt(num) {
  let left = 0;
  let right = num;
  let res = 0;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (mid * mid > num) {
      right = mid - 1;
    } else if (mid * mid < num) {
      left = mid + 1;
      res = mid;
    } else {
      return mid;
    }
  }
  return res;
}

console.log(sqrt(4));

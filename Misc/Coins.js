/*
    You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase may be incomplete.

    Given the integer n, return the number of complete rows of the staircase you will build.

    Example 1:
    Input: n = 5
    Output: 2
    Explanation: Because the 3rd row is incomplete, we return 2.
    
    Example 2:
    Input: n = 8
    Output: 3
    Explanation: Because the 4th row is incomplete, we return 3.

*/
function coins(num) {
  let left = 1;
  let right = num;
  let result = 0;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let coins = (mid / 2) * (mid + 1);
    if (coins > num) {
      right = mid - 1;
    } else {
      left = mid + 1;
      result = Math.max(result, mid);
    }
  }
  return result;
}

console.log(coins(1));

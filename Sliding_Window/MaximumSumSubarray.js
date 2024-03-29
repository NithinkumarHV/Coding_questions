/* 
  Given an array of positive numbers and a positive number 'k,' find the maximum sum of any contiguous subarray of size 'k'.

  Example 1:
  Input: [2, 1, 5, 1, 3, 2], k=3 
  Output: 9
  Explanation: Subarray with maximum sum is [5, 1, 3].
  
  Example 2:
  Input: [2, 3, 4, 1, 5], k=2 
  Output: 7
  Explanation: Subarray with maximum sum is [3, 4].

  ALGORITHM:

  1. set maxSum = 0, curSum = 0;
  2. iterate from i = 0 to i < k
      maxSum = maxSum + arr[i]
  3. set curSum = maxSum
  4. iterate from i = k to i < length of array
    curSum = curSum - arr[i-k] + arr[i]
    maxSum = max(curSum, maxSum)
  5. Return maxSum

*/

function maxSumSubarray(arr, k) {
  let maxSum = 0;
  let currSum = 0;

  for (let i = 0; i < k; i++) {
    maxSum += arr[i];
  }
  currSum = maxSum;

  // remove arr[i-k] and add arr[i] to the window
  for (let i = k; i < arr.length; i++) {
    currSum = currSum - arr[i - k] + arr[i];
    maxSum = Math.max(currSum, maxSum);
  }
  return maxSum;
}

console.log(maxSumSubarray([2, 1, 5, 1, 3, 2], 3));

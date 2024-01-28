/**
 * https://leetcode.com/problems/maximum-subarray/
 * Time O(N) | Space O(1)
 * 
    Given an integer array nums, find the subarray with the largest sum, and return its sum.

    Example 1:
    Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
    Output: 6
    Explanation: The subarray [4,-1,2,1] has the largest sum 6.
    
    Example 2:
    Input: nums = [1]
    Output: 1
    Explanation: The subarray [1] has the largest sum 1.
    
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let [runningSum, maxSum] = [nums[0], nums[0]];

  for (let i = 1; i < nums.length; i++) {
    if (runningSum < 0) {
      runningSum = 0;
    }
    runningSum += nums[i];
    maxSum = Math.max(maxSum, runningSum);
  }

  return maxSum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

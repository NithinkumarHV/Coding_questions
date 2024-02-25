/**
    Given an array of positive integers nums and a positive integer target, return the minimal length of a 
    subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

    Example 1:

    Input: target = 7, nums = [2,3,1,2,4,3]
    Output: 2
    Explanation: The subarray [4,3] has the minimal length under the problem constraint.
    
    Example 2:
    Input: target = 4, nums = [1,4,4]
    Output: 1
    
    Example 3:
    Input: target = 11, nums = [1,1,1,1,1,1,1,1]
    Output: 0

    ALGORITHM:

    1. set left = 0, curSum = 0, minLength = Infinity
    2. iterate the nums with variable as right
        curSum = curSum + nums[right]
        while(curSum >= target)
          compute minLength = min(minLength, right-left+1)
          curSum = curSum - nums[i]
          left++
    3. return minLength

 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

function minSubArrayLen(nums, target) {
  let minLength = Infinity;
  let leftWindow = 0;
  let currentSum = 0;

  for (let rightWindow = 0; rightWindow < nums.length; rightWindow++) {
    currentSum += nums[rightWindow];
    while (currentSum >= target) {
      minLength = Math.min(minLength, rightWindow - leftWindow + 1);
      currentSum -= nums[leftWindow];
      leftWindow++;
    }
  }
  return minLength === Infinity ? 0 : minLength;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));

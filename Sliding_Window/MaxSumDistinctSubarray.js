/* 
    Maximum Sum of Distinct Subarrays With Length K
    
    You are given an integer array nums and an integer k. Find the maximum subarray sum of all the subarrays of nums 
    that meet the following conditions:
        The length of the subarray is k, and
        All the elements of the subarray are distinct.

    Return the maximum subarray sum of all the subarrays that meet the conditions. 
    If no subarray meets the conditions, return 0.

    A subarray is a contiguous non-empty sequence of elements within an array.
    
    Input: nums = [1,5,4,2,9,9,9], k = 3
    Output: 15
    Explanation: The subarrays of nums with length 3 are:
    - [1,5,4] which meets the requirements and has a sum of 10.
    - [5,4,2] which meets the requirements and has a sum of 11.
    - [4,2,9] which meets the requirements and has a sum of 15.
    - [2,9,9] which does not meet the requirements because the element 9 is repeated.
    - [9,9,9] which does not meet the requirements because the element 9 is repeated.
    We return 15 because it is the maximum subarray sum of all the subarrays that meet the conditions
    Example 2:

    Input: nums = [4,4,4], k = 3
    Output: 0
    Explanation: The subarrays of nums with length 3 are:
    - [4,4,4] which does not meet the requirements because the element 4 is repeated.
    We return 0 because no subarrays meet the conditions.
*/

function maxSumDistinctSubarray(nums, k) {
  const map = new Map();

  let left = 0;
  let cSum = 0;
  let maxSum = 0;
  let i = 0;

  while (i < k && i < nums.length) {
    cSum += nums[i];
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    i++;
  }

  if (map.size === k) maxSum = cSum;

  for (let i = k; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    map.set(nums[left], map.get(nums[left]) - 1);

    if (map.get(nums[left]) === 0) map.delete(nums[left]);

    cSum += nums[i];
    cSum -= nums[left];

    if (map.size === k) maxSum = Math.max(maxSum, cSum);

    left++;
  }
  return maxSum;
}

console.log(maxSumDistinctSubarray([1, 5, 4, 2, 9, 9, 9], 3));

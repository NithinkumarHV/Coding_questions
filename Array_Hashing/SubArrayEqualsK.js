/*
    https://leetcode.com/problems/subarray-sum-equals-k/description/
    
    Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

    A subarray is a contiguous non-empty sequence of elements within an array.

    Example 1:
    Input: nums = [1,1,1], k = 2
    Output: 2

    Example 2:
    Input: nums = [1,2,3], k = 3
    Output: 2

*/

function subArrayEqualsK(nums, k) {
  let res = 0;
  let sum = 0;
  const map = new Map();
  map.set(0, 1);

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (map.has(sum - k)) {
      res += map.get(sum - k);
    }
    map.set(sum, (map.get(sum) || 0) + 1);
  }
  return res;
}

console.log(subArrayEqualsK([1, 1, 1], 2));

/**
    https://leetcode.com/problems/single-element-in-a-sorted-array/description/
 
    You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.

    Return the single element that appears only once.

    Your solution must run in O(log n) time and O(1) space.

    Example 1:

    Input: nums = [1,1,2,3,3,4,4,8,8]
    Output: 2
    Example 2:

    Input: nums = [3,3,7,7,10,11,11]
    Output: 10

 * @param {number[]} nums
 * @return {number}
 */

var singleNonDuplicate = function (nums) {
  let left = 0,
    right = nums.length - 2;

  while (left <= right) {
    const mid1 = (left + right) >> 1;
    const mid2 = mid1 ^ 1;

    if (nums[mid1] === nums[mid2]) left = mid1 + 1;
    else right = mid1 - 1;
  }

  return nums[left];
};

console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]));

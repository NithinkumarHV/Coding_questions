/*
    https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

    Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

    If target is not found in the array, return [-1, -1].

    You must write an algorithm with O(log n) runtime complexity.

    Example 1:
    Input: nums = [5,7,7,8,8,10], target = 8
    Output: [3,4]

    Example 2:
    Input: nums = [5,7,7,8,8,10], target = 6
    Output: [-1,-1]

    Example 3:
    Input: nums = [], target = 0
    Output: [-1,-1]
*/

function binarySearch(leftBias, nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let index = -1;

  while (left <= right) {
    let mid = (left + right) >> 1;
    if (target > nums[mid]) {
      left = mid + 1;
    } else if (target < nums[mid]) {
      right = mid - 1;
    } else {
      if (leftBias) {
        index = mid;
        right = mid - 1;
      } else {
        index = mid;
        left = mid + 1;
      }
    }
  }
  return index;
}

function firstLastIndex(nums, target) {
  let left = binarySearch(true, nums, target);
  let right = binarySearch(false, nums, target);
  return [left, right];
}

console.log(firstLastIndex([5, 7, 7, 8, 8, 10], 8));

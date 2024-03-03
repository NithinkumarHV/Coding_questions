/*
    https://leetcode.com/problems/search-in-rotated-sorted-array/description/

    There is an integer array nums sorted in ascending order (with distinct values).
    Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

    Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
    You must write an algorithm with O(log n) runtime complexity.

    Example 1:
    Input: nums = [4,5,6,7,0,1,2], target = 0
    Output: 4

    Example 2:
    Input: nums = [4,5,6,7,0,1,2], target = 3
    Output: -1

    Example 3:
    Input: nums = [1], target = 0
    Output: -1

 * @param {number[]} nums
 * @param {number} target
 * Time O(log(N)) | Space O(1)
 * @return {number}
 */
var search = (nums, target) => {
  let [left, right] = [0, nums.length - 1];

  while (left <= right) {
    const mid = (left + right) >> 1;
    const [leftNum, rightNum] = [nums[left], nums[right]];

    // Equal
    if (nums[mid] === target) return mid;

    // leftSortedPortion => (leftNum <= guess)
    if (leftNum <= nums[mid]) {
      if (target > nums[mid] || target < leftNum) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    // rightSortedPortion => (guess < leftNum)
    if (nums[mid] < leftNum) {
      if (target < nums[mid] || target > rightNum) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }

  return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));

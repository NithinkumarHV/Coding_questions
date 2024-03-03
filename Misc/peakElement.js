/*
    https://leetcode.com/problems/find-peak-element/
    https://leetcode.com/problems/peak-index-in-a-mountain-array/

    A peak element is an element that is strictly greater than its neighbors.Given a 0-indexed integer array nums, find a peak element, and return its index. 
    If the array contains multiple peaks, return the index to any of the peaks.

    You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.

    Example 1:
    Input: nums = [1,2,3,1]
    Output: 2
    Explanation: 3 is a peak element and your function should return the index number 2.

    Example 2:
    Input: nums = [1,2,1,3,5,6,4]
    Output: 5
    Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.

    Time O(log(N)) | Space O(1)
 */
var findPeakElement = function (nums) {
  let [l, r] = [0, nums.length - 1];
  let mid = null;
  while (l <= r) {
    mid = (l + r) >> 1;
    if (mid < nums.length - 1 && nums[mid] < nums[mid + 1]) {
      l = mid + 1;
    } else if (mid > 0 && nums[mid] < nums[mid - 1]) {
      r = mid - 1;
    } else {
      break;
    }
  }
  return mid;
};

console.log(findPeakElement([0, 10, 5, 2]));

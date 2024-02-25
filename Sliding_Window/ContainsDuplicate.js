/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 * 
 * https://leetcode.com/problems/contains-duplicate-ii/description/
 
  Given an integer array nums and an integer k, return true if there are two distinct indices i and j 
  in the array such that nums[i] == nums[j] and abs(i - j) <= k.

  Example 1:

  Input: nums = [1,2,3,1], k = 3
  Output: true
  Example 2:

  Input: nums = [1,0,1,1], k = 1
  Output: true
  Example 3:

  Input: nums = [1,2,3,1,2,3], k = 2
  Output: false

  ALGORITHM:

  1. set left = 0, right = 0
  2. create a hasmap called map
  3. while(right less than nums length)
      1. if map has element at nums[right] - return true
      2. else add that element(nums[right]) to map
      3. increment right;

      Now, below code make sure that the window length <= k
      4. if right - left > k - then delete element at nums[left] from map
      5. increment left;
  4. End of while and return false

 */
var containsNearbyDuplicate = function (nums, k) {
  let leftPtr = 0;
  let rightPtr = 0;
  let windowHashMap = new Map();
  while (rightPtr < nums.length) {
    if (windowHashMap.has(nums[rightPtr])) {
      return true;
    } else {
      windowHashMap.set(nums[rightPtr], 1);
    }
    rightPtr++;

    // if r - l > k
    if (rightPtr - leftPtr > k) {
      windowHashMap.delete(nums[leftPtr]);
      leftPtr++;
    }
  }
  return false;
};

console.log(containsNearbyDuplicate([1, 3, 2, 1], 3));

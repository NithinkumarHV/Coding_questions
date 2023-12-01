/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
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

/*
    Complexity: O(n)

    Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

    Example 1:
    Input: nums = [-4,-1,0,3,10]
    Output: [0,1,9,16,100]
    Explanation: After squaring, the array becomes [16,1,0,9,100].
    After sorting, it becomes [0,1,9,16,100].

    Example 2:
    Input: nums = [-7,-3,2,3,11]
    Output: [4,9,9,49,121]
*/
function SquaresSorted(nums) {
  let result = [];
  let [left, right] = [0, nums.length - 1];

  while (left <= right) {
    if (nums[left] * nums[left] < nums[right] * nums[right]) {
      result.push(nums[right] * nums[right]);
      right--;
    } else {
      result.push(nums[left] * nums[left]);
      left++;
    }
  }
  return result.reverse();
}

console.log(SquaresSorted([-4, -1, 0, 3, 10]));

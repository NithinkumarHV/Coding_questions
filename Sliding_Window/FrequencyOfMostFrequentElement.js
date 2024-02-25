/**
 
    https://leetcode.com/problems/frequency-of-the-most-frequent-element/

 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 
 The frequency of an element is the number of times it occurs in an array.

    You are given an integer array nums and an integer k. In one operation, you can choose an index of nums and increment the element at that index by 1.
    Return the maximum possible frequency of an element after performing at most k operations.

    Example 1:

    Input: nums = [1,2,4], k = 5
    Output: 3
    Explanation: Increment the first element three times and the second element two times to make nums = [4,4,4].
    4 has a frequency of 3.
    Example 2:

    Input: nums = [1,4,8,13], k = 5
    Output: 2
    Explanation: There are multiple optimal solutions:
    - Increment the first element three times to make nums = [4,4,8,13]. 4 has a frequency of 2.
    - Increment the second element four times to make nums = [1,8,8,13]. 8 has a frequency of 2.
    - Increment the third element five times to make nums = [1,4,13,13]. 13 has a frequency of 2.
    Example 3:

    Input: nums = [3,9,6], k = 2
    Output: 1

    ALGORITHM:

    1. sort the nums array from lowest to highest
    2. set left=0, curSum=0, maxLength = 0
    3. Iterate through nums, using for loop and right as variable
        1. compute curLength = right - left + 1
        2. compute curSum = curSum + nums[right]
        3. if(nums[right] * curLength <= curSum + k)
            if true - set maxLength = curLength
            else - subtract nums[left] from curSum and increment left;
    4. End For loop and return maxLength
 */

var maxFrequency = function (nums, k) {
  const sortedNums = nums.sort((a, b) => a - b);

  let maxLength = 0;

  let currentSum = 0;
  let left = 0;

  for (let right = 0; right < sortedNums.length; right++) {
    const currentLength = right - left + 1;
    currentSum += sortedNums[right];

    if (sortedNums[right] * currentLength <= currentSum + k) {
      maxLength = currentLength;
    } else {
      currentSum -= sortedNums[left];
      left++;
    }
  }
  return maxLength;
};

console.log(maxFrequency([1, 4, 8, 13], 5));

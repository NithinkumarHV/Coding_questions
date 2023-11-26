/**
 * Hash Set - Intelligent Sequence
 * Greedy - Max Score
 * Time O (N) | Space O(N)
 * https://leetcode.com/problems/longest-consecutive-sequence/
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = (nums, maxScore = 0) => {
  const numSet = new Set(nums);
  let array;

  for (const num of [...numSet]) {
    const prevNum = num - 1;

    if (numSet.has(prevNum)) continue;

    let [currNum, score] = [num, 1];
    array = [];
    array.push(currNum);

    while (numSet.has(currNum + 1)) {
      currNum++;
      array.push(currNum);
      score++;
    }
    maxScore = Math.max(maxScore, score);
  }

  return { maxScore, array };
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));

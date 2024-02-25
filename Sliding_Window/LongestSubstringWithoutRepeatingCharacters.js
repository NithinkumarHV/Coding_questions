/**
 * SLIDING WINDOW
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * Time O(N) | Space O(N)
 * @param {string} s
 * @return {number}
 
  Given a string s, find the length of the longest 
  substring
  without repeating characters.

  Example 1:

  Input: s = "abcabcbb"
  Output: 3
  Explanation: The answer is "abc", with the length of 3.
  Example 2:

  Input: s = "bbbbb"
  Output: 1
  Explanation: The answer is "b", with the length of 1.
  Example 3:

  Input: s = "pwwkew"
  Output: 3
  Explanation: The answer is "wke", with the length of 3.
  Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

  ALGORITHM:

  1. set left=0,max=0, create a new Set()
  2. iterate through the string, variable is right
      if(set has s[right]) - remove s[left] and increment left
      else
        add s[right] to set
        compute max = max(max, set.size)
  3. return max

 */

function lengthOfLongestSubstring(s) {
  const set = new Set();
  let l = 0;
  let max = 0;
  let longestSubstring = [];

  for (let r = 0; r < s.length; r++) {
    // while set has s[r], delete s[l] and do l++
    while (set.has(s[r])) {
      set.delete(s[l]);
      l++;
    }
    set.add(s[r]);
    max = Math.max(max, set.size);
  }
  return max;
}

console.log(lengthOfLongestSubstring("abcabcbb"));

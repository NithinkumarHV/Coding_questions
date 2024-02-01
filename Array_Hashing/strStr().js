/*
    https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/
    
    Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

    Example 1:
    Input: haystack = "sadbutsad", needle = "sad"
    Output: 0
    Explanation: "sad" occurs at index 0 and 6.
    The first occurrence is at index 0, so we return 0.
    
    Example 2:
    Input: haystack = "leetcode", needle = "leeto"
    Output: -1
    Explanation: "leeto" did not occur in "leetcode", so we return -1.
*/

function strStr(haystack, needle) {
  if (needle.length === 0) return 0;
  for (let i = 0; i < haystack.length; i++) {
    let k = i;
    let j = 0;
    while (haystack[k] === needle[j] && j < needle.length) {
      k++;
      j++;
    }
    if (j === needle.length) return i;
  }
  return -1;
}

console.log(strStr("leetcode", "leeto"));

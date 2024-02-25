/*
  https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/description/

  Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

  Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

  Example 1:

  Input: s = "abciiidef", k = 3
  Output: 3
  Explanation: The substring "iii" contains 3 vowel letters.
  Example 2:

  Input: s = "aeiou", k = 2
  Output: 2
  Explanation: Any substring of length 2 contains 2 vowels.
  Example 3:

  Input: s = "leetcode", k = 3
  Output: 2
  Explanation: "lee", "eet" and "ode" contain 2 vowels.

  AlGORITHM:

  1. have set of vowel characters
  2. set left = 0, result = 0, count = 0
  3. iterate from i=0 to i < string length
      1. if vowel set has current element (s[i]) - increment count;
      2. Check to make sure, the subarray length < k
         if i - left > k
         check leftmost element of the window is present a vowel 
         if yes - remove from the set and increment left
      3. res = max(res, count)
  4. return res

*/

function maxVowels(s, k) {
  const vowel = new Set(["a", "e", "i", "o", "u"]);

  let [left, res, count] = [0, 0, 0];

  for (let i = 0; i < s.length; i++) {
    if (vowel.has(s[i])) count++;

    if (i - left + 1 > k) {
      if (vowel.has(s[left])) count--;
      left++;
    }
    res = Math.max(res, count);
  }
  return res;
}

console.log(maxVowels("abciiidef", 3));

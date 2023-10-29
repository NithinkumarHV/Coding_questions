/* 
    Given two strings s and t, return true if t is an anagram of s, and false otherwise.

    An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
    typically using all the original letters exactly once.

    Example 1:

    Input: s = "anagram", t = "nagaram"
    Output: true
    Example 2:

    Input: s = "rat", t = "car"
    Output: false

*/
let prompt = require("prompt-sync")();

let s = prompt("Enter the string s: ");
let t = prompt("Enter the string t: ");

function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const sMap = new Map();
  const tMap = new Map();

  for (let i = 0; i < s.length; i++) {
    sMap.get(s[i]) ? sMap.set(s[i], sMap.get(s[i]) + 1) : sMap.set(s[i], 0);
    tMap.get(t[i]) ? tMap.set(t[i], tMap.get(t[i]) + 1) : tMap.set(t[i], 0);
  }

  for (let [key, value] of sMap) {
    if (!tMap.has(key) || tMap.get(key) !== value) {
      return false;
    }
  }
  return true;
}

console.log("Answer is\n", isAnagram(s, t));

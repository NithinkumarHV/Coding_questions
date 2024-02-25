/**
 * Hash Map
 * Time O(N * K) | Space O(N * K)
 * https://leetcode.com/problems/group-anagrams/
 * @param {string[]} words
 * @return {string[][]}
 */

const getHash = (word) => {
  const frequency = new Array(26).fill(0);

  for (const char of word) {
    const charCode = char.charCodeAt(0) - "a".charCodeAt(0);
    frequency[charCode]++;
  }
  console.log(frequency);
  return frequency.toString();
};

var groupWords = (words, map) => {
  for (const word of words) {
    const hash = getHash(word);
    const values = map.get(hash) || [];

    values.push(word);
    map.set(hash, values);
  }
};

var groupAnagrams = (words, map = new Map()) => {
  if (!words.length) return [];

  groupWords(words, map);

  return [...map.values()];
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

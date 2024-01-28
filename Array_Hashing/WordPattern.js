/*
    https://leetcode.com/problems/word-pattern/description/

    Given a pattern and a string s, find if s follows the same pattern.
    Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

    Example 1:
    Input: pattern = "abba", s = "dog cat cat dog"
    Output: true
    
    Example 2:
    Input: pattern = "abba", s = "dog cat cat fish"
    Output: false
    
    Example 3:
    Input: pattern = "aaaa", s = "dog cat cat dog"
    Output: false

*/
function wordPattern(pattern, str) {
  let words = str.split(" ");
  if (pattern.length !== words.length) return false;

  const charToWord = new Map();
  const wordToChar = new Map();

  for (let i = 0; i < pattern.length; i++) {
    let character = pattern[i];
    let word = words[i];
    if (charToWord.has(character) && charToWord.get(character) !== word) {
      return false;
    }
    if (wordToChar.has(word) && wordToChar.get(word) !== character) {
      return false;
    }
    charToWord.set(character, word);
    wordToChar.set(word, character);
  }
  return true;
}

console.log(wordPattern("abba", "dog cat cat dog"));

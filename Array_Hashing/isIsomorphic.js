/*
    Given two strings s and t, determine if they are isomorphic.

    Two strings s and t are isomorphic if the characters in s can be replaced to get t.

    All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

    Example 1:

    Input: s = "egg", t = "add"
    Output: true
    Example 2:

    Input: s = "foo", t = "bar"
    Output: false
    Example 3:

    Input: s = "paper", t = "title"
    Output: true
*/

function isIsomorphic(s, t) {
  const sMap = new Map();
  const tMap = new Map();

  for (let i = 0; i < s.length; i++) {
    let c1 = s[i];
    let c2 = t[i];

    if (
      (sMap.has(c1) && sMap.get(c1) !== c2) ||
      (tMap.has(c2) && tMap.get(c2) !== c1)
    ) {
      return false;
    }
    sMap.set(c1, c2);
    tMap.set(c2, c1);
  }
  return true;
}

console.log(isIsomorphic("egg", "add"));

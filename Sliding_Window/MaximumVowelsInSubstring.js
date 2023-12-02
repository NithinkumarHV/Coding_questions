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

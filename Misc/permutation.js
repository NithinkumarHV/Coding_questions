/*
    Given a string, write all the possible permutations of it
*/
function generatePermutations(str) {
  const result = [];

  function permute(current, remaining) {
    if (remaining.length === 0) {
      // If there are no more characters to permute, add the current permutation to the result
      result.push(current);
      return;
    }

    for (let i = 0; i < remaining.length; i++) {
      const nextChar = remaining[i];
      const newCurrent = current + nextChar;
      const newRemaining = remaining.slice(0, i) + remaining.slice(i + 1);
      permute(newCurrent, newRemaining);
    }
  }

  permute("", str);
  return result;
}

console.log(generatePermutations("abc"));

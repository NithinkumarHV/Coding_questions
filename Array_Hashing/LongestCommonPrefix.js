/**
 * Time O(N^2) | Space O(N)
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
  let pre = strs[0];

  for (let word of strs) {
    for (let i = pre.length - 1; i >= 0; i--) {
      if (pre[i] !== word[i]) {
        // 0,1,2,3,4,5 ... i-1 => from 0 till excluding i
        pre = pre.slice(0, i);
      }
    }
  }

  return pre;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));

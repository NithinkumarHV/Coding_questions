/*
    Write a program to find the maximum consecutive 1s in a binary string

    i/p: 00011110011111
    o/p: 5
*/
function maxConsecutive1s(str) {
  let count = 0;
  let maxCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "1") {
      count++;
    } else {
      maxCount = Math.max(maxCount, count);
      count = 0;
    }
  }
  maxCount = Math.max(maxCount, count);
  return maxCount;
}

console.log(maxConsecutive1s("00011110011111"));

/* 
    Given an integer array nums and an integer k, return the k most frequent elements. 
    You may return the answer in any order.
*/
let prompt = require("prompt-sync")();

let numbers = prompt("Enter the array numbers in comma separated format: ");
let k = prompt("Enter the k: ");
let nums = numbers.split(",");

function topKFrequent(nums, k) {
  let nMap = new Map();
  let arr = new Array(nums.length + 1).fill(0);
  let answer = [];

  nums.forEach((n) => {
    let val = nMap.get(n) || 0;
    nMap.set(n, val + 1);
  });

  /* arr - index = number of times an element has occured, 
           value = array of numbers with index many occurences
  */
  for (let [key, value] of nMap) {
    let prev = arr[value] || [];
    prev.push(key);
    arr[value] = prev;
  }

  arr.reverse(); // [ 0, 0, 0, [ 1 ], [ 2 ], [ 3 ], 0 ]

  for (let el of arr) {
    if (k < 1) break;
    if (el) {
      for (let el2 of el) {
        answer.push(el2);
        k--;
      }
    }
  }
  return answer;
}

console.log("Answer is\n", topKFrequent(nums, k));

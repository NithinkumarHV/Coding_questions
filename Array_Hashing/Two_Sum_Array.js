var prompt = require("prompt-sync")();

var numbers = prompt("Enter the array: ");
var target = prompt("Enter the target: ");

var nums = numbers.split(",");
console.log(nums);

function findPairsWithSum(inputArray, targetSum) {
  let pairs = [];
  let numSet = new Set();

  for (const num of inputArray) {
    const complement = targetSum - num;
    if (numSet.has(complement)) {
      pairs.push([+num, complement]);
    }
    numSet.add(+num);
  }
  return pairs;
}

console.log("Answer is\n", findPairsWithSum(nums, target));

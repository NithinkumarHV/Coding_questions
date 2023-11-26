var prompt = require("prompt-sync")();
/* Given an array of integers nums and an integer target, 
    return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, 
and you may not use the same element twice.

You can return the answer in any order. */

var numbers = prompt("Enter the array: ");
var target = prompt("Enter the target: ");

var nums = numbers.split(",");

function twoSum(nums, target) {
  const numMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }
    numMap.set(+nums[i], i);
  }
  return null;
}

console.log(
  "Answer is\n",
  twoSum(nums, target) ? twoSum(nums, target) : "No elements sum up to target\n"
);

/* 
nums=[1,2,3]

Number: index

numMap { 
    '1': 0, 
    '2': 1, 
    '3': 2 
} */

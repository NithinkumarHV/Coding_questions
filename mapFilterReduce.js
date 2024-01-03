/* MAP: map method is used to create a new array, by applying a function to each one of the element
  of the existing array
*/

const nums = [1, 2, 3, 4];
const multiply3 = nums.map((number, index, arr) => {
  return number * 3 + index;
});

console.log(multiply3);

/* FILTER: filter method applies a condition to the elements of an array, if condition is true,
  then element is pushed to output array 
*/

const numsfilter = [1, 2, 3, 4];
const morethan2 = numsfilter.filter((number, index, arr) => {
  return number > 2;
});

console.log(morethan2);

/* REDUCE: reduces an array of elements into a single value */

const numsreduce = [1, 2, 3, 4];
const sum = numsreduce.reduce((acc, curr, index, arr) => {
  return acc + curr;
}, 0);

console.log(sum);

/* Map vs ForEach 
  Map return an array, forEach doesn't
  Map can be chained with further map, since it return an array
*/
const arr = [2, 5, 4, 1];

const mapResult = arr.map((a) => a + 2);
console.log(mapResult);

const forEachResult = arr.forEach((a, i) => (arr[i] = a + 2));
console.log(forEachResult, arr);

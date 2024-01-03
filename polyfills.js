// MAP
Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

const nums = [1, 2, 3, 4];
const multiply3 = nums.myMap((number, index, arr) => {
  return number * 3;
});

console.log(multiply3);

// FILTER
Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
  return temp;
};

const numsfilter = [1, 2, 3, 4];
const morethan2 = numsfilter.myFilter((number, index, arr) => {
  return number > 2;
});
console.log(morethan2);

// REDUCE
Array.prototype.myReduce = function (cb, initialValue) {
  var accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }
  return accumulator;
};

const numsreduce = [1, 2, 3, 4];
const sum = numsreduce.myReduce((acc, curr, index, arr) => {
  return acc + curr;
}, 0);

console.log(sum);

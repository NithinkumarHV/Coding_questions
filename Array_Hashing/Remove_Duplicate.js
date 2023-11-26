function removeDuplicates(arr) {
  const uniqueArray = arr.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
  return uniqueArray;
}

function removeDuplicatesUsingSet(arr) {
  return Array.from(new Set(arr));
}

console.log(removeDuplicates([1, 2, 3, 3, 2, 5, 6, 7]));
console.log(removeDuplicatesUsingSet([1, 2, 3, 3, 2, 5, 6, 7]));

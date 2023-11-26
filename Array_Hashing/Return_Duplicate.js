function returnDuplicates(arr) {
  const uniqueSet = new Set();
  const duplicates = [];
  const duplicateCount = new Map();

  for (const element of arr) {
    if (uniqueSet.has(element)) {
      duplicates.push(element);
      duplicateCount.set(element, (duplicateCount.get(element) || 1) + 1);
    }
    uniqueSet.add(element);
  }
  return { duplicates, uniqueSet: Array.from(uniqueSet), duplicateCount };
}

console.log(returnDuplicates([1, 2, 3, 3, 4, 5, 1, 5, 1]));

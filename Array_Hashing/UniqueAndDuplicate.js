const arr = [2, 4, 6, 8, 2, 6, 4, 9, 1];

// Identify the duplicates and add to another array, unique in one array

function getDuplicatesAndUnique(arr) {
  const duplicate = new Set();
  const unique = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (unique.has(arr[i])) {
      duplicate.add(arr[i]);
      unique.delete(arr[i]);
    } else if (!duplicate.has(arr[i])) {
      unique.add(arr[i]);
    }
  }
  return {
    duplicateArray: Array.from(duplicate),
    uniqueArray: Array.from(unique),
  };
}

const data = getDuplicatesAndUnique(arr);
console.log("Duplicate array", data.duplicateArray);
console.log("Unique array", data.uniqueArray);

var countNegatives = function (matrix) {
  let count = 0;
  const rows = matrix.length;
  const cols = matrix[0].length;

  // Start from the bottom-left corner
  let i = rows - 1;
  let j = 0;

  while (i >= 0 && j < cols) {
    // If the current element is negative, all elements to its right are also negative
    if (matrix[i][j] < 0) {
      count += cols - j;
      i--;
    } else {
      // If the current element is non-negative, move to the right
      j++;
    }
  }
  return count;
};

console.log(
  countNegatives([
    [4, 3, 2, -1],
    [3, 2, 1, -1],
    [1, 1, -1, -2],
    [-1, -1, -2, -3],
  ])
);

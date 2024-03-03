/*
    https://leetcode.com/problems/search-a-2d-matrix/description/
    
    You are given an m x n integer matrix matrix with the following two properties:

    Each row is sorted in non-decreasing order.
    The first integer of each row is greater than the last integer of the previous row.
    Given an integer target, return true if target is in matrix or false otherwise.

    You must write a solution in O(log(m * n)) time complexity.

    Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
    Output: true

    Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
    Output: false
*/

function SearchMatrix(matrix, target) {
  let [rows, columns] = [matrix.length, matrix[0].length];
  let [left, right] = [0, rows * columns - 1];

  while (left <= right) {
    let mid = (left + right) >> 1;
    let [row, col] = [Math.floor(mid / columns), mid % columns];
    let guess = matrix[row][col];

    if (guess === target) return true;

    if (target > guess) left = mid + 1;

    if (target < guess) right = mid - 1;
  }
  return false;
}

console.log(
  SearchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3
  )
);

/*
    O(log(m) + log(n))

    function SearchMatrix(matrix, target) {
    let [rows, columns] = [matrix.length, matrix[0].length];
    let [top, bot] = [0, rows - 1];

    while (top <= bot) {
        let row = Math.floor((top + bot) / 2);
        if (target > matrix[row][columns - 1]) {
        top = row + 1;
        } else if (target < matrix[row][0]) {
        bot = row - 1;
        } else {
        break;
        }
    }

    if (!(top <= bot)) return false;

    let row = Math.floor((top + bot) / 2);
    let [l, r] = [0, columns - 1];
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (target > matrix[row][mid]) {
        l = mid + 1;
        } else if (target < matrix[row][mid]) {
        r = mid - 1;
        } else {
        return true;
        }
    }
    return false;
    }
*/

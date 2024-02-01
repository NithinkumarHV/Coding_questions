/*
    https://leetcode.com/problems/pascals-triangle/description/

    Given an integer numRows, return the first numRows of Pascal's triangle.

    In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

    Example 1:
    Input: numRows = 5
    Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
    
    Example 2:
    Input: numRows = 1
    Output: [[1]]

*/

function generate(numOfRows) {
  const res = [[1]];

  for (let i = 1; i < numOfRows; i++) {
    res[i] = [];
    for (let k = 0; k < i + 1; k++) {
      res[i][k] = (res[i - 1][k] || 0) + (res[i - 1][k - 1] || 0);
    }
  }
  return res;
}

console.log(generate(5));

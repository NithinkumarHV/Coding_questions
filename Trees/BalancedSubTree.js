/*
    https://leetcode.com/problems/balanced-binary-tree/description/
    
    Given a binary tree, determine if it is height-balanced.
    A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.

    Input: root = [3,9,20,null,null,15,7]
    Output: true

    Input: root = [1,2,2,3,3,null,null,4,4]
    Output: false

    Input: root = []
    Output: true
*/
var isBalanced = function (root) {
  function dfs(root) {
    if (root === null) return [true, 0];

    let left = dfs(root.left);
    let right = dfs(root.right);

    let balance = left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1;

    return [balance, 1 + Math.max(left[1], right[1])];
  }
  return dfs(root)[0];
};

console.log(isBalanced([3, 9, 20, null, null, 15, 7]));

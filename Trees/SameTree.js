/*
    https://leetcode.com/problems/same-tree/description/
    
    Given the roots of two binary trees p and q, write a function to check if they are the same or not.

    Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

    Input: p = [1,2,3], q = [1,2,3]
    Output: true

    Input: p = [1,2], q = [1,null,2]
    Output: false

    Input: p = [1,2,1], q = [1,1,2]
    Output: false
*/

var isSameTree = function (p, q) {
  if (!p && !q) return true;

  if (!p || !q) return false;

  if (p.val !== q.val) return false;

  return dfs(p, q);
};

var dfs = (p, q) => {
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

console.log(isSameTree([1, 2, 3], [1, 2, 3]));

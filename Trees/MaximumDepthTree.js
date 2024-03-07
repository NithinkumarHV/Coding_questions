/*
    https://leetcode.com/problems/maximum-depth-of-binary-tree/description/

    Given the root of a binary tree, return its maximum depth.

    A binary tree's maximum depth is the number of nodes along the longest path from the 
    root node down to the farthest leaf node.

    Example 1:
    Input: root = [3,9,20,null,null,15,7]
    Output: 3

    Example 2:
    Input: root = [1,null,2]
    Output: 2
*/

// Iterative DFS - Pre-order + Stack
function maxDepth(root) {
  if (!root) return 0;

  return iterativeDFS([[root, 1]]);
}

function iterativeDFS(stack, height = 0) {
  while (stack.length) {
    const [root, depth] = stack.pop();

    height = Math.max(height, depth);
    if (root.right) stack.push([root.right, depth + 1]);
    if (root.left) stack.push([root.left, depth + 1]);
  }
  return height;
}

console.log(maxDepth[[3, 9, 20, null, null, 15, 7]]);

/*
 Recursive DFS

    var maxDepth = function(root) {
        if(!root) return 0;

        return dfs(root);
    };

    function recursiveDFS(root) {
        return 1 + Math.max(maxDepth(root.left),maxDepth(root.right));
}
*/

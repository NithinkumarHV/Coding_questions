# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def minDiffInBST(self, root) -> int:
        prev = None
        cur_smallest = float("inf")

        def inorder(root):
            nonlocal prev,cur_smallest
            if not root:
                return
            
            inorder(root.left)
            if prev:
                cur_smallest = min(cur_smallest, root.val - prev.val)
            prev = root
            inorder(root.right)

        inorder(root)
        return cur_smallest

        
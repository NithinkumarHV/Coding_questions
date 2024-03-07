# Definition for a binary tree node.
class TreeNode:
     def __init__(self, val=0, left=None, right=None):
         self.val = val
         self.left = left
         self.right = right

def tree2str(root) -> str:
    res = []

    def preorder(root):
        if not root:
            return
            
        res.append("(")
        res.append(str(root.val))

        if not root.left and root.right:
            res.append("()")

        preorder(root.left)
        preorder(root.right)
        res.append(")")

    preorder(root)

    return "".join(res)[1:-1]

# root = TreeNode(1,TreeNode(2, TreeNode(4)),TreeNode(3)) 1(2(4))(3)

root = TreeNode(1,TreeNode(2, None, TreeNode(4)),TreeNode(3)) # 1(2()(4))(3)

print(tree2str(root))
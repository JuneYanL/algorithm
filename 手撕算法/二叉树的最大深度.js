// 解题思路：
// 1. 递归
/*
 * function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
 */

/**
  * 
  * @param root TreeNode类 
  * @return int整型
  */
function maxDepth( root ) {
   return root === null?0:1+Math.max(maxDepth(root.left),maxDepth(root.right))
}
module.exports = {
    maxDepth : maxDepth
};

// 2. 非递归、迭代
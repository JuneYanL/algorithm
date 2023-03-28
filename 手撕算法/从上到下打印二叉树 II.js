/* >这里需要注意，虽然加入数组的顺序不是从前往后，比如数组
[[3],[9,20],[15,7]]，本来想的是加入顺序为：3，9，20，15，7；
但然可以把加入顺序变为，3,9,15,29,7，先把左子节点加入，再加右子节点，，因为对于每个节点都是如此，且分层级，所以不存在从右往左的情况，就是以下代码： */

// 递归的层次遍历
var levelOrder = function(root) {
    // 1. 数组长度等于层级
    // 2. 遍历且判断当前节点所在层级，并加入对应下标的数组中
    function lei(root,k,node) {
        if(root==null) return;
        if(root.val!==null) {
          if(!node[k]) node[k] = [];
          node[k].push(root.val);
        }
        lei(root.left,k+1,node);
        lei(root.right,k+1,node);
    }
    let node = [];
    lei(root,0,node);
    return node;
};

// 迭代的层级遍历
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    // 迭代,层次遍历
    let node = [];
    if(root==null) return node;
    let list = [root];//队列
    for(let k = 0;list.length;k++) {
        // 如何直到k要加一，当当前已经遍历了2^k次，但这只用于完全二叉树，当有空的情况，需要在当前层级最后一个节点出队列时，存储下个层级的节点数，并循环。
        for(let i = list.length;i>0;i--) {
            const tree = list.shift();
            if(tree.val!==null) {
                if(!node[k]) node[k] = [];
                node[k].push(tree.val);
            }
            tree.left&&list.push(tree.left);
            tree.right&&list.push(tree.right);
        }
        
    }
    return node
};
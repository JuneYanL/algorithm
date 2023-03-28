// 1. 广度优先搜索，BFS（队列）
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function(root) {
    return BFS(root);
    
};


//  队列加入根节点，出队时，把子节点加入队列，入队后，如果队列还有，则继续循环。
function BFS(root) {
    const result = [],temp = [];//result队列,temp存储treenode结构的元素
    if(!root) {
        return result;
    }
    temp.push(root);
    while(temp.length) {
        const node = temp.shift();
        result.push(node.val);
        node.left&&temp.push(node.left);
        node.right&&temp.push(node.right);
        console.log(node);
    }
    return result;
}
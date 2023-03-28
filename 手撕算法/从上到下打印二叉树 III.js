var levelOrder = function(root) {
    // 法1. 投机取巧，上一题，在偶数列，倒转
    // 法2. 双栈
    // 法3. 投机取巧，把双栈改成双端队列
    let node = [];
    let list = [];//双端队列
    if(root==null) return node;
    list = [root];
    for(let k = 0;list.length;k++) {
        for(let i = list.length;i>0;i--) {
            // 当前list存在，即该层有数
            if(node.length<=k) node[k] = [];
            if(k%2===0) {
                // 奇数
                const tree = list.shift();
                if(tree.val!=null) {
                    node[k].push(tree.val);
                }
                tree.left&&list.push(tree.left);
                tree.right&&list.push(tree.right);
            } else {
                // 偶数
                const tree = list.pop();
                if(tree.val!=null) {
                    node[k].push(tree.val);
                }
                tree.right&&list.unshift(tree.right);
                tree.left&&list.unshift(tree.left);
            }
        }
    }
    return node;
};
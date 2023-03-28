/*
 * function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param root TreeNode类 
 * @return int整型一维数组
 */
/* function threeOrders( root ) {
    // 参数（cur,arr），无返回值
    // 终止条件，cur为空
    // 单层逻辑：中左右，arr.push(cur.val),dif(左)，dif(右)
    function dif(cur,arr) {
        if(!(cur&&cur.val)) return ;
        if(cur.val!=='#')
        arr.push(cur.val);
        dif(cur.left,arr);
        dif(cur.right,arr);
    }
     function dif2(cur,arr) {
        if(!(cur&&cur.val)) return ;
        dif2(cur.left,arr);
        if(cur.val!=='#')
        arr.push(cur.val);
        dif2(cur.right,arr);
    }
     function dif3(cur,arr) {
        if(!(cur&&cur.val)) return ;
        dif3(cur.left,arr);
        dif3(cur.right,arr);
        if(cur.val!=='#')
        arr.push(cur.val);
    }

    // 迭代法
    function dif4(root,arr) {
        if(!(root&&root.val)) return ;
        let stack =[root];
        while(stack.length) {
          const node = stack.pop();
          if(node&&node.val&&node.val!=='#')
            arr.push(node.val);
          node&&node.right&&stack.push(node.right);//先加入右节点，因为先进后出
          node&&node.left&&stack.push(node.left);//后加入左节点，因为后进先出
          
        }
        
    }
    // 迭代法
    function dif5(root,arr) {
        // let arr = [];
    let st = [];
    if(root==null) return; 
    let curr = root;

    while(curr||st.length) {
    // 不为空则遍历左边并加入，为空则输出当前并右边加入，
      if(curr&&curr.val!=='#') {
          st.push(curr);
          curr = curr.left;
        } else {
          const node = st.pop();
          arr.push(node.val);
          curr = node.right;
        }
    }
    return arr;
        
    }
    function dif6(root,arr) {
        if(!(root&&root.val)) return ;
        let stack =[root];
        while(stack.length) {
          const node = stack.pop();
          if(node&&node.val&&node.val!=='#')
            arr.push(node.val);
          node&&node.right&&stack.push(node.right);//先加入右节点，因为先进后出
          node&&node.left&&stack.push(node.left);//后加入左节点，因为后进先出
          
        }
        
    }
        
    let arr = [[],[],[],[],[],[]];
    dif(root,arr[0]);//先序遍历，递归
    dif2(root,arr[1]);//中序遍历，递归
    dif3(root,arr[2]);//后续遍历，递归
    dif4(root,arr[3]);//先序遍历，迭代
    dif5(root,arr[4]);//中序遍历，迭代
    dif6(root,arr[5]);//后序遍历，迭代
    return arr;
} */
obj = {
  val: 1,
  left: null,
  right: {
    val:2,
    left: {
      val:3
    }
  }
}
// console.log(threeOrders(obj))
function inorderTraversal( root ) {//中序遍历，迭代
    let result = [];
    if(root==null) return; 
    let st = [root];
    let n = 0;
    while(st.length&&n<20) {
      n++;
      const node = st.pop();
      if(node!==null&&node.val&&node.val!=='#') {
        if(node.right&&node.right!=='#') 
          st.push(node.right);//右
        st.push(node);//中
        st.push(null);
        if(node.left&&node.left!=='#') //左
          st.push(node.left)
        
      }else {
        const tree = st.pop();
        tree&&tree.val&&result.push(tree.val);
      }
    }
    return result;
}
const res1 = inorderTraversal(obj)
console.log(res1);
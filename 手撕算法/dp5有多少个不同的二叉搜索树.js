

void async function () {
    // Write your code here
    // while(n = 3){
        // 1. dp[i]表示从1到i为节点的二叉搜索树的方法数
        // 2. i从1到n，j从1到i,dp[i]+=dp[i-j]*dp[j-1]
        // 3. dp[0] = 1;
        // 4. 遍历顺序，从递归公式知道i要依靠i之前的状态，i不变，j变，所以先遍历i，嵌套j
        let n = 5;
        let dp = [];
        dp[0] = 1;
        for(let i = 1;i<=n;i++) {
          dp[i] = 0;
            for(let j = 1;j<=i;j++) {
              if((i-j)<(j-1)) break;
                if((i-j)==(j-1)) {
                    dp[i] += dp[i-j]*dp[j-1];
                    break;
                } else {
                    dp[i] += 2*dp[i-j]*dp[j-1];
                }
            }
        }
        console.log(dp)
    // }
}()



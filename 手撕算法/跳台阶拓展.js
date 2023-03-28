// 如果是n级台阶，最多跳m级
        n = parseInt(n);
        const m = n;let dp = [];
        dp[0] = 1;dp[1] = 1;
        for(let i = 2;i<=n;i++) {
                if(i-m-1>=0)  {
                    if(!dp[i]) {
                       dp[i]=dp[i-1]-dp[i-m-1];
                    }
                } else {
                    dp[i]= 2*dp[i-1];
                }
        }
        console.log(dp[n])
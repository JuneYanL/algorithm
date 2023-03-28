var integerBreak = function(n) {
    let dp = [];
    dp[2] = 1;dp[3] = 2;dp[4] = 4;
    for(let i = 5;i<=n;i++) {
        for(let j = 1;(i-j)>=j;j++) {
          if(!dp[i]) dp[i] = 0
            dp[i] = Math.max(dp[i],Math.max(j*(i-j),j*dp[i-j]));
        }
    }
    return dp;
  }
  let res = integerBreak(10)
  console.log(res);
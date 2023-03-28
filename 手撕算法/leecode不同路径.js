var uniquePathsWithObstacles = function(obstacleGrid) {
    if(!obstacleGrid) return 0;
    const m = obstacleGrid.length
    const n = obstacleGrid[0].length;
    let dp = [];
    for(let i = 0;i<m;i++) {
        if(!dp[i]) dp[i] = [];
        dp[i][0] = 0;
        console.log()
    }
    for(let j = 0;j<n;j++) {
        dp[0][j] = 0;
    }
    for(let i = 0;i<m;i++) {
      if(obstacleGrid[i][0]===0) {
        dp[i][0] = 1;
      } else {
        break;
      }
    }
    for(let j = 0;j<n;j++) {
      if(obstacleGrid[0][j]===0) {
        dp[0][j] = 1;
      } else {
        break;
      }
    }
    for(let i = 1;i<m;i++) {
        for(let j = 1;j<n;j++) {
          if(obstacleGrid[i][j]===1) {
            dp[i][j] = 0;
          } else {
            dp[i][j] = dp[i-1][j]+dp[i][j-1];
          }
        }
    }
    return dp;
    // return dp[m-1][n-1];
};
const res = uniquePathsWithObstacles([[0,1],[0,0]]);
console.log(res);
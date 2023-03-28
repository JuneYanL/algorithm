const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    const len = await readline();
    let arr = await readline()
    // dp[i]:到达第i个台阶的最小花费；dp[i] = min(dp[i-1]*cost[i-1],dp[i-2]*cost[i-2]);dp[0] = 0,dp[1]=0;
    arr= arr.split(' ');
    arr.forEach((item,index)=>{
        arr[index] = parseInt(item)
    })
    let dp = [0,0];
    for(let i = 2;i<=len;i++) {
        dp[i] = Math.min(dp[i-1]+arr[i-1],dp[i-2]+arr[i-2]);
    }
    console.log(dp[len]);
}()
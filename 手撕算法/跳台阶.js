/* 
动态规划
做法与斐波那契数列一样，解题详情：
https://blog.nowcoder.net/n/bd31ad8896db41a6882756245cc3930b?f=comment
以下为跳台阶的四种解法
1. 递归：F[n] = f[n-1]+f[n-1]；
  首先要明白为什么跳台阶是相加，[参考链接](https://www.bilibili.com/video/BV1BY4y1A746/?spm_id_from=333.337.search-card.all.click&vd_source=173b7cde5d30802e68974fe8727c53c6)
  是因为青蛙最多只能跳两个台阶，在前两个的跳法之上，只需要加上当前台阶并相加即可。
2. 记忆化搜索
3. 动态规划
4. 动态规划的空间优化
*/

let map = new Map();
function jumpFloor(number)
{
    // 1.递归,O(2^n),O(n)
    // if(number===1) return 1;
    // if(number===2) return 2;
    // return jumpFloor(number-1) + jumpFloor(number-2);
    // 2. 记忆化搜索，把计算过的台阶保存下来
    // if(number===1) return 1;
    // if(number===2) return 2;
    // if(map.has(number)) {return map.get(number);}
    // const res = jumpFloor(number-1) + jumpFloor(number-2);
    // map.set(number,res);
    // return res;
    // 3. 动态规划，存储
    // map.set(1,1);
    // map.set(2,2);
    // for(let i = 3;i<=number;i++) {
    //     map.set(i,map.get(i-1)+map.get(i-2));
    // }
    // return map.get(number);
    // 4. 动态规划空间优化，不用存储每个台阶
    if(number === 1) return 1;
    if(number === 2) return 2;
    let l=1;r=2,t = 0;;
    for(let i = 3;i<=number;i++) {
        t = r;
        r+= l;
        l = t;
    }
    return r;
}
module.exports = {
    jumpFloor : jumpFloor
};
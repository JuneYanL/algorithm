/* 
>需要注意的是：截取的长度，以及截取之后的结束条件；
>1. 遍历不能超过两个字符串的长度
>2. 指针也不呢超过两个字符串的长度
>3. 当前子串的长度大于或等于剩余的子串，那么可以结束比较了，因为只用输入最长且最早发现的子串。
 */

const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    let str1 = await readline();
    let str2 = await readline();
    // 1. 暴力破解法，双重循环
    if(str1.length<=str2.length) {
        getchi(str1,str2);
    } else {
        getchi(str2,str1);
    }
}()

function getchi(str1,str2) {
    let maxStr = '';//记录最长公共子串
    const len = str1.length,len2 = str2.length;
    for(let i = 0,t = 0;i<len;i++,t=i) {
        for(let j = 0,b=0;j<len2;j++,b = j) {
            while(str1[t]===str2[b]) {
                t++;b++;
                if(t>=len||b>=len2) break;
            }
            if(i!==t) {
                maxStr.length<(t-i)?maxStr = str1.substr(i,t-i):maxStr;
                t = i;
            }
        }
        // 最大子串长度>=len-i-1，可以退出
        if(maxStr.length>=len-i-1) {
            console.log(maxStr);
            return; 
        }
    }
    console.log(maxStr);

}
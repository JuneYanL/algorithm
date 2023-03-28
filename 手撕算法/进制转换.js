/* 解题思路
1. parseInt(num,16);
2. Number(num,16);
3. 将16进制转为10进制 */

const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    const obj = {
        A: 10,
        B: 11,
        C: 12,
        D: 13,
        E: 14,
        F: 15,
    };
    rl.on("line", function (line) {
        // console.log(parseInt(line,16))
        // console.log(Number(line,16))
        // console.log(eval(line).toString())
        let str = null;
        let res = 0;
        if (line) {
            str = line.substr(2);
            for (let i = 0; i < str.length; i++) {
                if (Number(str[i] < 10)) {
                    res += Math.pow(16, str.length - i - 1) * Number(str[i]);
                } else {
                    res += Math.pow(16, str.length - i - 1) * obj[str[i]];
                }
            }

            console.log(res);
        }
    });
})();
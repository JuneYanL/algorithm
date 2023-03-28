// 考察重复子串，或正则表达式，或字符串匹配
const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});
const ipt = [];
rl.on("line", function (line) {
    ipt.push(line);
}).on("close", () => {
    Hj20(ipt);
});

function Hj20(ipt) {
    let res = [];
    ipt.forEach((item, index) => {
        // 长度
        if (item.length < 8) {
            res[index] = "NG";
        } else {
            // 种类
            let n = 0;
            if (/[0-9]/g.test(item)) n++;
            if (/[a-z]/g.test(item)) n++;
            if (/[A-Z]/g.test(item)) n++;
            if (/[^0-9^a-z^A-Z]/g.test(item)) n++;
            if (n < 3) {
                res[index] = "NG";
            } else {
                // 长度大于2的包含公共元素的字串重复,字典
                let dc = {};
                for (let i = 0; i < item.length - 1; i++) {
                    if (dc[item.substr(i, 3)]) {
                        res[index] = "NG";
                        break;
                    } else {
                        dc[item.substr(i, 3)] = true;
                    }
                }
                if (res[index] !== "NG") res[index] = "OK";
            }
        }
    });
    res.forEach((item) => {
        console.log(item);
    });
}

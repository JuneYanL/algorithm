const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    let x=0,y=0;
    while ((line = await readline())) {
        let tokens = line.split(";");
        tokens.forEach(item=>{
            if(panduan(item)) {
                const step = Number(item.substr(1));
                switch(item[0]) {
                    case 'A':
                        x-=step;
                        break;
                    case 'S':
                        y-=step;
                        break;
                    case 'W':
                        y+=step;
                        break;
                    case 'D':
                        x+=step;
                        break;
                }
            }
        })
    }
    console.log(`${x},${y}`)
})();

// 判断是否为非法输入
function panduan(str) {
    const reg = /^\w\d{1,2}$/;
    let flag = reg.test(str);
    if (flag && str) {
        flag = ["A", "W", "S", "D"].includes(str[0]);
    }
    return flag;
}

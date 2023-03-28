// >注意点：获取兄弟单词后，存入数组，要排序，再输出第k个兄弟单词
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    let line = await readline();
    let tokens = line.split(' ');
    let arr = [];
    const str1 = tokens[tokens.length-2]
    let map1 = getChar(str1);
    for(let i = 1;i<1-3+tokens.length;i++) {
        if(isBorther(tokens[i],str1,map1)) arr.push(tokens[i])
    }
    arr = arr.sort();//注意需要排序后在输出第k个单词
    console.log(arr.length)
    if(arr.length>tokens[tokens.length-1])    console.log(arr[tokens[tokens.length-1]-1])
}()
// 判断是否为兄弟单词
function isBorther(str,str1,map1) {
    if(str===str1) return false;
    if(str.length!==str1.length) return false;
    let map = getChar(str);
    for(let key in map) {
        if(map[key]!==map1[key]) {
            return false;
        }
    }
    return true;
}

// 计算字符个数
function getChar(str) {
    const map = {}
    for(let i = 0;i<str.length;i++) {
        if(map[str[i]]) {
            map[str[i]] += 1;
        } else {
            map[str[i]] = 1;
        }
    }
    return map;
}
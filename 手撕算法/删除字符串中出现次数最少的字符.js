/* - 用replace或直接再次存储
- replace时，正则表达式RegExp,‘gm'表示全局和多次匹配
- for in遍历对象
- 多次遍历，时间复杂度依旧是O(n)，因为没有嵌套遍历 */
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    while(line = await readline()){
        
        let map = {};
        let arr = [];
        let min = 999;
        // 对象计录每个字符的出现次数
        for(let i = 0;i<line.length;i++) {
            const char = line[i];
            if(map[char]) {
                map[char]++;
            } else {
                map[char] = 1;
            }
        }
        // 遍历对象计算最小出现次数
        for(let i in map) {
            if(map[i]<min) {
                min = map[i]
            }            
        }
        // 1. 遍历比较得出最小出现字符，并replace替换
        // for(let i in map) {
        //     if(map[i]===min) {
        //         arr.push(i);
        //     }
        // }
        // arr.forEach(item=>{
        //     // g表示全局匹配，m表示多次匹配
        //     line = line.replace(new RegExp(item,'gm'),'');
        // })
        // console.log(line)
        // 2. 或者直接遍历比较
        let str = ''
        for(let i = 0;i<line.length;i++) {
            if(map[line[i]]!==min) {
                str += line[i];
            }
        }
        console.log(str)
    }
}()
// >还是要注意字符串的判断
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    const len = await readline();
    const flag = await readline();
    let arr = [];
    while(line = await readline()){
        let tokens = line.split(' ');
        arr.push({name:tokens[0],grade:tokens[1]});
    }
    // 先按名字排序，再按分数排序，类似基数排序的分类思想，即分数相同的情况下，先排好名字
    arr = sort(arr,flag,'name');
    arr = sort(arr,flag,'grade');
    arr.forEach(item=>{
        console.log(item.name+' '+item.grade)
    })
}()
// 排序,按某个属性排序
function sort(arr,flag,attribute) {
    return arr.sort((a,b)=>{
        if(flag==='1') {
           return a[attribute]-b[attribute]; 
        } else {
            return b[attribute]-a[attribute];
        }
    })
}
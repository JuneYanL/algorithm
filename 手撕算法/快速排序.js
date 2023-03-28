// > 注意：需要注意字符串和数字之间的比较，有时要转换用Number或pareseInt
// 思想：
// - 选择中心轴（左右、随机或中位数）
// - 中心轴选择左边，则右边开始比较，反之；中心轴选择中位数，则左右都可以开始比较；
// - 结束：一趟比较下来，没有移动或者只剩下两个元素，即可结束
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    let res = [];
    const length = await readline();
    while(line = await readline()){
        res.push(Number(line));   
    }
    // console.log(res)
    // 保存所有数字，去重，快速排序，从小到大
    res = [...new Set(res)];
    // res = res.sort((a,b)=>{
    //     return a-b;
    // });
    quitSort(res,0,res.length-1);
    res.forEach(item=>{
        console.log(item);
    })
}()
// 快速排序
function quitSort(arr,left,right) {
    if(left>=right) return;
    let L = left,R = right;
    const pivot = arr[L];
    let flag = true;
    while(left<right) {
      if(flag) {
        if(arr[right]<pivot) {
          arr[left] = arr[right];
          left++;
          flag = false;
        } else {
          right--;
        }
      } else {
        if((arr[left]>pivot)) {
          arr[right] = arr[left];
          right--;
          flag = true;
        } else {
          left++;
        }
      }
    }
    arr[left] = pivot;
    quitSort(arr,L,right-1);
    quitSort(arr,right+1,R);
}
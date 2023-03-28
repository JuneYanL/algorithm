// const rl = require("readline").createInterface({ input: process.stdin });
// var iter = rl[Symbol.asyncIterator]();
// const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
  
    let res = [25,19,91,32,6,86,54,103,58,45,102];
        
        // 保存所有数字，去重，快速排序，从小到大
    res = [...new Set(res)];
    // res = res.sort((a,b)=>{
    //     return a-b;
    // });
    quitSort(res,0,res.length-1);
    console.log(111,res);
    res.forEach(item=>{
        console.log(item);
    })
}()

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

// > 第4种没写出来
function Find(target, array)
{
    // 1. 暴力搜索
    // let res = false;
    // array.forEach(item=>{
    //     item.forEach(item1=>{
    //         console.log(item1,target,item1===target)
    //         if(item1===target) return res = true;
    //     })
    // })
    // return res;
    // 2. 一维的二分查找
    // function binarySearch(arr,target) {
    //     // return arr.includes(target)
    //     if(arr.length===0) return false;
    //     for(let left = 0,right=arr.length-1;left<=right;) {
    //         const mid = Math.floor((left+right)/2);
    //         if(arr[mid]===target) {
    //             return true;
    //         } else if(arr[mid]<target) {
    //             left = mid+1;
    //         } else {
    //             right = mid-1;
    //         }
    //     }
    //     return false;
    // }
    // const len = array.length;
    // for(let i = 0;i<len;i++) {
    //     if(binarySearch(array[i],target)) return true;
    // }
    // return false;
    // 3. 线性搜索，从左下角开始比较，大的往右，小的往上
    // let i = array.length-1,j = 0;
    // // 设定边界
    // while(i>=0&&j<array[i].length) {
    //     const num = array[i][j];
    //     if(num<target) {
    //         j++
    //     } else if(num>target) {
    //         i--;
    //     } else {
    //         return true;
    //     }
    // }
    // return false;
    // 4. 双二分查找[递归]（区域的二分查找，去掉左上或右下的四分之一）
    
}
module.exports = {
    Find : Find
};
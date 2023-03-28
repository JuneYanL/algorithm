// 空间换时间，时间换空间
// 两种都是空间换时间



/* 1. 场景如下
对于1000个元素的数组，在一千万次累加的需求下，可以使用表的结构，存储每种累加的结果，虽然需要n方除以2的空间，也就是百万的空间，也许在权衡之下也是很值的 */
function sumTable(arr) {
  let arr2 = [];
  for(let start = 0; start<arr.length;start++) {
    let sum = 0;
    arr2[start] = [];
    for(let i = start;i<arr.length;i++) {
      // console.log(start,i);
      sum+=arr[i];
      arr2[start][i] = sum;//后面不是从0开始，不能直接push
      // console.log(sum);
    }
    
  }
  return arr2;
}



/* 2. 但是如果空间不足，累加的需求也没那么多，第二种是很普遍的选择 */
function sum(arr) {
  let arr1 = [];
  arr1[0] = arr[0];
  for(let i = 1;i<arr.length;i++) {
    arr1[i] = arr1[i-1] + arr[i];
  }
  
  return arr1;
}


/* 获取一维和二维数组 */
let arr = [1,2,3,4,5,6,7,8,9,10];
let arr1 = sum(arr);
let arr2 = sumTable(arr);


/* 计算从下标为0~9的累加 */
console.log('一维数组的结果：'+arr1[9]);

console.log('二维数组的结果：'+arr2[0][9]);

/* 注意
1. 字符串与数组相加得NaN
2. js有二维数组，但每次都要先初始化 */
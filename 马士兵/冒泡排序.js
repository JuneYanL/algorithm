/* // 从左往右两两比较，最大的在右边，右边依次收缩
let arr = [3,2,5,1,6,7,3,7,8];
function turn(arr,a,b) {
  let tmp = arr[b];
  arr[b] = arr[a];
  arr[a] = tmp;
}
function bubbleSort(arr) {
  // 0~n-1
  // 0~n-2
  // 0~end
  if(arr === null || arr.length === 2) {
    return arr;
  }
  for(let end = arr.length-1;end>0;end--) {
    // 0-1 1-2 2-3 end-1~end
    for(let i = 1;i<=end;i++) {
      if(arr[i-1]>arr[i]) turn(arr,i-1,i);
    }
  }
  return arr;
}

console.log('排序前',arr);
console.log('排序后',bubbleSort(arr)); */

















/* 
复习 ×
1. 冒泡排序没有错，但交换写错了
2. 有时笃定的地方，反而会成为一个缺点
*/

// 交换
function change(arr,i,j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// 冒泡排序
function bubbleSort(arr) {
  let arr2 = arr;
  
  // 先判断特殊条件：如果不存在或只有一个数
  if(arr2&&arr2.length !== 1) {
    
    // 内循环，从前往后遍历:0-n-1;0-n-2;0-1
    // 外循环，从后往前遍历，直至剩两个数
    for(let i = arr2.length-1;i>0;i--) {
      for(let j = 1;j<=i;j++) {
        if(arr2[j-1]>arr2[j]) {
          change(arr2,j-1,j);
        }
      }
    }
  }

  return arr2
}


let arr = [31,31,13,411,194,13];
console.log('翻转前：'+arr);
let arr2 = bubbleSort(arr);
console.log('翻转后：'+arr2);










/* // 选择排序
// 思路：选择最小的值，与第一个数交换，后续依次选择最小的值，与第二、三、四个数交换
let arr = [1,2,1,92,23,21,42,213,123,41];
function selectionSort() {
  // 外循环0~n-1
  // 1~n-1
  // 2~n-1
  // i~n-1
  for(let i = 0;i<arr.length;i++) {
    // 选出最小的下标
    let minValueIndex = i;
    
    for(let j = i;j<arr.length;j++) {
      
      if(arr[j+1]<arr[minValueIndex]) {
        minValueIndex = j+1;
        
      }
    }
    // 交换
    jiaohuan(i,minValueIndex);
  }
}
function jiaohuan(a,b) {
  if(a!==b) {
    let tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
  }
  
}
console.log('打印前',arr);
selectionSort();
console.log('打印后',arr);
// 时间复杂度O(n^2),空间复杂度O(1) */


/* 
复习×
1. 内外循环的判断条件,逻辑上正确,代码不正确
2. 逻辑是外循环到倒数第二个,代码为<长度-1,但写成了<长度-2,没注意到<长度本来就减了1
3. 逻辑是内循环到最后一个,代码为<长度,但写成了<长度-1,没注意到<长度本来就减了1 */

// 交换
function change(arr,i,j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// 选择排序
function selectionSort(arr) {
  let arr2 = arr;
  if(arr2&& arr2.length!==1) {
    // 外循环:从前往后循环,0~n-1
    // 内循环:从前往后,挑最小的与前面的序号替换,0~n-1,1~n-1,n-2~n-1
    for(let i = 0;i<arr2.length-1;i++) {
      // 最小值的下标
      let min = i;
      for(let j = i+1;j<arr2.length;j++) {
        if(arr2[min]>arr2[j]) {
          change(arr2,min,j);
        }
      }
    }
  }
  return arr2;
}

let arr = [687,71253,123,417,92,01,02];
console.log('翻转前:'+arr);
console.log('翻转后:'+ selectionSort(arr));
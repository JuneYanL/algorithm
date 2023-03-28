function selectionSort(arr) {
  if(arr==null||arr.length<2) {
    return;
  }
  // 选择最小的,并交换下标
  const len = arr.length
  for(let i = 0;i<len;i++) {
    let minIndex = i;
    for(let j = i+1;j<len;j++) {
      if(arr[j]<arr[minIndex]) {
        minIndex = j;
      }
      // console.log(1)
      // break;
    }
      // break;
    swap(arr,i,minIndex);

  }
}

function bubbleSort(arr) {
  if(arr==null||arr.length<2) {
    return ;
  }
  let len = arr.length;
  // 0-n  0-n-1
  for(let end = len;end>0;end--) {
    for(let i = 1;i<=end;i++) {
      if(arr[i]<arr[i-1]) {
        swap(arr,i,i-1);
      }
    }
  }
}

function insertSort(arr) {
  if(arr==null||arr.length<2) {
    return;
  }
  // 0~1,0~2,0~n
  const len = arr.length;
  for(let end = 1;end<len;end++) {
    // 从后往前比较
    for(let i = end-1;i>=0,arr[i]>arr[i+1];i--) {
      swap(arr,i,i+1);
    }
  }
}

function shellSort(arr) {
  // 分组，组内排序用插入排序排序
  if(!arr||arr.length<2) return;
  const len = arr.length;
  // 分组，设置步长或者说增量
  for(let d = len/2;d>=1;d = Math.floor(d/2)) {
    // 循环组别
    for(let i = 0;(i+d)<len;i++) {
      // 组内进行插入排序  // 0~d,1~1+d,i~i+d,n-d,n
      for(let end = i+d;end<len;end+=d) {
        // 从后往前比较,d~d-1,d-1~d-2
        for(let k = end-d;k>=0,arr[k]>arr[k+d];k-=d) {
          swap(arr,k,k+d);
        }
      }
    }
  }
}

function mergeSort(arr) {
  if(!arr||arr.length<2) {return};
  const len = arr.length;
  for(let i = 2)
}

function swap(arr,i,j) {
  let tmp = arr[j];
  arr[j] = arr[i];
  arr[i] = tmp;
}

let arr = [23,41,41,52,122,53];
// selectionSort(arr);//选择排序
// bubbleSort(arr);//冒泡排序
// insertSort(arr);//插入排序
// shellSort(arr);// 希尔排序
mergeSort(arr)// 归并排序

console.log(arr);
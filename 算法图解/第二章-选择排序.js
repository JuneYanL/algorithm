function selectSort() {
  for(let i = 0;i<arr.length;i++) {
    let temp =  arr[i];
    let minIndex = min(i);
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  console.log(arr)
}

// 返回最小值的索引
function min(i) {
  let min = arr[i];
  let index = i;
  for(let j = i+1;j<arr.length;j++) {
    if(min>arr[j]) {
      index = j;
      min = arr[j]
    }
  }
  console.log('index',index);
  return index;
}

let arr = [2,2,10,9,8,7];

selectSort();

console.log(arr);
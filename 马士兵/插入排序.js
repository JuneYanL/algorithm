// 思路：从前往后每次往后一个，都要排序，比如第二个比第一个小，将第二个和一个个换位置，第三个比第二个小，换位，再比较第三个和第一个，如果又小，又换位。
function swap(arr,i,j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function insertSort(arr) {
  let arr2 = arr;
  // 0-1 0-2 0-n-1
  for(let end = 1;end<arr2.length;end++) {
    for(let curr = end;curr>0&&arr2[curr]<arr2[curr-1];curr--) {//判断条件容易出错：1. 判断位置不对； 2. 判断变量出错  3. 好处减少循环、减少判断
      swap(arr2,curr,curr-1);//每次两两交换
    }
  }
  return arr2;
}

let arr = [2,1,9,0,4,83,28,01,38];

console.log('前',arr);
arr = insertSort(arr);
console.log('后',arr);
/* 
// 练习1：两种形式实现sum
// 循环
function sum(arr) {
  if(arr.length === 0) {
    return 0
  }
  let sum = 0;
  for(let i = 0;i<arr.length;i++) {
    sum+=arr[i]
  }
  return sum;
}

// 递归,基线条件和递归条件都只有一个
function sum1(arr) {
  let arr1 = [...arr];
  if(arr.length !== 0) {
    
    arr1.shift();
    return arr[0]+sum1(arr1)
  
    
  } else {
    return 0;
  }
}

let arr = [2,5,7,14,2];//30
console.log(sum(arr));
console.log(sum1(arr));


arr = [];//30
console.log(sum(arr));
console.log(sum1(arr));

arr = [200];//30
console.log(sum(arr));
console.log(sum1(arr)); */


/* // 练习2：递归计算列表包含的元素数
// 基线条件：列表为空
// 递归条件：不为空
function num(arr) {
  if(arr.length===0) {
    return 0
  } else {
    arr.pop();
    
    return 1+num(arr)
  }
}
console.log(num([1,2]));
console.log(num([1,2,2,22,2]));
console.log(num([1]));
console.log(num([1]));
console.log(num([1]));
console.log(num([1])); */

/* // 计算列表中最大的数
// 用分而治之的解法
// 基数条件：为空
function maxValue(arr,max) {
  let arr1 = [...arr];
  if(arr.length===0) {
    console.log(max);
  } else {

    if(max<arr[arr.length-1]) {
      max = arr[arr.length-1]
      
    }
    arr1.pop();
    maxValue(arr1,max);
  }
}
// 用循环的解法
function maxValue1(arr) {
  let max = 0;
  for(let i = 0;i<arr.length;i++) {
    if(max<arr[i]) {
      max = arr[i]
    }
  }
  console.log(max);
}

let arr = [1,2,3,4,5,10,6,4,3,2,1];
maxValue(arr,0);
maxValue1(arr); */


// 快速排序
// 基线条件：数组只有一个或没有
// 归纳条件：数组没有或只有一个、两个、三个以上
// 基准值：任何元素都可以做基准值，但随机的选择最佳
// 递归，基准值请随机的选择
function qSort(arr) {
  if(arr.length<2) {
    return arr;
  } else {
    let less = [];
    let greater = [];
    for(let i = 1;i<arr.length;i++) {
      if(arr[i]>arr[0]) {
        greater.push(arr[i])
      } else {
        less.push(arr[i]);
      }
    }
    return qSort(less).concat(arr[0],qSort(greater));
  }
}
// 循环,双指针

let arr = [9,2,3,1,29,83,72,81,92,18];
console.log(qSort(arr));


// 最优化：三数取中+插排+聚集相等元素



// 小结
// 若大O表示法相同，那么常量的比较就有必要，比如快速排序和归并排序
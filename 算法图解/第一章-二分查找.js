/* // 先自己写：每次都截取数组，耗费空间，改进在第二版，并封装
// 时间：O(log2n)
// 第一版
function chazhao(arr,num) {
  let index = null;
  let arr1 = [...arr];
  if(arr1.length>0) {
    // arr1有数据
    if(arr1.length === 1) {
      // 只有一个数据
      if(arr1[0] === num) {
        // 正好是要找的
        index = 0;
        console.log('最后',index);

        return index;
      } else {
        index = null;
        console.log('最后',index);
        return index;
      }
    } else {
      // 获得中心数的下标
      let zhon = Math.floor(arr1.length/2);
      console.log('当前：',zhon,arr1);
      console.log(arr1[zhon] === num);
      if(arr1[zhon] === num) {
        index = zhon;
        console.log(index);
        return index;
      } else if(arr1[zhon]>num) {
        // 截取前半部分
        // if(zhon>0) {
          let arr2 = arr1.slice(0,zhon);
          return chazhao(arr2,num);
        // } else {
        //   chazhao(arr2,arr1[0])
        // }
        
      } else {
        // 截取后半部分
        if(zhon+1>arr.length) {
          let arr2 = arr1.slice(zhon+1,arr1.length);
        return zhon+1+chazhao(arr2,num);
        } else {
          return index;
        }
        
      }
    }

  } else {
    index = null;
    return index;
  }
  
  
}
let num = -1;//下标为10
let arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13];
// let arr = [11];
let index = chazhao(arr,num);
console.log('下标为：'+index);


 */

// 第二版,取消递归，用循环实现
function binary_search(list,item) {
  let low = 0;
  let high = list.length - 1;
  let res = null;
  
  if(list) {
    
    while(low<=high) {
      let mid= Math.floor((low+high)/2);
      let guess= list[mid];
      if(guess === item) {
        
        res = mid;
        break;
      } else if(guess>item) {
        
        high = mid-1;
        
      } else {
        
        low = mid +1;
      }
    }
  }
  
  return res;
}

let list = [0,1,2,3,4,5,6,7,8];
console.log(binary_search(list,0));
console.log(binary_search(list,-1));
console.log(binary_search(list,9));
console.log(binary_search(list,5));


// 练习
// 128个名字，二分查找一个名字，最多需要几步：log2 128 = 6步
// 上面列表长度翻倍后，最多需要几步？ log2 128*2 = 7步
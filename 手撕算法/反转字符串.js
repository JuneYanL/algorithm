// [牛客：NC103 反转字符串]
// https://www.nowcoder.com/practice/c3a6afee325e472386a1c4eb1ef987f3?tpId=196&tqId=37161&rp=1&ru=/exam/oj&qru=/exam/oj&sourceUrl=/exam/oj?company=239&difficulty=1&job=3&page=1&pageSize=50&search=&tab=%25E7%25AE%2597%25E6%25B3%2595%25E7%25AF%2587&topicId=196&difficulty=1&judgeStatus=undefined&tags=&title=


// 解题思路：
// 1. 反向遍历
// 2. 双指针


/**
 * 反转字符串
 * @param str string字符串 
 * @return string字符串
 */
function solve( str ) {
    let left = 0;
    let right = str.length -1;
    let strArr = [...str];
    while(left<right) {
        [strArr[left++],strArr[right--]] = [strArr[right],strArr[left]];
        // const tmp = strArr[left];
        // strArr[left] = strArr[right];
        // strArr[right] = tmp;
        // left++;
        // right--;
    }
    return strArr.join("")
}
module.exports = {
    solve : solve
};

// 3. js数组反转方法



/**
 * 反转字符串
 * @param str string字符串 
 * @return string字符串
 */
function solve( str ) {
    return str.split('').reverse().join('');
}

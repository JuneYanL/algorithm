/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

// 有四种解法，其中1和3类似，只是1计算相等的值，3寻找不相等的值并覆盖
// 2暴力破解
// 4是由于题目不要求数组顺序，所以可以从后往前覆盖

var removeElement = function(nums, val) {
    // // 1. 记录n，遍历一遍，如果当前是val，则n++，下一个，如果当前不是，则往前移动n位
    // let n = 0;let length = nums.length - 1
    // for(let i = 0; i <= length; i ++) {
    //     if (nums[i] === val) {
    //         n ++
    //     } else {
    //         nums[i - n] = nums[i]
    //     }
    // }
    // return length - n + 1

    // // 2. 暴力破解：两层for循环，一层查找，一层往前覆盖
    // let length = nums.length
    // for(let i = 0; i < length; ) {
    //     if (nums[i] === val) {
    //         for(let j = i + 1; j < length; j++) {
    //             nums[j - 1] = nums[j]
    //         }
    //         length --
    //     } else {
    //         i ++
    //     }
    // }
    // return length

    // // 3. 快慢指针
    // let fast = 0, slow = 0
    // while(fast < nums.length) {
    //     if (nums[fast] !== val) {
    //         nums[slow] = nums[fast]
    //         slow ++
    //     }
    //     fast ++
    // }
    // return slow

    // 4. 首尾指针
    let first = 0, last = nums.length - 1
    while(first <= last) {
        if (nums[first] !== val) {
            first ++
        } else {
            if (nums[last] !== val) {
                nums[first] = nums[last]
                first ++
                last --
            } else {
                last --
            }
        }
    }
    return first
};
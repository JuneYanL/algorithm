/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    // // 1. 暴力破解
    // nums  = nums.map(item => {
    //     return item * item
    // })
    // nums.sort((a, b) => a- b)
    // return nums

    // // 2. 先平方，首尾指针,找最大值
    // nums = nums.map(item => {
    //     return item * item
    // })
    // let arr = Array(nums.length)
    // let first = 0,last = nums.length -1
    // let n = nums.length - 1
    // while(first <= last) {
    //     if (nums[first] >= nums[last]) {
    //         arr[n] = nums[first]
    //         first ++
    //         n --
    //     } else {
    //         arr[n] = nums[last]
    //         last --
    //         n --
    //     }
    // }
    // return arr

    // // 3. 首尾指针找最大值时，平方
    // let arr = []
    // let k = nums.length - 1
    // for(let i = 0,j = nums.length - 1; i<=j; k --) {
    //     let left = nums[i] * nums[i]
    //     let right = nums[j] * nums[j]
    //     if (left >= right) {
    //         arr[k] = left
    //         i ++
    //     } else {
    //         arr[k] = right
    //         j --
    //     }
    // }
    // return arr

    // 4. 首尾指针，左值取负，与右值比较
    let arr = []
    for(let i = 0,j = nums.length - 1,k = nums.length - 1;i <= j; k --) {
        if(-nums[i] > nums[j]) {
            arr[k] = nums[i] * nums[i]
            i ++
        } else {
            arr[k] = nums[j] * nums[j]
            j --
        }
    }
    return arr
};


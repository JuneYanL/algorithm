/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // 1. sort(快排) 56ms
    nums1.splice(m,n,...nums2);
    nums1.sort((a,b)=>a-b);     //<0升序，return a-b ;>0降序，return b-a
    // 使用了m+n存储，sort()内部封装的是快排,外层循环m+n次，内层循环log(m+n)
    // 时间复杂度：O((m+n)log(m+n))
    // 空间复杂度:O(1)

    // // 2. 双指针68ms
    // // 遍历最多遍历m+n次 时间复杂度：O(m+n)
    // // 额外一个m+n的空间 空间复杂度：O(m+n)
    // let p1=0,p2=0;
    // let sorted = new Array(m+n).fill(0);
    // while(p1!=m || p2!=n) {
    //     if(p1 === m) {
    //         // nums1遍历完，nums2没遍历完,这里可以直接把nums2 p2之后的赋给sorted,p2=n
    //         sorted[m+p2] = nums2[p2++];
    //     } else if(p2 === n) {
    //         sorted[n+p1] = nums1[p1++];
    //     } else if(nums1[p1] <nums2[p2]) {
    //         sorted[p1+p2] = nums1[p1++];
    //     } else {
    //         sorted[p1+p2] = nums2[p2++];
    //     }
    // }
    // for(let k = 0;k!=m+n;k++) {
    //     nums1[k] = sorted[k];
    // }

    // // 3. 逆向双指针(64ms)
    // // 时间：最多循环m+n次 O(m+n)
    // // 空间：没有额外空间，两个指针 O(1)
    // let p1 = m-1,p2 = n-1;
    // let curr = 0;
    // while(p1 >= 0 || p2 >= 0) {
    //     if(p1 === -1) {//0也需要赋值
    //         curr = nums2[p2--];
    //     } else if(p2 === -1) {
    //         curr = nums1[p1--];
    //     } else if(nums1[p1]<nums2[p2]) {
    //         curr = nums2[p2--];
    //     } else {
    //         curr = nums1[p1--];
    //     }
    //     nums1[p1+p2+2] = curr;
    // }
};
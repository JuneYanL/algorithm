/* https://leetcode.cn/problems/trapping-rain-water/description/ 【接雨水】Hard
最优解：双指针
最劣解：暴力破解 */


// 自己初次的想法，找中间的最大值，再找次大的值，即可得到一个区间，相当于暴力破解，但时间复杂度不过关
  /**
   * @param {number[]} height
   * @return {number}
   */

  // 找到最大值，左右递归，找到第二大的值，直到第一和第二大的值在数组的左右两边，计算雨水量。
  var trap = function(height) {
      return digui(height)
  };
  function digui(arr) {
      if (!arr) return 0
      if (!Array.isArray(arr)) return 0
      if (arr.length < 3) return 0
      let [maxIndex, secondIndex] = findMaxAndSecondIndex(arr)
      // 最大值在中间，切割最大值，否则切割第二大的
      if (maxIndex !== 0 && maxIndex !== arr.length -1) {
          let i = maxIndex
          if (maxIndex !== arr.length-1) i++
          let all = digui(arr.slice(0, i)) + digui(arr.slice(maxIndex, arr.length))
          console.log('迭代', all, digui(arr.slice(0, i)), digui(arr.slice(maxIndex, arr.length)))
          return all
      } else if (secondIndex !== 0 && secondIndex !== arr.length -1) {
          let i = secondIndex
          if (secondIndex !== arr.length-1) i++
          let all = digui(arr.slice(0, i)) + digui(arr.slice(secondIndex, arr.length))
          console.log('迭代2', all, digui(arr.slice(0, i)) , digui(arr.slice(secondIndex, arr.length)))
          return all
      } else {
          // 都在两边，可以接雨水
          return getWater(arr, secondIndex)
      }
      
  }

  function getWater(arr, i) {
      let height = arr[i]
      let water = 0
      arr.forEach(item => {
          if(item < arr[i]) water += arr[i] - item
      })
      return water
  }

  function findMaxAndSecondIndex(arr) {
      let i = 0;
      let j = 0;
      arr.forEach((item, index) => {
          if (item >= arr[i]) {
              j = i
              i = index
          }
          if (item >= arr[j] && index !== i) j = index 
      })
      return [i, j]
  }


// 方法2：暴力破解
  /* 
  遍历数组，给每个下标找到左边和右边最大的值，即可计算当前的蓄水量
  但是时间复杂度过高：O(n^)，空间复杂度为O(1) */
  /**
   * @param {number[]} height
   * @return {number}
   */

  // 找到最大值，左右递归，找到第二大的值，直到第一和第二大的值在数组的左右两边，计算雨水量。
  var trap = function(height) {
      let leftMax = height[0]
      let rightMaxIndex = getMaxIndex(height, 1)
      let res = 0
      for(let i = 1; i <height.length;i++) {
          if (leftMax < height[i]) leftMax = height[i]
          if (i > rightMaxIndex) rightMaxIndex = getMaxIndex(height, i)
          let rightMax = height[rightMaxIndex]
          if (rightMax > leftMax) res += leftMax - height[i]
          if (rightMax <= leftMax) res += rightMax - height[i]
      }
      return res
  };

  function getMaxIndex(arr, i) {
      let maxIndex = i
      for(i;i<arr.length; i++) {
          if (arr[maxIndex] < arr[i]) maxIndex = i
      }
      console.log('33333', maxIndex)
      return maxIndex
  }


// 方法3：动态规划法
  /* 
  遍历数组，给每个下标找到左边和右边最大的值，即可计算当前的蓄水量。
  由于暴力破解每次都要找左边和右边的最大值，动态规划可以存储起来，左到右存左边的最大值和右到左存右边的最大值，遍历全部取小的值，并计算蓄水量。
  时间复杂度和空间复杂度都是O(n) */
  /**
   * @param {number[]} height
   * @return {number}
   */

  // 动态规划，三次遍历
  var trap = function(height) {
      let left = [...height]
      let right = [...height]
      let res = 0
      let l = height.length
      for(let i = 1; i < l; i++) {
          if (left[i] < left[i-1]) left[i] = left[i-1]
      }
      for(let i = l-1; i > 0; i--) {
          if (right[i-1] < right[i]) right[i-1] = right[i]
      }
      for(let i = 1; i < l; i++) {
          res += left[i] < right[i] ? left[i] - height[i] : right[i] - height[i]
      }
      return res
  };




// 方法4：栈

  /* 
  栈记录递减的柱子的下标，当遇到大于top下标的柱子，那么记录低洼蓄水量，并填补低洼，弹出栈。
  时间复杂度【只遍历一次】：O(n)  空间复杂度【只记录n个】O(n） */

// 方法5：双指针

  /* 
  从左往右，遇到低的，前进，遇到高的，记录蓄水量并切换遍历方向
  从右往左，遇到低的，前进，遇到高的，记录蓄水量并切换方向
  结束即两个指针重叠
  重叠时，如果有指针未遇到高的柱子，那么结合指针位置计算蓄水量
  时间复杂度O(n)
  空间复杂度O(1) */
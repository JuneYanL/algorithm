// https://leetcode.cn/problems/search-insert-position/description/
  // 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
  // 请必须使用时间复杂度为 O(log n) 的算法。
  /* 示例 1:

  输入: nums = [1,3,5,6], target = 5
  输出: 2
  示例 2:

  输入: nums = [1,3,5,6], target = 2
  输出: 1
  示例 3:

  输入: nums = [1,3,5,6], target = 7
  输出: 4 */


// 方法一：自己写的二分查找
  var searchInsert = function(nums, target) {
      return g(0, nums.length -1)
      function g(i,j) {
          if (i === j) {
              if(nums[i] >= target) return i
              if(nums[i] < target) return i + 1
          } else if((j - i) < 2) {
              if (nums[i] < target) return g(j, j)
              return g(i, i)
              
          } else {
              let c = Math.ceil((j - i) / 2) + i
              // if (c <= i) c = i + 1
              // if (c >= j) c = j + 1
              if (nums[c] === target) return c
              if (nums[c] > target) return g(i, c -1)
              if (nums[c] < target) return g(c + 1, j)
          }
      }
  };

// 标准答案改进1：使用右移运算符
  var searchInsert = function(nums, target) {
      return g(0, nums.length -1)
      function g(i,j) {
          if (i === j) {
              if(nums[i] >= target) return i
              if(nums[i] < target) return i + 1
          } else if((j - i) < 2) {
              if (nums[i] < target) return g(j, j)
              return g(i, i)
              
          } else {
              let c = ((j -i) >> 1) + i
              if (nums[c] === target) return c
              if (nums[c] > target) return g(i, c -1)
              if (nums[c] < target) return g(c + 1, j)
          }
      }
  };

// 改进2：换成标识符left、right、mid
  var searchInsert = function(nums, target) {
      return g(0, nums.length -1)
      function g(left,right) {
          if (left === right) {
              if(nums[left] >= target) return left
              if(nums[left] < target) return left + 1
          } else if((right - left) < 2) {
              if (nums[left] < target) return g(right, right)
              return g(left, left)
              
          } else {
              let mid = ((right -left) >> 1) + left
              if (nums[mid] === target) return mid
              if (nums[mid] > target) return g(left, mid -1)
              if (nums[mid] < target) return g(mid + 1, right)
          }
      }
  };
// 改进3：简化if else 和部分代码
  var searchInsert = function(nums, target) {
      return g(0, nums.length -1)
      function g(left,right) {
          if (left >= right) {
              if(target <= nums[left]) return left
              return left + 1
          } else {
              let mid = ((right -left) >> 1) + left
              if (nums[mid] === target) return mid
              if(target < nums[mid]) return g(left, mid -1)
              return g(mid + 1, right)
          }
      }
  };
// 改进3：递归变为循环
  var searchInsert = function(nums, target) {
      let left = 0
      let right = nums.length -1
      while(left <= right) {
          if (left >= right) {
              if(target <= nums[left]) {
                  return left
              }
              return left + 1;
          } else {
              let mid = ((right -left) >> 1) + left
              if (nums[mid] === target) {
                  return mid;
              }
              if(target < nums[mid]) {
                  right = mid - 1;
              } else {
                  left = mid + 1
              }
          }
      }
      return left
  };
// 递归的循环


// 改进4：插值查找
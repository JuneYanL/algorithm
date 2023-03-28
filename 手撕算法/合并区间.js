/*
 * function Interval(a, b){
 *   this.start = a || 0;
 *   this.end = b || 0;
 * }
 */

/**
 * 
 * @param intervals Interval类一维数组 
 * @return Interval类一维数组
 */
function merge( intervals ) {
  //  先决条件
  if(!intervals||intervals.length<2) {
    return intervals;
  }
  // 按第一个数排序
  intervals = intervals.sort((a,b)=>{
    return a.start-b.start;
  })
  let arr = [];
  // 判断合并区间的首下标和尾下标,计算最大尾元素
  let left = 0,right = 0,curr = 1;//left指向合并左边区间，right指向合并的右边区间,curr为当前判断区间
  while(true) {
    if(curr>=intervals.length) {
        // 判断是否要合并
        if(right>left) {
          arr.push(intervals[left]);
          
        } else {
          arr.push(intervals[left])
        }
        break;
      };
    if(intervals[left].end>=intervals[curr].start) {
      if(intervals[left].end<intervals[curr].end) intervals[left].end = intervals[curr].end;
      right ++;curr++;
    } else {
      // 判断是否要合并
      if(right>left) {
        arr.push(intervals[left]);
        
      } else {
        arr.push(intervals[left])
      }
      curr ++;
      left = right = curr-1;
      

    }
  }
  return arr;
}
module.exports = {
    merge : merge
};
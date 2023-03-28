// 题目：
// https://blog.csdn.net/liaoyaonline/article/details/126909191?ops_request_misc=&amp;request_id=&amp;biz_id=102&amp;utm_term=%E4%B9%9D%E5%AE%AB%E6%A0%BC%E9%94%AE%E7%9B%98%E8%BE%93%E5%85%A5&amp;utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduweb~default-5-126909191.142%5Ev59%5Epc_search_tree,201%5Ev3%5Econtrol_1&amp;spm=1018.2226.3001.4187

// 遇到#切换模式，遇到/延迟
// 遇到数字，判断当前模式，英文模式下，查看之前有多少相同的数字
let str = '#22#2#22/22/22';



const map = new Map();
map.set('0',' ');
map.set('1',',.');
map.set('2','abc');
map.set('3','def');
map.set('4','ghi');
map.set('5','jkl');
map.set('6','mno');
map.set('7','pqrs');
map.set('8','tuv');
map.set('9','wxyz');


function main(str) {
  let print = [];
  let flag = true;
  let tmp = -1;
  const l = str.length;
  for(let i = 0;i<l;i++) {
    if(str[i]!=='/'&&str[i]!=='#') {
      if(flag) {
        print.push(str[i]);
      } else {
        if(str[i-1]!==str[i]) {
          tmp = 0;
          console.log(11,tmp,str[i],map.get(str[i]));
          print.push(map.get(str[i])[tmp]);
        } else {
          console.log(22,tmp,str[i]);
          tmp++;
          if(tmp>map.get(str[i]).length-1) {
            tmp = tmp%map.get(str[i]).length;
          }
          print.splice(print.length-1,1,map.get(str[i])[tmp])
        }
        
      }
    } else {
      if(str[i]==='/') {
        tmp = -1;
      }
      if(str[i]==='#') {
        flag = !flag;
        tmp = -1;
      }
    }
    
  }
  return print;
}

let print = main(str);
console.log(print.join(''));


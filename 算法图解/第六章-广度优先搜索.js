// 由于不知道js的散列表，在此用对象代替散列表

// 建立邻居关系网
let graph = {
  'you': ['BOB','CLAIRE','ALICE'],
  'BOB': ['ANUJ','PRGGY'],
  'CLAIRE': ['THOM','JONNY'],
  'ALICE': ['PEGGY']
}

// 广度优先算法
function a(obj,start,end) {
  let dui = [obj[start]];
  let count = 0;
  let flag = true;
  while(flag&&dui[0]) {
    count++;
    for(let i = 0;i<dui[0].length;i++) {
      if(dui[0][i]===end) {
        
        flag = false;
        break;
      }
    }
    dui.shift();
    
  }
}
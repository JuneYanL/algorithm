var combine = function(n, k) {
    function backtracking(n,k,startIndex) {
        if(path.length===k) {//终止条件
            console.log(path);
            result.push([...path]);//存放结果
            return;
        }
        for(let i = startIndex;i<=n;i++) {//每层遍历
            path.push(i);// 处理结果
            backtracking(n,k,i+1);//深度遍历
            path.pop();//回溯
        }
    }
    let result = [];//存放结果集合
    let path = [];//存放单一结果
    backtracking(n,k,1);
    return result;
};

// console.log(combine(4,2));



// 216. 组合总和 III
var combinationSum3 = function(k, n) {
    // 回溯三部曲：参数和返回值，终止条件，单层搜索过程
    function backtracking(n,k,startIndex,sum) {
        if(path.length === k) {
            // const sum = path.reduce((pre,cur)=>{
            //     return pre+cur;
            // },0)
            if(sum == n) {
                result.push([...path]);
            }
            return ;

        }
        
        for(let i = startIndex;(i<=(9-k+path.length+1))&&sum<=n;i++) {
            sum+=i;
            path.push(i);
            backtracking(n,k,i+1,sum);
            sum-=i;
            path.pop();
        }
    }
    let result = [];
    let path = [];
    // let sum =0;
    backtracking(n,k,1,0);
    return result;
};

// console.log(combinationSum3(2,18));

// 17
var letterCombinations = function(digits) {
    function backtracking(str,index) {
        // 2. 终止条件，path的长度>=str的长度
        if(path.length==str.length) {
            result.push(path);
            console.log(111,result,path);
            return ;
        }
        
            console.log(333,letter,result,path);
        for(let i = 0;letter[str[index]]&&i<letter[str[index]].length;i++) {//宽度，为当前数字对应的字母数量
            console.log(222,letter,result,path);
            path+=letter[str[index]][i];
            backtracking(str,index+1);// 递归深度，为str的当前下标
            path=path.substr(0,index);
        }
    }
    // 1. 参数和返回值
    let result = [];
    let path = "";
    const letter = {
        2:'abc',
        3:'def',
        4:'ghi',
        5:'jkl',
        6:'mno',
        7:'pqrs',
        8:'tuv',
        9:'wxyz',
    }
    backtracking(digits,0)
    return result;
};

console.log(letterCombinations("23"));
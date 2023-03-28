var partition = function(s) {
    let result = [];
    let path = [];
    function backtracking(s,startIndex) {
        if(startIndex>=s.length) {
            result.push([...path]);
            return ;
        }
        for(let i = startIndex;i<s.length;i++) {
            console.log('下标',startIndex,i);
            console.log('字符串截取',s.substring(startIndex,i+1),ishuiwen(s,startIndex,i));
            if(ishuiwen(s,startIndex,i)) {
                path.push(s.substring(startIndex,i+1));
                backtracking(s,i+1);
                path.pop();
            } 
        }
    }
    function ishuiwen(s,start,end) {
        while(start<=end) {
          console.log('判断',start,end,s[start],s[end]);
            if(s[start]!==s[end]) return false;
            start++;end--;
        }
        return true;
    }
    backtracking(s,0);
    return result;
};

console.log(partition('aab'));
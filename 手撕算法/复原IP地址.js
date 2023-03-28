var restoreIpAddresses = function(s) {
function back(s,point,startIndex) {
    if(point === 3) {
        if(valid(s,startIndex,s.length-1)) {
            path.push(s.substring(startIndex,s.length));
            result.push(path.join('.'));
            path.pop();
        }
        return ;
    }
    for(let i = startIndex;i<s.length&&point<3;i++) {
        if(valid(s,startIndex,i)) {
            const str = s.substring(startIndex,i+1);
            path.push(str);
            back(s,point+1,i+1);
            if(str == '11') console.log('zzzz',path);
            path.pop();
            if(str == '11') console.log('zzzz',path);
        } 
    }
}
function valid(s,start,end) {
    if(start>end) return false;
    const str = s.substring(start,end+1);
    if(Number(str)!=0&&str[0]==0) return false;//开头不能为0
    if(str ==0&&end>start) return false;
    if(Number(str>255)) return false;
    return true;
}
if(!s.match(/\d/g)) return [];
if(s.length>12) return [];
let result = [];
let path = [];
back(s,0,0);
return result;
};

console.log(restoreIpAddresses("010010"));
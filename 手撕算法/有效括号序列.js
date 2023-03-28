// > 一开始用回文字符串解，过于麻烦，后面用栈解，发现十分简单
/**
  * 
  * @param s string字符串 
  * @return bool布尔型
  */
function isValid( s ) {
    // 栈
    if(s.length%2) return false;
    let stack = [];let n = 0;
    for(let i = 0;i<s.length;i++) {
        if(['(','{','['].includes(s[i])) {
            stack.push(s[i])
            n++;
        } else {
            const a = stack.pop();
            if(s[i]==='}'&&a!=='{') {
                return false;
            } else if(s[i]===')'&&a!=='(') {
                return false;
            } if(s[i]===']'&&a!=='[') {
                return false;
            } 
            n--;
        }
    }
    if(n===0) return true;
    return false;
}
module.exports = {
    isValid : isValid
};
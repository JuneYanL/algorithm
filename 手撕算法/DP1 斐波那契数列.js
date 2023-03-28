while(n = await readline()){
        // 把每级台阶存下来，Fn= fn-1+fn-2+...+fn-n
        // 由于台阶数和级数像登录，所以简化公式：fn = 2*fn-1
        if(n<2) {console.log(1);break}
        let res = 1;
        for(let i = 2;i<=n;i++) {
            res*=2;
        }
        console.log(res)

        // 甚至更简化为：fn = 2^n-1
        // let res = 2**(n-1);
        // let res = Math.pow(2,n-1);
        // console.log(res)
    }
// // const num = parseFloat(readline());

// // function getSimilar(num) {
// // //     let num2 = num*10%10;
// // //     let res = parseInt(num)+1;
// // //     if(num2 <5) {
// // //         res = parseInt(num);
// // //     }
// // //     console.log(res);
// //     let res = Math.round(num);
// //     console.log(res)
// // }

// // // getSimilar(num);
// // res = '1234'
// // let num = 1;

// // res.length
// // res.length = 2;

// // console.log(res.length);

// let str = 'Aaabb';
// let k = 'a';

// let mp = {};
// str = str.toLowerCase();//转小写
// for(let i = 0;i<str.length;i++) {
    
//     if(mp[str[i]]) {
//         mp[str[i]] = 1;
//     } else {
//         mp[str[i]]++;
//     }
//     console.log(mp[str[i]]);
// }
// if(k>='A'&&k<='Z') {
// //     目标为大写
//     k = k.toLowerCase();
// }
// // console.log(mp[target])
// if(mp[k]) {
//     console.log(mp[k]);    
// } else {
//     console.log(0)
// }

let str = 'cwqtonllubtsxakxwffhrckqzbhsiaxlkanwcmpxpkukcytldoiidhnqonhbwexdvdw';
let l = str.length;
if(l<=8) {
    while(str.length !== 8) {
        str = str+'0';
        
    }
    console.log(str);
} else {
    l = Math.floor(l/8);
    
    for(let i = 0;i<l;i++) {
        console.log(str.substring(i*8,(i+1)*8))
    }
    console.log('是否有余数',l)
    if(l%8!=0) {
        let laststr = str.substring(l*8);
    while(laststr.length!==8) {
        laststr +='0';
    }
    console.log(laststr);
    }
}
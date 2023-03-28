// // // 随机数[0,1)等概率

// // // 场景1：让[0,1)的概率变为二次幂，三次幂则三个ran()
// // function ran() {
// //   return Math.random();
// // }
// // function pow(x) {
// //   let count = 0;
// //   let sum = 1000000;
// //   for(let i = 0;i<sum;i++) {
// //     let pro = Math.max(ran(),ran())
// //     if(pro<x) {
// //       count ++;
// //     }
// //   }
  
  
// //   return count/sum;
// // }
// // function yanzheng(x) {
// //   return x*x;
// // }

// // let x = 0.6
// // console.log('验证'+yanzheng(x));
// // console.log('实验'+pow(x));

// // 场景2：Math.min(ran();ran())的概率
// /* 推测过程：
// 1. max是&&，即都在0~x，才会取到0~x
// 2. min是||，即只要有个在0~x，就会取到0~x
// 3. &&的概率容易求，||的概率多样，但可以1-&&=||
// 4. 该题变为求都在x~1的概率，即（1-x）的幂次
// 5. ||即1-（1-x)的幂次

//   */
// function ran() {
//   return Math.random();
// }
// function yanzheng(x) {
//   return 1-Math.pow(1-x,3);
// }
// function shiyan(x) {
//   let count = 0;
//   for(let i = 0;i<10000;i++) {
//     if(Math.min(ran(),ran(),ran())<x) {
//       count ++;
//     }
//   }
//   return count/10000;
// }

// let x = 0.1;
// console.log(yanzheng(x));
// console.log(shiyan(x));


// 场景3： 从x-y随机

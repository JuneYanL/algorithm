/* // n*n-1*n-2*···*1
function diedai() {
  let n = 4;
  for(let i = n-1;i>0;i--) {
    n *= i
  }
  console.log(n);
}

function digui(n) {
  if(n==1) {
    return 1;
  } else {
    return n*digui(n-1)
  }
}

diedai();
console.log(digui(4)); */

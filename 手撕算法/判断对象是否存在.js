//全局
let c;
let d = 1;

console.log(1,this.hasOwnProperty('c'))//true
  console.log(2,this.hasOwnProperty('d'))//false

function judge() {
  this.a;
  this.b = 1;
  console.log(3,this.hasOwnProperty(this.a))//false
  console.log(4,this.hasOwnProperty(this.b))//true

}

judge();
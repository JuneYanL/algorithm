// 第一种旋转：单点旋转
let body = document.querySelector("body");
let img_div = body.querySelector('.img');

let start,end;//开始和结束的坐标
let originCoorginate = getOriginCoordinate();//图片中心点坐标
let flag = false;//是否监听鼠标移动事件
let flag1 = true;//节流的变量
let currAngle = 0;//鼠标抬起时固定的角度
let start1,end1;

// 绑定事件
body.addEventListener("mousedown",(e)=>{
    console.log('鼠标按下',e);
    body.addEventListener("mousemove",mousemoveFn)
    start = [e.clientX,e.clientY];
})



body.addEventListener("mouseup",(e)=>{
  console.log('鼠标抬起',e);
  body.removeEventListener("mousemove",mousemoveFn)
  
  end = [e.clientX,e.clientY]
  let point = getPoint();
  let angle = getRotationAngle(...point);
  
  flag1 = true;
  currAngle += angle;
  rotatePicture(currAngle);
})

body.addEventListener("touchstart",(e)=>{
  console.log(e);
  start1 = [e.touches[0].clientX,e.touches[0].clientY];
})

body.addEventListener("touchmove",(e)=>{

  end1 = [e.touches[0].clientX,e.touches[0].clientY]
        let point = getPoint();
        let angle = getRotationAngle(...point);
        rotatePicture(currAngle+angle);
       
        if(flag1) {
          setTimeout(()=>{
            start1 = end1;
            flag1 = true;
            currAngle += angle;
            rotatePicture(currAngle);
          },20)
        }
})

body.addEventListener("touchend",(e)=>{
  
  end1 = [e.touches[0].clientX,e.touches[0].clientY]
  let point = getPoint();
  let angle = getRotationAngle(...point);
  
  flag1 = true;
  currAngle += angle;
  rotatePicture(currAngle);
})

function mousemoveFn(e) {
    
        console.log('鼠标移动',e);
        end = [e.clientX,e.clientY]
        let point = getPoint();
        let angle = getRotationAngle(...point);
        rotatePicture(currAngle+angle);
       
        if(flag1) {
          setTimeout(()=>{
            start = end;
            flag1 = true;
            currAngle += angle;
            rotatePicture(currAngle);
          },20)
        }
}

// 传角度，旋转图片
function rotatePicture(angle) {
  console.log(`将图片旋转${angle}度`);
  img_div.style.transform = `rotate(${angle}deg)`;
}

// 计算并返回图片在可视区域上(视口）的原点坐标,有些浏览器（FF2、Safari）不支持getBoundingClientRect方法
// https://www.ancii.com/aeivd35d/
function getOriginCoordinate() {
  
  // 1. 获取可视区域的4个值：top\left\right\bottom
  let domCoorginate = img_div.getBoundingClientRect();
  let originCoorginate = [(domCoorginate.right+domCoorginate.left)/2,(domCoorginate.top+domCoorginate.bottom)/2]
  console.log(`返回图片中心点的坐标：${originCoorginate}`);
  return originCoorginate;
  
}

// 根据中心点和两点坐标，求最终两点坐标,返回[x1,y1,x2,y2]
function getPoint() {
  // originCoorginate,start,end
  let point = [];
  point[0] = start[0] - originCoorginate[0]
  point[1] = start[1] - originCoorginate[1]
  point[2] = end[0] - originCoorginate[0]
  point[3] = end[1] - originCoorginate[1]
  console.log('两点坐标',point);
  return point;
}

// 传点击抬起和按下的坐标（两点坐标），计算图片旋转角度
function getRotationAngle(x1,y1,x2,y2) {
  // 计算角度，向量积
    // a×b = |a|×|b| × sinΦ     (1)
    // a×b = ax × by - ay × bx  (2)
    // 从a×b的正负可知方向，sinΦ的值可知角度
    let axb = x1 * y2 - x2 * y1; //a×b的值
    let sine = 0; //正弦值
    let radian = 0; //弧度
    let angle = 0;//角度
    
      sine =
        axb /
        (Math.pow(x1 * x1 + y1 * y1, 0.5) *
          Math.pow(x2 * x2 + y2 * y2, 0.5));
      
      radian = Math.asin(sine);
      angle = radian *180 /Math.PI;
      console.log(`axb的值：  ${axb},正弦值：${sine},弧度：${radian},角度：${angle}`);
      
      return angle;
    
}



/* 注意：
1、Math.sin这些计算出来的结果是弧度，一弧度等于半径，需要弧度*180/Math.PI，计算角度
 */

/* // 旋转动画测试
for(let i = 0;i<100;i++) {
  setTimeout(()=>{
    rotatePicture(i);
  },i*50);
} */

/* // 这个是手指触摸，真机调试
body.addEventListener("touchstart", (e) => {
  if (e.touches.length === 2) {
    // 获取两点的初始位置
    x1 = e.touches[0].clientX;
    x2 = e.touches[1].clientX;
    y1 = e.touches[0].clientY;
    y2 = e.touches[1].clientY;

    console.log("手指初始位置信息", e.touches);
  }
});

body.addEventListener("touchmove", (e) => {
  console.log("离开", e);
  if (e.touches.length === 2) {
    x3 = e.touches[0].clientX;
    x4 = e.touches[1].clientX;
    y3 = e.touches[0].clientY;
    y4 = e.touches[1].clientY;
    console.log("手指末尾位置信息", e.touches);
    // 计算角度，向量积
    // a×b = |a|×|b| × sinΦ     (1)
    // a×b = ax × by - ay × bx  (2)
    // 从a×b的正负可知方向，sinΦ的值可知角度
    let c = x1 * y2 - x2 * y1; //a×b的值
    let sinAngle = 0; //正弦值
    let angle = 0; //角度
    console.log("c的值：" + c);
    if (c) {
      // 不等于0且存在
      sinAngle =
        c /
        (Math.pow(x1 * x1 + y1 * y1, 0.5) *
          Math.pow(x2 * x2 + y2 * y2, 0.5));
      let angle = Math.asin(c);
      console.log("角度为", angle);
    }
  }
});


body.addEventListener("touchend",(e)=>{

}) */


































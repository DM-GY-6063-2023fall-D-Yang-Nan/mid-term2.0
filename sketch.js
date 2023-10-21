let horizon;
let trees = [];

// 颜色调色板
let white = '#c4f0c2';
let brown = '#2d1b00';
let darkblue = '#1e606e';
let lightblue = '#5ab9a8';

let targetSpeed = 8;  // 目标速度


function preload(){
  img = loadImage('reshuiping-01.png');
}

function setup() {
    createCanvas(windowWidth,windowHeight);
    
    noSmooth();
    strokeCap(SQUARE);

    // 初始化地平线
    horizon = (height-(height/4));

    // 初始化树
    for (let i = 0; i < 60; i++) {  // 这里我们添加了40棵树
        trees.push(new Tree(random(width), random(horizon, height)));
    }
}

function draw() {
    background(darkblue);

    stroke('LemonChiffon');
  strokeWeight(1);
  noFill();
  translate(width/2,height/2);
  for (let i = 0; i < 10; i++) {
    let r = randomGaussian(0, width / 4);
    arc(0, -height / 4, r, r, random(0, 360), random(0, 360));
  }
  
  let t = 255;
  // background(255, 10);

  //leaf
translate(-width/2,-height/2);
    // 画地平线
    stroke(white);
    fill(brown);
    line(0, horizon, width, horizon);
    noStroke();
    rect(0, horizon, width, height);

    // 更新和显示树
    for (let i = 0; i < trees.length; i++) {
        let tree = trees[i];
        tree.update();
        tree.move();  // 调用 move 方法
        tree.display();

        // 检查树是否已经移动到画布的右边界
        if (tree.x > width) {
            // 在左边更新新的树
            trees[i] = new Tree(-100, random(horizon, height));
        }
    }

    //window
noFill();
stroke(0);
strokeWeight(100);
rect(0,0,width,height,100);
strokeWeight(10);
rect(80,80,width-150,height-150,60);

image(img,130,height-500);
}

class Tree {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.x2 = this.x + random(-10, -5);
        this.y2 = this.y - random(150, windowHeight/2);
        this.x3 = this.x2 + random(-40, 40);
        this.x4 = this.x3 + random(0, 10);
        this.offsetX = new Array(10).fill(0).map(() => random(-50, 50));
        this.offsetY = new Array(10).fill(0).map(() => random(-30, 15));
        this.s = new Array(10).fill(0).map(() => random(80, 200));
        this.jit = random(1, 2);
        this.speed = targetSpeed;  // 初始化速度
    }

    update() {
        // 使树向鼠标摆动
        if (mouseX > width/2) {
            if (this.x3 < (this.x + 25)) {
                this.x3 = this.x3 + this.jit;
                this.x4 = this.x4 + this.jit;
            } else {
                this.x3 = this.x3 - this.jit;
                this.x4 = this.x4 - this.jit;
            }
        } else {
            if (this.x3 > (this.x - 40)) {
                this.x3 = this.x3 - this.jit;
                this.x4 = this.x4 - this.jit;
            } else {
                this.x3 = this.x3 + this.jit;
                this.x4 = this.x4 + this.jit;
            }
        }
    }

    move() {  
        if (mouseIsPressed) {
            this.speed = lerp(this.speed, 0, 0.03);  // 当鼠标按下时，逐渐减小速度到0
        } else {
            this.speed = lerp(this.speed, targetSpeed, 0.03);  // 当鼠标抬起时，逐渐恢复速度
        }
        this.x += this.speed;
        this.x2 += this.speed;
        this.x3 += this.speed;
        this.x4 += this.speed;
    }

    display() {
        strokeWeight(1);
        stroke(darkblue);
        fill(white);
        // 树干
        quad(this.x, this.y, this.x2, this.y, this.x3, this.y2, this.x4, this.y2);

        // 叶子
        for (let i = 0; i < 10; i++) {
            stroke(white);
            strokeWeight(2);
            ellipse(this.x4 + this.offsetX[i], this.y2 + this.offsetY[i], this.s[i], this.s[i]);
        }
        for (let i = 0; i < 10; i++) {
            noStroke();
            fill(lightblue);
            ellipse(this.x4 + this.offsetX[i], this.y2 + this.offsetY[i], this.s[i], this.s[i]);
        }

        
        
    }
}
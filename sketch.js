let Black = 250;
let Blue = 250;
let Purple = 250;
let Orange = 250;
let Size01 = 80;
let Size02 = 120;
let Size03 = 160;
let Size04 = 200;
let Size00 = 40;

function windowResized() {
  console.log("resized");
  let width = document.querySelector("#sketch-div").clientWidth;
  console.log(width);
  let height = document.querySelector("#sketch-div").clientHeight;
  console.log(height);
 
  resizeCanvas(width, windowHeight);
  
}

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight)
  canvas.parent('sketch-div')
  canvas.position(0, 0)
  canvas.style('z-index', '-1')
  rectMode(CENTER);
  frameRate(100);
}

function draw() {
  background(random(230, 255), random(255, 230));
  noStroke();
  
  push();
  fill('orange');
  translate(width/2,height/2);
  rotate(-radians(frameCount + 10));
  //Orange = Orange + 2.5;
  //Size04 = Size04 + 0.3;
  rect(0, 0, Size04);
  pop();
  
  push();
  fill('orange');
  translate(width/2,height/2);
  rotate(radians(frameCount + 10));
  //Orange = Orange + 2.5;
  //Size04 = Size04 + 0.3;
  rect(0, 0, Size04);
  pop();
  
  push();
  fill('orange');
  translate(width/2,height/2);
  rotate(-radians(frameCount/4));
  //Orange = Orange + 2.5;
  //Size04 = Size04 + 0.3;
  rect(0, 0, Size04);
  pop();
  

  push();
  fill('purple');
  translate(width/2,height/2);
  rotate(radians(frameCount + 50));
  //Purple = Purple + 3.2;
  //Size03 = Size03 + 0.4;
  rect(0, 0, Size03);
  pop();
  
  push();
  fill('purple');
  translate(width/2,height/2);
  rotate(-radians(frameCount - 50));
  //Purple = Purple + 3.2;
  //Size03 = Size03 + 0.4;
  rect(0, 0, Size03);
  pop();
  
  push();
  fill('white');
  translate(width/2,height/2);
  rotate(-radians(frameCount/2));
  //Blue = Blue + 4;
  //Size02 = Size02 + 0.6;
  rect(0, 0, Size02);
  pop();
  
  push();
  fill('black');
  translate(width/2,height/2);
  rotate(radians(frameCount/4));
  //Black = Black + 5;
  //Size01 = Size01 + 0.8;
  rect(0, 0, Size01);
  pop();
  
  push();
  fill('black');
  translate(width/2,height/2);
  rotate(-radians(frameCount/8));
  //Black = Black + 5;
  //Size01 = Size01 + 0.8;
  rect(0, 0, Size01);
  pop();
  
  push();
  fill(random(200, 255), random(255, 200));
  translate(width/2,height/2);
  rotate(-radians(frameCount/2));
  //Black = Black + 5;
  //Size01 = Size01 + 0.8;
  rect(0, 0, Size00);
  pop();
  
  
  
  
  
}


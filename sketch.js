let Black = 250;
let Blue = 250;
let Purple = 250;
let Orange = 250;
let Size01 = 80;
let Size02 = 120;
let Size03 = 160;
let Size04 = 200;
let Size00 = 40;

let scene = 1;
let objects = [];

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
  if (mouseIsPressed === true) {
    if (scene < 2) {
      scene++;
    }

    else {
      scene = 1;
    }

  }

  if (scene == 1) {
    scene1();
  }

  if (scene == 2) {
    scene2();
  }

}

function scene1() {

  push();
  if (objects.length < 600) { // Set a max count
    objects.push({ x: random(width), y: random(height) });
  }

  for (let obj of objects) {
    
    let x2 = mouseX;
    let y2 = mouseY;
    line(obj.x, obj.y, x2, y2);
    
    stroke('white');
    
    let strokeW = random(10, 20);
    strokeWeight(strokeW); 
  }
  pop();
  
  push();
  if (objects.length < 600) { // Set a max count
    objects.push({ x: random(width), y: random(height) });
  }

  for (let obj of objects) {
    // Draw a line from the object position to a random point
    let x2 = mouseX;
    let y2 = mouseY;
    line(obj.x, obj.y, x2, y2);
    
    
    
    if (mouseIsPressed === true) {
      stroke('yellow');
      let strokeW2 = 20;
      strokeWeight(strokeW2); 
    }
    
    else {
      stroke(random(0,100), random(0, 0), random(0,200));
      let strokeW = random(4, 8);
      strokeWeight(strokeW); 
    }
     
  }
  pop();

}



function scene2() {

  background('purple');
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

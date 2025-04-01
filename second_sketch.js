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
    
    frameRate(3);
    noStroke();

  }
  
  function draw() {
    background(0);
    //rectMode(CENTER);
    
    if (frameCount % 0.5 == 0) {  
      
      for (let x = 0; x < windowWidth; x += 50) {
      for (let y = 0; y < windowHeight; y += 50) {
        push();
        translate(x + 50, y + 50); 
        for (let i = 0; i < 100; i+= 10) {
          push();
          rotate(radians(i * 50 * frameCount));
          translate(random(100, 200));
          fill(random(200, 250), random(0, 250), random(200, 250));
          ellipse(0, 0, random(0,40), random(0,20));
          pop();
        }
        pop();
        
        
      }
    }
  }
  
  }
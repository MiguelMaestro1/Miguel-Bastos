function setup() {
  canvas = createCanvas(450,450);
  background('lavender');
  canvas.parent('processing');
  noLoop();
  colorMode(RGB, 255, 255, 255, 1);
  fill(178, 34, 34,.5);
  angleMode(DEGREES)
  rectMode(CENTER)
}

function draw() {
  noStroke();
  translate(235,235);
  rect(0,0,200,200);
  
  
  rotate(45);
  
  rect(0,0,200,200);

  push()
  fill('yellow')
  rotate(-45)
  rect(0,0,50,50)
  pop()
}

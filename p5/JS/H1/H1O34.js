var aantal = 100;
var x;
var y;
var diameter;

function setup() {
  canvas = createCanvas(451,451);
  canvas.parent('processing');
  frameRate(5);
  //noLoop();
  strokeWeight(4);
  stroke('steelblue');
}

function draw() {
  background('white');
  for(var n = 1; n <= aantal;n++) {
    tekenCircel(x,y,diameter)

    x = random(50,400)
    y = random(50,400)
    diameter = random(25,75)
  }

}
function tekenCirkel ()
 {circle(x,y,diameter)}

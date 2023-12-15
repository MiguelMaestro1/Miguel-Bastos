var aantalLagen = 100;
var breedte = 90/n;
var hoogte;

function setup() {
  hoogte = breedte/2;

  canvas = createCanvas(900,450);
  background('silver');
  fill('lightslategray');
  stroke('darkslategray');  
  canvas.parent('processing');
  noLoop();
}

function draw() {
  translate(0,height - hoogte);
  tekenPiramide(aantalLagen);
}

function tekenPiramide(n) {
  if (n>0) {
    for (var nr = 0;nr < n;nr++) {
      rect(nr*breedte,0,breedte,hoogte);
    }
    translate(breedte / 2,-hoogte);
    n--;
    tekenPiramide(n);
  }
}

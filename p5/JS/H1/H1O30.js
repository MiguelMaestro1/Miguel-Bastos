kleur='white';

function setup() {
  canvas = createCanvas(451,451);
  canvas.parent('processing');
  background('coral');
}

function draw() {
  for (var rij = 0;rij < 450;rij += 50) {
    for (var kolom = 0;kolom < 450;kolom += 50) {
      if (kolom === 300 && rij === 150)
      fill(kleur);
      rect(kolom,rij,50,50);
    }
  }
  
}
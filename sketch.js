colourV = prompt("Colour Value", "100");
function setup() {
  var w = window.innerWidth;
  var h = window.innerHeight;
  createCanvas(w, h);
  background(255);
  point(40, 40);
  frameRate(20);

  for (var i = 0; i <= width; i++) {
    // noprotect
    for (var j = 0; j <= height; j++) {
      // noprotect
      stroke(colourV, (j / height) * 255, (i / width) * 255);
      point(i, j);
    }
  }
}

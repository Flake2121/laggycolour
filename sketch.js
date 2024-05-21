function setup() {
  var w = window.innerWidth;
  var h = window.innerHeight;
  createCanvas(w, h);
  background(255);
  point(40, 40);
  frameRate(20);
}

function draw() {
  if (mouseIsPressed) {
    for (var i = 0; i <= width; i++) {
      // noprotect
      for (var j = 0; j <= height; j++) {
        // noprotect
        stroke((mouseX / width) * 255, (j / height) * 255, (i / width) * 255);
        rect(i, j, 1, 1);
      }
    }
  }
}

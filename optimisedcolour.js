function draw() {
  //requestFullscreen()
  var w = window.innerWidth;
  var h = window.innerHeight;
  createCanvas(255, 255);
  background(255);
  point(40, 40);
  frameRate(20);

  for (var i = 0; i <= width; i++) {
    // noprotect
    for (var j = 0; j <= height; j++) {
      // noprotect
      stroke((mouseX/width)*255, (j / height) * 255, (i / width) * 255);
      point(i, j);
    }
  }
}

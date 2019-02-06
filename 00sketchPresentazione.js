var cover;
var text;

 function preload() {
   cover = loadImage('./assets/cover.jpg');
   text = loadImage('./assets/cover text.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);



  image(cover, 0, 0, cover.width*1.4, cover.height*1.4);

imageMode(CENTER);
  image(text, windowWidth/2, windowHeight/2, text.width/5.5, text.height/5.5);
}

function draw() {


  if (keyIsPressed == true && keyCode == ENTER) {
    window.location.href="01sketchGel.html";
  }
}

  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }

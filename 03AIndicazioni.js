var text;

 function preload() {
   text = loadImage("./assets/indications.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

  imageMode(CENTER);
  image(text, windowWidth/2, windowHeight/2 + 50, text.width/3, text.height/3);
}

function draw() {

  if (keyIsPressed == true && keyCode == ENTER) {
    window.location.href="03colonieBatt.html";
  }
}

  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }

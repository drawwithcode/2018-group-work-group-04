//this var is outside of everything
//so it is accesible by everything
var position1 = {
  'x': 0,
  'y': 0
}
var position2 = {
  'x': 200,
  'y': 250
}
var position3 = {
  'x': 200,
  'y': 250
}

var drop;

var dragging1 = false;
var dragging2 = false;
var dragging3 = false;

var inserito1 = 0;
var inserito2 = 0;
var inserito3 = 0;

var check1 = 0;
var check2 = 0;
var check3 = 0;

function preload() {
  drop = loadImage("./assets/drop.png");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background('white');

  image(drop, windowWidth-500, 100, drop.width/3, drop.height/3);

  ellipseMode(CENTER);

  // stroke(144, 144, 151);
  // strokeWeight(2);
  // fill(242, 242, 247);
  // ellipse(500, windowHeight/2, 510);
  // strokeWeight(1);
  // ellipse(500, windowHeight/2, 500);

  noStroke();
  fill(193, 241, 255);
  ellipse(500, windowHeight/2, 500);

  var color01 = color("#E03F5C");
  var color02 = color("#49C986");
  var color03 = color("#5A4AF5");
  var colorIns = color("#C1F1FF");

  if (dragging1 == true) {
    position1.x = mouseX;
    position1.y = mouseY;
  } else if (dragging1 == false && inserito1 == 0) {
    position1.x = windowWidth - 450;
    position1.y = windowHeight / 2 + 250;
  } else if (dragging1 == false && inserito1 == 1) {
    color01 = colorIns;
    check1 = 1;
  }

  if (dragging2 == true) {
    position2.x = mouseX;
    position2.y = mouseY;
  } else if (dragging2 == false && inserito2 == 0) {
    position2.x = windowWidth - 325;
    position2.y = windowHeight / 2 + 250;
  } else if (dragging2 == false && inserito2 == 1) {
    color02 = colorIns;
    check2 = 1;
  }

  if (dragging3 == true) {
    position3.x = mouseX;
    position3.y = mouseY;
  } else if (dragging3 == false && inserito3 == 0) {
    position3.x = windowWidth - 200;
    position3.y = windowHeight / 2 + 250;
  } else if (dragging3 == false && inserito3 == 1) {
    color03 =colorIns;
    check3 = 1;
  }

  fill(color01);
  ellipse(position1.x, position1.y, 60);

  fill(color02);
  ellipse(position2.x, position2.y, 60);

  fill(color03);
  ellipse(position3.x, position3.y, 60);

  // if (keyIsPressed == true && keyCode == ENTER) {
  //   window.location.href="03colonieBatt.html";
  // }
  if (check1 + check2 + check3 == 3) {
    window.location.href = "03AIndicazioni.html";
  }
}


function mousePressed() {
  var distance1 = dist(position1.x, position1.y, mouseX, mouseY);

  var distance2 = dist(position2.x, position2.y, mouseX, mouseY);

  var distance3 = dist(position3.x, position3.y, mouseX, mouseY);

  if (distance1 <= 25) {
    dragging1 = true;
    inserito1 = 1;
  }

  if (distance2 <= 25) {
    dragging2 = true;
    inserito2 = 1;
  }

  if (distance3 <= 25) {
    dragging3 = true;
    inserito3 = 1;
  }
}

function mouseReleased() {
  var petriDistance = dist(400, windowHeight/2, mouseX, mouseY);
  if (petriDistance <= 200) {
    dragging1 = false;
    dragging2 = false;
    dragging3 = false;
  }
}

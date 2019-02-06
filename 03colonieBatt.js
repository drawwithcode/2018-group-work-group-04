var myImage;
var canvas;
var places;
var bact01, bact02, bact03, bact04, bact05, bact06;
var curImg01;
var curImg02;
var curImg03;
var curImg04;
var curImg05;
var curImg06;
var curIcon;

var placeIcon01;
var placeIcon02;
var placeIcon03;
var placeIcon04;
var placeIcon05;
var placeIcon06;

var myBact;

var text;

function preload() {
  // myImage = loadImage('./assets/sloth.jpeg');
  bact01 = loadImage('./assets/bact01.png');
  bact02 = loadImage('./assets/bact02.png');
  bact03 = loadImage('./assets/bact03.png');
  bact04 = loadImage('./assets/bact04.png');
  bact05 = loadImage('./assets/bact05.png');
  bact06 = loadImage('./assets/bact06.png');

  curImg01 = loadImage('./assets/testoBact01.png');
  curImg02 = loadImage('./assets/testoBact02.png');
  curImg03 = loadImage('./assets/testoBact03.png');
  curImg04 = loadImage('./assets/testoBact04.png');
  curImg05 = loadImage('./assets/testoBact05.png');
  curImg06 = loadImage('./assets/testoBact06.png');

  curIcon = loadImage('./assets/curIcon.png');

  placeIcon01 = loadImage('./assets/gym.png');
  placeIcon02 = loadImage('./assets/kitchen.png');
  placeIcon03 = loadImage('./assets/transport.png');
  placeIcon04 = loadImage('./assets/plants.png');
  placeIcon05 = loadImage('./assets/sea.png');
  placeIcon06 = loadImage('./assets/soil.png');

  text = loadImage('./assets/look.png');
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  frameRate(60);
  canvas = createCanvas(windowWidth * 2, windowHeight * 2);
  background("#C1F1FF");
}


function draw() {
  background("#C1F1FF");

  image(text, windowWidth/2 + window.scrollX, 80 + window.scrollY, text.width/3, text.height/3);

  myBact01 = new Bact(bact01, 500, 300, bact01.width /3, bact01.height / 3, '04bact01.html');

  myBact02 = new Bact(bact02, 1200, 1400, bact02.width / 4, bact02.height / 4, '04bact02.html');

  myBact03 = new Bact(bact03, 2200, 1400, bact03.width / 6, bact03.height / 6, '04bact03.html');

  myBact04 = new Bact(bact04, 1500, 600, bact04.width / 6, bact04.height / 6, '04bact04.html');

  myBact05 = new Bact(bact05, 2700, 400, bact05.width / 6, bact05.height / 6, '04bact05.html');

  myBact06 = new Bact(bact06, 300, 900, bact06.width / 6, bact06.height / 6, '04bact06.html');



  ///QUESTE SONO LE CURIOSITÀ/////
  cur1 = new Curiosities(1000, 300, 60, curImg01);
  cur1.display();

  cur2 = new Curiosities(1900, 300, 60, curImg02);
  cur2.display();

  cur3 = new Curiosities(2300, 600, 60, curImg03);
  cur3.display();

  cur4 = new Curiosities(600, 1300, 60, curImg04);
  cur4.display();

  cur5 = new Curiosities(1700, 1100, 60, curImg05);
  cur5.display();

  cur6 = new Curiosities(2500, 1100, 60, curImg06);
  cur6.display();


  ///BOTTONI DEI POSTI/////
  //ultimi due numeri cambiano la dimensione
  for (var i = 0; i < 1; i++) {
    Places1 = new places(windowWidth / 2 - 250, windowHeight - 110, "04bact01.html", placeIcon01, placeIcon01.width/3, placeIcon01.height/3);
  }

  for (var i = 0; i < 1; i++) {
    Places2 = new places(windowWidth / 2 - 150, windowHeight - 122, "04bact02.html", placeIcon02, placeIcon02.width/3, placeIcon02.height/3);
  }

  for (var i = 0; i < 1; i++) {
    Places3 = new places(windowWidth / 2 - 50, windowHeight - 110, "04bact03.html", placeIcon03, placeIcon03.width/3, placeIcon03.height/3);
  }

  for (var i = 0; i < 1; i++) {
    Places4 = new places(windowWidth / 2 + 50, windowHeight - 110, "04bact04.html", placeIcon04, placeIcon04.width/3, placeIcon04.height/3);
  }

  for (var i = 0; i < 1; i++) {
    Places5 = new places(windowWidth / 2 + 150, windowHeight - 110, "04bact05.html", placeIcon05, placeIcon05.width/3, placeIcon05.height/3);
  }

  for (var i = 0; i < 1; i++) {
    Places6 = new places(windowWidth / 2 + 250, windowHeight - 122, "04bact06.html", placeIcon06, placeIcon06.width/3, placeIcon06.height/3);
  }

  image(text, windowWidth/2 + window.scrollX, 80 + window.scrollY, text.width/3, text.height/3);
}

function places(_x, _y, _link, _placesIcon, _imgdimX, _imgdimY) {
  stroke(170);
  strokeWeight(2);
  fill(211, 241, 255);
  // ellipse(_x + window.scrollX, windowHeight - 130 + window.scrollY, 80);
  image(_placesIcon,_x + window.scrollX, _y + window.scrollY, _imgdimX, _imgdimY);

// windowHeight - 130

  var r = 40;
  var d = dist(_x + window.scrollX, windowHeight - 130 + window.scrollY, mouseX, mouseY);
  if (d < r && mouseIsPressed == true) {
    window.location.href = _link;
  }
}

function Bact(_img, _bactx, _bacty, _widthImg, _heightImg, _linkImg) {

  image(_img, _bactx, _bacty, _widthImg, _heightImg);

  s = 120;
  var di = dist(_bactx, _bacty, mouseX, mouseY);
  if (di < s && mouseIsPressed == true) {
    window.location.href = _linkImg;
  }
}

function Curiosities(_x, _y, _diameter, _curImg) {
  var _posx = _x;
  var _posy = _y;

  this.x = _posx;
  this.y = _posy;
  this.dm = _diameter;

  this.display = function() {
    fill("red");
    ellipse(this.x, this.y, this.dm);
    imageMode(CENTER);
    image(curIcon, _x, _y, _diameter, _diameter);
  }

  p = 40;
  var distance = dist(_x, _y, mouseX, mouseY);
  if (distance < p) {
    image(_curImg, _x + 160, _y, _curImg.width/3, _curImg.height/3);
  }
}

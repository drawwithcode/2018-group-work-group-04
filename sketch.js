var myImage;
var canvas;
var places;
var bact01, bact02, bact03, bact04, bact05, bact06;
var cur;

var myBact;

function preload() {
 myImage = loadImage('./assets/sloth.jpeg');
 bact01 = loadImage('./assets/bact01.png');
 bact02 = loadImage('./assets/bact02.png');
 bact03 = loadImage('./assets/bact03.png');
 bact04 = loadImage('./assets/bact04.png');
 bact05 = loadImage('./assets/bact05.png');
 bact06 = loadImage('./assets/bact06.png');

}

function windowResized() {
 resizeCanvas(windowWidth, windowHeight);
}

function setup() {
 frameRate(60);
 canvas = createCanvas(windowWidth*3, windowHeight*3);
 background(255);

}


function draw() {
  background('white');

  myBact = new Bact(width/2, height/2, 50);

  myBact.move();
  myBact.display();

  cur = new Curiosities(200, 400, 100);
  cur.display();

  push();
  textFont('PT Sans');
  textAlign(CENTER);
  textSize(16);
  fill(0);
  noStroke();
  text("Look around the petri and look at the bacteria", (windowWidth / 2 )+ window.scrollX, (windowHeight - windowHeight + 50)+ window.scrollY);
  text("Select the places where you go everyday", (windowWidth / 2 )+ window.scrollX, (windowHeight / 2 + 80)+ window.scrollY);
  text("and discorver what bacteria you usually get", (windowWidth / 2)+ window.scrollX, (windowHeight / 2 + 104)+ window.scrollY);
 pop();


 for (var i = 0; i < 1; i++) {
   Places1 = new places(windowWidth/2 - 250, "04bact01.html");
 }

 for (var i = 0; i < 1; i++) {
   Places2 = new places(windowWidth/2 - 150, "04bact02.html");
 }

 for (var i = 0; i < 1; i++) {
   Places3 = new places(windowWidth/2 - 50, "04bact03.html");
 }

 for (var i = 0; i < 1; i++) {
   Places4 = new places(windowWidth/2 + 50, "04bact04.html");
 }

 for (var i = 0; i < 1; i++) {
   Places5 = new places(windowWidth/2 + 150, "04bact05.html");
 }

 for (var i = 0; i < 1; i++) {
   Places6 = new places(windowWidth/2 + 250, "04bact06.html");
 }

 s = 120;
 var di = dist(myBact.x, myBact.y, mouseX, mouseY);
 if (di < s && mouseIsPressed == true) {
   window.location.href= "04bact01.html";
 }


 p = 40;
 var distance = dist(cur.x, cur.y, mouseX, mouseY);
 if( distance < p){
    push()
    textFont('PT Sans');
    textAlign(CENTER);
    textSize(16);
    noStroke()
    fill(0);
    text('ciao belle', cur.x,cur.y+100);
    pop();

} else {}

}

 function places(_x, _link){
   stroke(170);
   strokeWeight(2);
   fill(211, 241, 255);
   ellipse(_x  + window.scrollX , windowHeight - 130 + window.scrollY, 80);

     var r = 40;
     var d = dist(_x  + window.scrollX , windowHeight - 130+ window.scrollY, mouseX, mouseY);
     if (d < r && mouseIsPressed == true) {
       window.location.href= _link;
     }
 }

 function Bact(_x, _y, _diameter) {
  // Properties defined by constructor
  this.size = _diameter;
  this.x = _x;
  this.y = _y;
  // Hardcoded properties
  this.speed = 40;
  // Methods
  this.move = function() {
     this.x += this.speed;
     this.y += this.speed;
  }

  this.display = function() {
    image(bact01, 200, 100, bact01.width/1.2, bact01.height/1.2);
    image(bact02, 900, 1300, bact02.width/1.7, bact02.height/1.7);
    image(bact03, 2500, 700, bact03.width/2.7, bact03.height/2.7);
    image(bact04, 3100, 2200, bact04.width/2.7, bact04.height/2.7);
    image(bact05, 1700, 20, bact05.width/2.7, bact05.height/2.7);
    image(bact06, 3500, 400, bact06.width/2.7, bact06.height/2.7);
  }
}

function Curiosities(_x, _y, _diameter) {
  this.x = _x;
  this.y = _y;
  this.dm = _diameter;

  this.display = function() {
    fill("lightblue");
    ellipse(this.x, this.y, this.dm);
  }
}

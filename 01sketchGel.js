var position = {'x': 150, 'y': 150};
var time;

var petri_canvas = function(p) {
  var dragging = false;
  var bg_col = p.color(242, 242, 247);
  var bg_col_dragging = p.color(193, 241, 255);

  p.preload = function() {
  }

  p.setup = function() {
    var my_canvas = p.createCanvas(500, 500);
    my_canvas.parent('petri-canvas-container');

    my_canvas.position(p.windowWidth/6*2 - my_canvas.width/2, p.windowHeight/2 - my_canvas.height/2);
    my_canvas.style("border-radius", "250px");


    p.background(bg_col);
    p.stroke(144, 144, 151);
    p.strokeWeight(4);
    p.fill(bg_col);
    p.ellipse(p.width/2, p.height/2, p.height);
    p.strokeWeight(1);
    p.ellipse(p.width/2, p.height/2, p.height-20);


    p.stroke(176, 230, 255);
    time = p.millis();
  }

  p.draw = function() {
    if (p.dist(p.width/2,p.height/2, p.mouseX, p.mouseY) < p.width/2 && dragging == true) {
      position.x = p.mouseX;
      position.y = p.mouseY;
    }

    p.fill(211, 241, 255, 90);
    p.strokeWeight(1);
    p.ellipse(position.x, position.y, 80);


  }

  p.mousePressed = function() {
    var distance = p.dist(position.x, position.y, p.mouseX, p.mouseY);
    if (distance <= 25) {
      dragging = true;
      p.noStroke();
    }
  }
  p.mouseReleased = function() {
    dragging = false;
    p.stroke(176, 230, 255);
  }

  p.keyPressed = function(){
     if (p.millis() > time + 9000 && p.keyIsPressed == true && p.keyCode == p.ENTER ) {
       window.location.href="02coloranti.html";
     }
  }


}

var petri_sketch = new p5(petri_canvas)

var bg_canvas = function(p) {
  var bg_col = p.color(255);
  var myImage1;
  var myImage2;

  p.preload = function(){
    myImage1 = p.loadImage('./assets/scrittaGel01.png');
    myImage2 = p.loadImage('./assets/scrittaGel02.png');
  }

  p.setup = function() {
    var my_canvas = p.createCanvas(p.windowWidth, p.windowHeight);
    my_canvas.parent('bg-canvas-container');
    p.background(bg_col);
    p.image(myImage1, p.windowWidth-500, 100, myImage1.width/3, myImage1.height/3);
    time = p.millis();
  }

  p.draw = function() {
      if(p.millis() > time + 9000){
        p.image(myImage2, p.windowWidth-425, p.windowHeight - 150, myImage2.width/4, myImage2.height/4);
        }


  }


}

var bg_sketch = new p5(bg_canvas)

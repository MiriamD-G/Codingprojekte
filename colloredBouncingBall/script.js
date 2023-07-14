var circleX = 100;
var circleY = 100;
var xSpeed = 3;
var ySpeed = 5;
var circleW = 200;
let h = 0;
let s = 100


function setup() {
  createCanvas(600, 600);
  colorMode(HSB, 360, 100, 100, 100);
}

function draw() {
  background(0, 10, 80, 5);
  noStroke();
  fill(h, s, 100, 20);
  circle(circleX, circleY, circleW);
  circleX += xSpeed;
  circleY += ySpeed;
  //console.log(circleY)

  // wenn der Kreis die Breite erreicht wird der xSpeed negativ (-5)
  if (circleX > width - circleW / 2 || circleX < circleW / 2) {
    xSpeed = -xSpeed;
    h = (h+30)%360
  }

  if (circleY > height - circleW / 2 || circleY < circleW / 2) {
    ySpeed = -ySpeed;
    h = (h+30)%360

  }
h = (h+1)%360
  // console.log(xSpeed)
  // console.log(ySpeed)
}

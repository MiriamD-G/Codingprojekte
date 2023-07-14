let bubbles = [];

function setup() {
  createCanvas(1000, 1000);
}

function mousePressed() {
  let r = 50;
  let b = new Bubble(mouseX, mouseY, r, 1);
  bubbles.push(b);
}

function draw() {
  background(230, 250, 200);

  for (let bubble of bubbles) {
    bubble.move();
    bubble.show();
  }

  for (let i = 0; i < bubbles.lenght; i++) {
    // bubbles[i].move();
    bubbles[i].show();
  }
}

class Bubble {
  constructor(x, y, r, sW) {
    this.x = x;
    this.y = y;
    this.r = r; //kreisgrösse
    this.sW = sW; //Linienstärke
  }

  move() {
    if (this.sW < 2 * this.x - this.r) {
      this.sW = this.sW + 1;
    } else this.sW = 1;

    if (this.sW < 2 * this.y - this.r) {
      this.sW = this.sW + 1;
    } else this.sW = 1;

    if (this.sW < 2 * width - 2 * this.x - this.r) {
      this.sW = this.sW + 1;
    } else this.sW = 1;

    if (this.sW < 2 * height - 2 * this.y - this.r) {
      this.sW = this.sW + 1;
    } else this.sW = 1;
  }
  show() {
//   fill(40, 10, 240, 60);
   fill (230, 250, 200,60),
    stroke(250, 160, 230, 50);
    strokeWeight(this.sW);
    circle(this.x, this.y, this.r);
  }
}

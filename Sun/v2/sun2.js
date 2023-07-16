let d = 0;
let sun1;
let sun2;
let sun3;
let sun4;
let sun5;

function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent("p5-container");
  sun1 = new Sun();
  sun2 = new Sun();
  sun3 = new Sun();
  sun4 = new Sun();
  sun5 = new Sun();
}

function draw() {
  background(170, 255, 225);
  sun1.show(width / 2, height / 2);
  sun1.move(1);
  sun2.show(width / 2, height / 2);
  sun2.move(2);
  sun3.show(width / 2, height / 2);
  sun3.move(3);
  sun4.show(width / 2, height / 2);
  sun4.move(4);
  sun5.show(width / 2, height / 2);
  sun5.move(5);
}

class Sun {
  constructor() {
    this.d = d;
  }
  show(x, y) {
    let tr = map(this.d, 0, width, 200, 0);
    noStroke();
    fill(250, 0, 30, tr);
    circle(x, y, this.d);
  }
  move(g) {
    if (this.d < width) {
      this.d = this.d + g;
    } else {
      this.d = 0;
    }
  }
}

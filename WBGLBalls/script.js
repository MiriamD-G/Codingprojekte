let blasen = [];
let lightOn = false;

const light = document.querySelector("#light");
light.addEventListener("click", onClick);

function setup() {
  createCanvas(600, 600, WEBGL);
  let canvas = createCanvas(600, 600)
  canvas.parent('p5-container')
  for (let i = 0; i < 40; i++) {
    blasen[i] = new Blase();
  }
}

function draw() {
  background(240, 225, 215);
  orbitControl();

  ambientLight(150, 150, 90);

  if (lightOn) {
    pointLight(50, 50, 50, -300, 0, 300);
    pointLight(50, 40, 50, 0, -300, 300);
    pointLight(50, 0, 0, 0, 600, -400);
    pointLight(0, 50, 0, 0, -300, -700);
  }
  // rotateX(frameCount * 0.002)
  // rotateZ(frameCount * 0.002)
  rotateY(frameCount * 0.02);

  for (let b of blasen) {
    b.show();
    b.grow();
    b.rise();
    for (let other of blasen) {
      if (b !== other && b.touch(other)) {
        b.shrink();
      }
    }
  }
}

function onClick() {
    console.log("before:", lightOn)
    if(lightOn){
        lightOn = false; 
    } else {
        lightOn = true; 
    }
    console.log("after:", lightOn)
}

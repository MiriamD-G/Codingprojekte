let blasen = []

function setup() {
  createCanvas(600, 600)
  let canvas = createCanvas(600, 600)
  canvas.parent('p5-container')
  for (let i = 0; i < 1; i ++){
    blasen[i] = new Blase()
  }
}
function draw() {
  background(230, 250, 250)

  for (let b of blasen){
    b.show()
    b.grow()
    b.burst()
    // b.rise()
    // b.updatePostiton()
    for (let other of blasen){
      if (b !== other && b.touch(other)){
        b.shrink()
      }
    }

  }
}

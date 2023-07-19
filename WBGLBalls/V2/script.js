let blasen = []
let a = 0
let bGr = 150 // Grösse der Blasen

function setup(){
createCanvas (600, 600, WEBGL)
let canvas = createCanvas(600, 600)
canvas.parent('p5-container')
for (let i=0; i<120; i++){
    blasen[i] = new Blase()
}
}

function draw(){
    background(240, 245, 215)
    orbitControl()
    // debugMode()

    ambientLight(150, 150, 135)

    pointLight(50, 50, 150, -400, -200, 300)
    pointLight(50, 40, 150, -300, -300, 300)
    pointLight(100, 0, 0, 200, -600, -400)
    pointLight(0, 50, 130, 0, -300, -700)


    // rotateX(frameCount * 0.2)
    // rotateZ(frameCount * 0.002)
    // rotateY(frameCount * 0.005)

    // Kameraposition
    let radius = 1800
    let cPosX = sin(a)*radius
    let cPosZ = cos(a)*radius
    camera(cPosX, -600, cPosZ, 0, -800, 0, 0, 1, 0)

    a += QUARTER_PI/360

    // Boden
    push()
    fill(200, 130, 155)
    ambientMaterial(200, 220, 160)
    ellipsoid(2200, bGr/2, 2200, 24, 24)
    pop()


    // Blasen
    for (let b of blasen){
        b.show()
        b.grow()

        if(b.cS > bGr){
            b.rise()
        }
        // b.rise()
        for (let other of blasen){
            if (b !== other && b.touch(other)){
                b.shrink()
            }
        }
    }
}
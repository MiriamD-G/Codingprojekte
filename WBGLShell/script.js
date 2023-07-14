let a = 0
let anz = 150
let cPosY = 200
let win = 0.001

function setup(){
createCanvas (600, 600, WEBGL)
let canvas = createCanvas(600, 600, WEBGL)
canvas.parent('p5-container')
// colorMode(HSB, 360, 100, 100, 100)
}

function draw(){
    background(18, 28, 44)
    orbitControl()

    // Checkbox Kamera
    function checkboxChecked() {
        if (myCheckbox.checked) {
            strokeWeight(2)
            stroke(255, 150, 100, 70)
        } else {
            strokeWeight(1)
            stroke(0)
        }
    }
    const myCheckbox = document.querySelector("#my-checkbox")
    myCheckbox.addEventListener('click', checkboxChecked)
    
    // Regler für die Anzahl Linien
    function anzEinst() {
        anz = anzRange.value
    }

    const anzRange = document.querySelector('#anz-range')
    anzRange.addEventListener('change', anzEinst)

    // Regler für die Winkel
    function winEinst() {
        win = winRange.value
    }

    const winRange = document.querySelector('#win-range')
    // winRange.value = 0.001
    winRange.addEventListener('change', winEinst)

    kamera()

    noFill()

    let g = 400 // Grösse 
    // let anz = 150 
    let factor = (g-100)/anz

    for(i=0; i<anz; i++){
        rotateZ(TAU/anz)
        push()
        rotateX(i*win)
        beginShape()
        vertex(0, 0, 0)
        bezierVertex(-g*0.7, -g, g, g, -g, -g, 0, 0, 0)
        endShape()
        pop()
        g -= factor
    }
}

    function kamera(){
        let radius = 620
        let cPosX = sin(a)*radius
        let cPosZ = cos(a)*radius
        camera(cPosX, cPosY, cPosZ, 0, 0, 0, 0, 1, 0)
        a += PI/360
    }

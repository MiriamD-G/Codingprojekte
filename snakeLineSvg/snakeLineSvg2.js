const svgns = "http://www.w3.org/2000/svg"

// Das SVG-Element generieren
const mySVG = document.createElementNS(svgns, "svg")

// Das SVG-Element ins DOM integrieren
document.body.appendChild(mySVG)

// Das Kooridnatensystem definieren
mySVG.setAttribute("viewBox", "0 0 1000 1000")

// Grafik-Elemente generieren
const myLine = document.createElementNS(svgns, "line")

// myLine.setAttribute("id", "lineLeaf")
myLine.setAttribute("x1", "0")
myLine.setAttribute("y1", "0")
myLine.setAttribute("x2", "50")
myLine.setAttribute("y2", "0")
myLine.setAttribute("stroke-linecap", "round")
myLine.setAttribute("stroke-opacity", "0.2")
// myLine.setAttribute("stroke-width", "60")


// Definition vom einzelnen Pfad

let a = 0

function lineAnimate(){
    a += 0.03
    let factor = Math.sin(a)
    let factorB = Math.cos(a)
    let l = 400 // Länge vom Strich
    let b = l*0.4 // Breite vom Ausschlag
    let maxAmplitude = b // maximale Schwingung, Ausschlag
    let posX = factor * maxAmplitude
    let posXB = factorB * maxAmplitude

    const myPath = {
        origin: {
            x:0,
            y:0
        },
        anchor1: {
            x: l*0.3,
            y: posX
        },
        anchor2: {
            x: l*0.7,
            y: posXB
        },
        target: {
            x:l,
            y:0
        },
    }

    const petalPath = `M ${myPath.origin.x} ${myPath.origin.y} C ${myPath.anchor1.x} ${myPath.anchor1.y}, ${myPath.anchor2.x} ${myPath.anchor2.y}, ${myPath.target.x} ${myPath.target.y} `

    petal.setAttribute("d", petalPath)
}

let petal = document.createElementNS(svgns, "path")
petal.setAttribute("id", "lineLeaf")
petal.setAttribute("fill", "transparent")
petal.setAttribute("stroke-linecap", "round")
petal.setAttribute("stroke-opacity", "0.6")

setInterval(() => {
    lineAnimate()
    }, 16)


function placeLeaf(x, y, sw, ang, distance){
    const g = document.createElementNS(svgns, "g")
    g.setAttribute("transform", "translate ("+x+", "+y+") rotate("+ang+")")
    // g.setAttribute("stroke-width, ("+sw+")")
    g.setAttribute("stroke-width", "12")

    const blatt = document.createElementNS(svgns, "use")
    blatt.setAttribute("href", "#lineLeaf")
    blatt.setAttribute("transform", "translate("+distance+", 0)")
    // blatt.setAttribute("stroke", "red")
    g.appendChild(blatt)

    return g
}   

function createFlower(x, y, leafNr) {
    for(var i=0; i<leafNr; i++){
        const flower = placeLeaf(x, y, 60, i*(360/leafNr), 80)
        flower.setAttribute("stroke", "blue")
        mySVG.appendChild(flower)
    }
}

// for (let i=0; i<4; i++){
//     for (let j=0; j<4; j++){
//         createFlower(150+(200*i), 150+(200*j), 5*(i+j+1))
//     }
// }

createFlower(500, 500, 130)

// Grafik-Elemente ins SVG einfügen
mySVG.appendChild(myLine)
mySVG.appendChild(petal)
mySVG.setAttribute("id", "eye")
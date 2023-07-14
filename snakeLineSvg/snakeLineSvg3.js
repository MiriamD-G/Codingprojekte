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
myLine.setAttribute("stroke-opacity", "0.2")
// myLine.setAttribute("stroke-width", "60")


// Definition vom einzelnen Pfad

let a = 0

function lineAnimate(){
    a += 0.03
    let factor = Math.sin(a)
    let factorB = Math.cos(a)
    let l = 390 // Länge vom Strich
    let b = l*0.8 // Breite vom Ausschlag
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
petal.setAttribute("stroke-opacity", "0.2")

setInterval(() => {
    lineAnimate()
    }, 16)

function placeLeaf(x, y, ang, distance){
    const g = document.createElementNS(svgns, "g")
    g.setAttribute("transform", "translate ("+x+", "+y+") rotate("+ang+")")
    
    const blatt = document.createElementNS(svgns, "use")
    blatt.setAttribute("href", "#lineLeaf")
    blatt.setAttribute("transform", "translate("+distance+", 0)")
    g.appendChild(blatt)

    return g
}   

function createFlower(x, y, sw, ds, leafNr) {
    for(var i=0; i<leafNr; i++){
        const flower = placeLeaf(x, y, i*(360/leafNr), 35)
        flower.setAttribute("stroke", "hsl(160, 100%, 15%")
        mySVG.appendChild(flower)
        mySVG.setAttribute("stroke-dasharray", (ds*0.02, ds*2))
        mySVG.setAttribute("stroke-width", sw)
        // mySVG.setAttribute("stroke-linecap", "round")


    }
}

const flowerAnim = document.createElementNS(svgns, "animateTransform")
mySVG.appendChild(flowerAnim)
flowerAnim.setAttribute("attributeName", "transform")
flowerAnim.setAttribute("attributeType", "XML")
flowerAnim.setAttribute("type", "rotate")
flowerAnim.setAttribute("from", "0 0 0")
flowerAnim.setAttribute("to", "360 0 0")
flowerAnim.setAttribute("dur", "15s")
flowerAnim.setAttribute("repeatCount", "indefinite")



createFlower(500, 500, 180, 3, 15)


// Grafik-Elemente ins SVG einfügen
mySVG.appendChild(myLine)
mySVG.appendChild(petal)
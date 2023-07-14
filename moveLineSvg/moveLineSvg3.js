const svgns = "http://www.w3.org/2000/svg"
const mySVG = document.createElementNS(svgns, "svg")
document.body.appendChild(mySVG)
mySVG.setAttribute("viewBox", "-500 -500 1000 1000")


function oneLine(x, y, ang, l, sw, c){

    const myLine = document.createElementNS(svgns, "line")
    const myg = document.createElementNS(svgns, "g")
   
    myg.appendChild(myLine)
    mySVG.appendChild(myg)

    myLine.setAttribute("id", "line")
    myLine.setAttribute("x1", x-l/2)
    myLine.setAttribute("y1", y)
    myLine.setAttribute("x2", x+l/2)
    myLine.setAttribute("y2", y)
    myLine.setAttribute("stroke-opacity", "0.3")

    myLine.setAttribute("stroke", "hsl("+c+", 50%, 50%)")
    myLine.setAttribute("stroke-width", sw)
    myLine.setAttribute("stroke-linecap", "round")
    myg.setAttribute("transform", "rotate("+ang+")")

    const myAnimation = document.createElementNS(svgns, "animateTransform")
    myLine.appendChild(myAnimation)
    myAnimation.setAttribute("attributeName", "transform")
    myAnimation.setAttribute("attributeType", "XML")
    myAnimation.setAttribute("type", "translate")
    myAnimation.setAttribute("values", `0 0; ${l/2} 0; 0 0`)
    myAnimation.setAttribute("dur", "6s")
    myAnimation.setAttribute("repeatCount", "1")
    myAnimation.setAttribute("restart", "whenNotActive")

    myLine.addEventListener("mouseover", () => {
        document.querySelectorAll("animateTransform").forEach((line) => {
        line.beginElement();
        });
    })
}

function flower(x, y, anzLine, l, sw){
    for(let i=0; i<anzLine; i++){
        oneLine(x, y, i*(360/anzLine), l, (i+1)*sw, ((i*3)+30)%360)
    }
}

flower(100, 100, 45, 200, 2)
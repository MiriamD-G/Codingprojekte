const svgns = "http://www.w3.org/2000/svg"
const mySVG = document.createElementNS(svgns, "svg")
document.body.appendChild(mySVG)
mySVG.setAttribute("viewBox", "0 0 1000 1000")


function oneLine(ang, l, sw, c){

    const myLine = document.createElementNS(svgns, "line")
    const myg = document.createElementNS(svgns, "g")
   
    myg.appendChild(myLine)

    myLine.setAttribute("id", "line")
    myLine.setAttribute("x1", -l/2)
    myLine.setAttribute("y1", 0)
    myLine.setAttribute("x2", +l/2)
    myLine.setAttribute("y2", 0)
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
    myAnimation.setAttribute("values", `0 0; ${l} 0; 0 0`)
    myAnimation.setAttribute("dur", "3s")
    myAnimation.setAttribute("repeatCount", "1")
    myAnimation.setAttribute("restart", "whenNotActive")

    myLine.addEventListener("mouseover", () => {
        myg.querySelectorAll("animateTransform").forEach((line) => {
        line.beginElement();
        });
    })
    return myg;
}

function flower(x, y, anzLine, l, sw){
    const myflowerg = document.createElementNS(svgns, "g")
    for(let i=0; i<anzLine; i++){
      const myg = oneLine(i*(360/anzLine), l, (i+12)*sw, ((i*13)+130)%360)
      myflowerg.appendChild(myg)
    }
    myflowerg.setAttribute("transform", "translate("+x+", "+y+")")
    mySVG.appendChild(myflowerg)

}

// flower(300, 30, 5, 200, 20)

const anzFlo = 30
for(let i=0; i<anzFlo; i++){
    const x = Math.random()*1000
    const y = Math.random()*1000
    flower(x, y, 13, 300, 2)
}
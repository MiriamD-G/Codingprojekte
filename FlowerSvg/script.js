const svgns = "http://www.w3.org/2000/svg"

let g = 400 // Grösse
let anz = 25 // Anzahl
let factor = (g*0.4)/anz // Verkleinerungsfaktor
let rotfactor = 360/anz;


const myPath = {
    origin: {
        x:0,
        y:0
    },
    anchor1: {
        x: -g,
        y: -g
    },
    anchor2: {
        x: g,
        y: -g
    }
}
const shell = document.querySelector("#shell")
//const petal = document.querySelector("#petal")
const reglerRx = document.querySelector("#rx")
const reglerLx = document.querySelector("#lx")
const reglerRy = document.querySelector("#ry")
const reglerLy = document.querySelector("#ly")

function updatePath() {
    while(shell.firstChild){
        shell.removeChild(shell.firstChild)
    }
    shell.setAttribute("transform", "translate(500, 500)")


    for(let i=0; i<anz; i++){
        let petal = document.createElementNS(svgns, "path")
   //     document.setAttribute("id", "petal"+i)

        const petalPath = `M ${myPath.origin.x} ${myPath.origin.y} C ${myPath.anchor1.x} ${myPath.anchor1.y}, ${myPath.anchor2.x} ${myPath.anchor2.y}, ${myPath.origin.x} ${myPath.origin.y} Z`
        petal.setAttribute("d", petalPath)
        petal.setAttribute("transform", "rotate("+ rotfactor*i +")")
        petal.setAttribute("stroke", "red")
        petal.setAttribute("fill", "red")
        petal.setAttribute("fill-opacity", "0.2")
        shell.appendChild(petal)
    }

}
updatePath()

reglerRx.addEventListener('change', () => {
    myPath.anchor2.x = reglerRx.value
    updatePath()
})

reglerLx.addEventListener('change', () => {
    myPath.anchor1.x = reglerLx.value
    updatePath()
})

reglerRy.addEventListener('change', () => {
    myPath.anchor2.y = reglerRy.value
    updatePath()
})

reglerLy.addEventListener('change', () => {
    myPath.anchor1.y = reglerLy.value
    updatePath()
})

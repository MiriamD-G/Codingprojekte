class Sun{
    constructor(size, sunNum){
        this.size = size // maximale Grösse
        this.sunNum = sunNum // Anzahl der Sonnen übereinander
        this.sunDist = this.size/this.sunNum // Abstand zwischen den Sonnen
        this.sunList = []

        for (let i = 0; i < this.sunNum; i += 1){
            this.start = this.sunDist*i
            this.sunList.push(new Punkt(this.size, this.start))
            // Berechnet die Abstände zwischen den Sonnen
        }
    }

    show(){
        for (let i = 0; i < this.sunList.length; i += 1){
            let currentSun = this.sunList[i]
            currentSun.show()
            currentSun.grow()
        }
    }
}

class Punkt{
    constructor(maxS, cS){
        this.cS = cS // start Punktgrösse
        this.maxS = maxS // maximale Punktgrösse
    }
       
    show(){ 
        this.tra = map(this.cS, 0, this.maxS, 100, 0)

        push()
        translate (this.maxS/2, this.maxS/2)
        fill(250, 0, 30, this.tra)
        noStroke()
        circle(0, 0, this.cS)
        pop()
    }

    grow(){ // lässt den Punkt wachsen bis zur Maximalgrösse
        if (this.cS < this.maxS){
            this.cS += 1
        }
        else{
            this.cS = 0
        }
    }
}

let sun = new Sun(600, 7)

function setup(){
    createCanvas (600, 600)
    let canvas = createCanvas(600, 600)
    canvas.parent('p5-container')
}


function draw(){
    background(170, 255, 225)
    sun.show()
}

const dro = []
let rad = 3 // Radius von Drops

const myRange = document.querySelector('#my-range')

myRange.addEventListener('change', () => {
    const anzDro = myRange.value

    if (anzDro > dro.length){
        const difference = anzDro - dro.length 
        for (let i=0; i < difference; i++){
            dro.push(new Drops(rad))
        }
    }
    if (anzDro < dro.length){
        dro.splice(anzDro)
    } 
    console.log(dro)
})

let blue = 60
let bluechange = 0.5

function setup(){
createCanvas (windowWidth, windowHeight)
    colorMode(HSB, 360, 100, 100, 100)
    for (let i=0; i<150; i++){
        dro[i] = new Drops(rad)
    }
}

function draw(){
    background(blue%360, 20, 50)
    blue += bluechange

    for (let d of dro){
        d.show()
        d.grow()
        for (let other of dro){
            if (d !== other && d.touch(other)){
                d.shrink()
            }
        }           
    }
}

class Drops {
    constructor(r){
        this.x = random(width)
        this.y = random(height)
        this.r = r
        this.speed = random()
        this.s = random(30, 100)
        this.alpha = random(10, 200)
    }
    show(){
        noStroke()
        // noFill()
        fill(328, this.s, 100, 100)
        strokeWeight(3)
        // stroke(155, this.blue, 100)
        circle(this.x, this.y, this.r)
    }
    grow(){
        if (this.r < 130) {
            this.r += this.speed
        } else {
            this.x = random(width)
            this.y = random(height)
            this.r = 3
            }
    }
    touch(other){
        let d = dist(this.x, this.y, other.x, other.y)
        return (d < this.r/2 + other.r/2)
    }
    shrink(){
        this.x = random(width)
        this.y = random(height)
        this.r = 3
    }
}
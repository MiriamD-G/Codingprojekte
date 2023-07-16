class Blase {

    constructor() {
        this.field = 1200 // Grösse des Feldes
        this.x = random(-this.field, this.field)
        this.y = 0
        this.z = random(-this.field, this.field)
        this.cS = 3 // Kreisgrösse
        this.growSpeed = 0.2 // Wachstumsfaktor
    }

    show(){
        noStroke()
        ambientMaterial(185, 215, 255)
        push()

        translate(this.x, this.y-this.cS, this.z)
        fill(255, 255, 255)
        // sphere(2)
        // fill(160, 200, 220)
        sphere(this.cS)
        pop()
    }

    grow(){
        this.cS = this.cS + this.growSpeed
    }

    shrink(){
        this.cS = 1
        this.x = random(-this.field, this.field)
        this.y = 0
        this.z = random(-this.field, this.field)
    }

    rise(){
        this.y = this.y -2.5
    }

    touch(other){
        let d = dist(this.x, this.y, this.z, other.x, other.y, other.z)
        return (d < this.cS + other.cS)
    }
}
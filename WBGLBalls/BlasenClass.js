class Blase {

    constructor() {
        this.field = 200 // Grösse des Feldes
        this.x = random(-this.field, this.field)
        this.y = random(-this.field, this.field)
        this.z = random(-this.field, this.field)
        this.cS = 1 // Kreisgrösse
        this.growSpeed = 0.8 // Wachstumsfaktor
    }

    show(){
        noStroke()
        specularMaterial(25, 65, 95)
        push()

        translate(this.x, this.y, this.z)
        fill(150, 130, 120)
        sphere(2)

        fill(160, 200, 220)

        sphere(this.cS)
        pop()
    }

    grow(){
        this.cS = this.cS + this.growSpeed
    }

    shrink(){
        this.cS = 1
        this.x = random(-this.field, this.field)
        this.y = random(-this.field, this.field)
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
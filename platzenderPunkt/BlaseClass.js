class Blase {
    constructor() {
        this.bor = 40 // Abstand zum Rand
        this.x = random(this.bor, width-this.bor) 
        this.y = random(this.bor, height-this.bor)
        this.r = random(0, 50) // rot
        this.g = random(0, 80) // grün
        this.b = random(190, 255) // blau
        this.sW = 2 // Strichstärke
        this.cS = 10 // Kreisgrösse
        this.growSpeed = 0.5 // Wachstumsfaktor
        this.mDist = dist(this.x, this.y, mouseX, mouseY) // Distanz zur Maus
        this.schritt = (frameCount % 60) / 60
        this.a = 0
        this.mouseFollow = (frameCount % 300) / 300 
    }

    show(){
        ellipseMode(CENTER)
        fill(this.r, this.g, this.b, 30)
        noStroke()
        ellipse(this.x, this.y, this.sW)
        fill(this.r, this.g, this.b)
        ellipse(this.x, this.y, 5)
    }

    touch(other){
        let d = dist(this.x, this.y, other.x, other.y)
        return (d < this.sW/2 + other.sW/2)
    }

    grow(){
        this.sW = this.sW + this.growSpeed
    }

    growSin(){
      this.factor = sin(this.a)
      this.factor = (this.factor + 1)/2
      this.miniSize = 3
      this.sW = (this.miniSize + width) * this.factor
      if (this.cS <= 2) {
        this.newPos()
      }
      this.a += 0.01
    }

    shrink(){
        this.sW = 0
        this.x = random(this.bor, width-this.bor)
        this.y = random(this.bor, height-this.bor)
    }

    snail(){
        this.growSpeed = this.growSpeed * -1
        this.sW = this.sW + this.growSpeed
        if (this.cS <= 1) {
          this.newPos()
        }
    }

    snailB(){
      this.factor = sin(this.a)
      // this.factor = (this.factor + 1)/2
      this.miniSize = 2
      this.sW = (this.miniSize + width) * this.factor
      if (this.cS <= 1) {
        this.newPos()
      }
      this.a += 0.01

    }

    newPos(){
      this.sW = 1
      this.x = random(this.bor, width-this.bor)
      this.y = random(this.bor, height-this.bor)
    }

    mousePosition(){
      this.x = lerp(this.x, mouseX, 0.006)
      this.y = lerp(this.y, mouseY, 0.006)
      }

    rise(){
        this.y = this.y - 1
    }

    updatePostiton(){
        this.x += random(1) - 0.5
        this.y += random(1) - 1
    }

    burst(){ // lässt die Stichstärke wachsen bis zum Rand
        if (this.sW < 2 * this.x - this.cS) {
          this.sW = this.sW + 0.2
        } else {
          this.sW = 1
          this.newPos()
        } 
              
        if (this.sW < 2 * this.y - this.cS) {
          this.sW = this.sW + 0.2
        } else {
          this.sW = 1
          this.newPos()
        }
      
        if (this.sW < 2 * width - 2 * this.x - this.cS) {
          this.sW = this.sW + 0.2
        } else {
          this.sW = 1
          this.newPos()
        }
      
        if (this.sW < 2 * height - 2 * this.y - this.cS) {
          this.sW = this.sW + 0.2
        } else {
          this.sW = 1
          this.newPos() 
        }
      } 
  }
  
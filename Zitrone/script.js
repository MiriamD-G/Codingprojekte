function setup(){
    createCanvas (600, 600)
        background(30, 30, 50)
    
    }
    
    let a = 0
    
    function draw(){
    
       let factor = sin(a)
       let factorB = cos(a)
       let l = 600 // Länge vom Strich
       let b = l*0.8 // breite vom Ausschlag
       let maxAmplitude = b // maximale Schwingung, Ausschlag
       let posX = factor * maxAmplitude
       let posXB = factorB * maxAmplitude
       noFill()
       strokeWeight(2)
       stroke(230, 210, 50, 30)
       translate (width/2, 0)
    bezier(0, 0, -posX, b/2, posXB, l-b/2, 0, l)
    
    a += 0.03
    
    
    }
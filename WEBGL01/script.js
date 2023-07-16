function setup(){
    createCanvas (600, 600, WEBGL)
    }
    
    let a = 0
    
    function draw(){
        background(60, 80, 100)
        rotateX(frameCount * 0.005)
        rotateY(frameCount * 0.005)
        rotateZ(frameCount * 0.005)
        orbitControl()

        ambientLight(30)
        directionalLight(220, 250, 100, 0, -100, -100);

        ambientMaterial(255, 255, 255)
    
        let factorA = sin(a)
        let factorB = cos(a)
        let l = 500 // Länge vom Strich
        let b = l*0.8 // breite vom Ausschlag
        let maxAmplitude = b // maximale Schwingung, Ausschlag
        let posXA = factorA * maxAmplitude
        let posXB = factorB * maxAmplitude
        noFill()
        // noStroke()
        fill(220, 230, 100, 40)
        strokeWeight(1)
        stroke(230, 210, 50, 120)
        
    
        // camera(sin(frameCount*0.02)*400, 0, 500, 0, sin(frameCount*0.02)*20, 100, 0, 1, 0)
    
    
        bezier(0, 0, 0, -posXA, -b/2, 0, posXB, l-b/2, 0, 0, 0, 0)
        bezier(0, 0, 0, 0, -posXA, -b/2, l-b/2, posXB, 0, 0, 0, 0)
        bezier(0, 0, 0, -b/2, 0, -posXA, posXB, 0, l-b/2, 0, 0, 0)
    
        bezier(0, 0, 0, posXA, b/2, 0, -posXB, -(l-b/2), 0, 0, 0, 0)
        bezier(0, 0, 0, 0, posXA, b/2, -(l-b/2), -posXB, 0, 0, 0, 0)
        bezier(0, 0, 0, b/2, 0, posXA, -posXB, 0, -(l-b/2), 0, 0, 0)
    
        bezier(0, 0, 0, -b/2, -posXA, 0, l-b/2, posXB, 0, 0, 0, 0)
        bezier(0, 0, 0, 0, -b/2, -posXA, 0, l-b/2, posXB, 0, 0, 0)
        bezier(0, 0, 0, -posXA, 0, -b/2, posXB, 0, l-b/2, 0, 0, 0)
    
        bezier(0, 0, 0, b/2, posXA, 0, -(l-b/2), -posXB, 0, 0, 0, 0)
        bezier(0, 0, 0, 0, b/2, posXA, 0, -(l-b/2), -posXB, 0, 0, 0)
        bezier(0, 0, 0, posXA, 0, b/2, -posXB, 0, -(l-b/2), 0, 0, 0)
    
        // noStroke()
        // sphere(103)
    
        a += 0.02
     
    
    }
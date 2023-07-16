function setup(){
    createCanvas (600, 600)
    }
    
    function draw(){
        background(255, 250, 230)
        translate(0, height/2 - 280)
    
        for (let a = 0; a < 30; a += 1) {
            translate(15, 0)
            for (let i = 0; i < 200; i += 1){
                
                const x = noise((frameCount + a*200)/100 + i/200) * 120
                const y = i * noise(0, (frameCount + a*5)/120 + i/200) * 5
                const w = noise(10, (frameCount + a*70)/100 + i/200) * 100
                const h = (w*0.3)*a/6
                stroke(0, 20, 40, 20)
                // noStroke()
                noFill()
                strokeWeight(2)
                ellipse(x, y, w, h)
            }
        }
    }
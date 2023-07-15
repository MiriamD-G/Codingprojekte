function setup(){
    createCanvas (600, 600)
    colorMode(HSB, 100)
    }
    
    let angle = 0
    
    function draw(){
        background(200, 30, 100)
        translate(width/2, height/2)
    
        for( ang = 0; ang < TWO_PI; ang += HALF_PI){
    
        let b = 250 // Grösse
        rotate(angle)
    
        stroke(0, 0, 100)
        strokeWeight(2)
        fill(0, 0, 100, 20)
        bezier(0, 0, 0, 0, -b, b/3*2, 0, b)
        bezier(0, 0, 0, 0, b, b/3*2, 0, b)
        
        strokeWeight(1)
        noFill()
        for(let w=0; w < b; w+=30){
          bezier(0, 0, 0, 0, -w, b/3*2, 0, b)
          bezier(0, 0, 0, 0, w, b/3*2, 0, b)
        }
        
        fill(0, 0, 100, 40)
        noStroke()
        circle(0, b-b/4-3, b/2)
        circle(0, b-b/8-3, b/4)
        fill(0, 0, 100)
        circle(0, b+b/20, b/10)
    
        circle(0, -b, b/20)
        noFill()
        stroke(0, 0, 100)
        strokeWeight(1)
        circle(0, -b+(b/10), b/10)
    
    }
    angle = angle+QUARTER_PI/100
    
    }
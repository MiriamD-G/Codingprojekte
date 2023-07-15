function setup() {
    createCanvas(600, 600);
    let canvas = createCanvas(600, 600)
    canvas.parent('p5-container')
  
  
    off = 20; // Abstand zum Rand
    spc = 25; // Abstand zwischen den einzelnen Punkten
    colorMode(HSB, 360, 100, 100, 100)
  
  //   strokeWeight(12);
  }
  
  function draw(){
    background(100, 20, 90);
  
    t = frameCount/50
  
    for(x = off; x < width-off; x+=spc){
      modifier = x*5
      offsetAmount = 60 // maximale Schwingung
  
      x1 = x + offsetAmount*sin(modifier + t) 
      x2 = x - offsetAmount*sin(modifier + t)
  
      d = dist(x1, x2, width/2, width/2) // Berechnung der Distanz von einem Punkt zur Mitte vom Canvas
      dmap = map(d, 0, width/2+off/2, 1, 0) // mapt diese Distanz von 1 bis 0
      strokeWeight(dmap*180) // Punktgrösse im Verhältnis zum Abstand zur Mitte des Canvas
      stroke(120, 80, 50, 60)
      x1 = x + offsetAmount*sin(modifier + t) * dmap
      x2 = x - offsetAmount*sin(modifier + t) * dmap
  
      point(x1, x2) // grosse Punkte
  
      rad = 110*dmap // Abstand vom grossen Punkt
      strokeWeight(8*dmap) // Grösse der kleinen Punkte
  
      for(a = 0; a < TAU; a += TAU/5){
      px = x1 + rad*cos(a)
      py = x2 + rad*sin(a)
  
      point(px, py) // kleine Punkte
  
      }
    }
  }
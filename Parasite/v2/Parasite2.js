function setup() {
    w = 600
    createCanvas(w, w);
    let canvas = createCanvas(600, 600)
    canvas.parent('p5-container')
  
    colorMode(HSB, 360, 100, 100, 100)
  
    off = 70; // Abstand zum Rand
    spc = 10; // Abstand zwischen den einzelnen Punkten
  
  //   strokeWeight(12);
  }
  
  prevx1 = 0
  prevx2 = 0
  prevrad = 0
  
  function draw(){
    background(240, 70, 20, 100);
    stroke(120, 10, 100, 30)
  
    t = frameCount/60
  
    for(x = off; x < w-off; x+=spc){
      modifier = x*5
      offsetAmount = 70 // maximale Schwingung
  
      x1 = x + offsetAmount*sin(modifier + t) 
      x2 = x - offsetAmount*sin(modifier + t)
  
      d = dist(x1, x2, w/2, w/2) // Berechnung der Distanz von einem Punkt zur Mitte vom Canvas
      dmap = map(d, 0, w/2+off/2, 1, 0) // mapt die Distanz von einem Punkt zur Mitte vom Canvas mit 1 bis 0
      strokeWeight(dmap*120) // Punktgrösse im Verhältnis zum Abstand zur Mitte des Canvas
  
      x1 = x + offsetAmount*sin(modifier + t) * dmap
      x2 = x - offsetAmount*sin(modifier + t) * dmap
  
      // point(x1, x2) // grosse Punkte
  
  
      rad = 100*dmap // Abstand vom grossen Punkt
      div = TAU/21 // die Zahl entspricht den Anzahl Punkten die um die einzelnen Kreise sind
  
  
      
      for(a = t; a < TAU+t; a += div){
      strokeWeight(5*dmap) // Grösse der kleinen Punkte
  
      px = x1 + rad*cos(a)
      py = x2 + rad*sin(a)
  
      point(px, py) // kleine Punkte
  
      prevx = x1 + rad*cos(a+div)
      prevy = x2 + rad*sin(a+div)
  
      strokeWeight(1) // Linienstärke der Verbindungslinien
      line(px, py, prevx, prevy) // Verbindungslinie der kleinen Punkte
  
      connectx = prevx1 + prevrad * cos(a)
      connecty = prevx2 + prevrad * sin(a)
  
        if(x != off){
          strokeWeight(13) // Linienstärke der Verbindungslinien
          line(px, py, connectx, connecty) // Verbindungslinie 
  
        }
  
  
      }
  
      prevx1 = x1
      prevx2 = x2
      prevrad = rad
  
    }
  }
/*
Mit den Speechcommands "red", "green" und "blue" lässt sich die Hintergrundfarbe verändern.
Mit "stop", "up", "left" und "right" bewegen sich die Blasen entsprechend.
*/

let classifier, speech;
let confidence, confidenceSpeech;
let currentWord

let cr
let cg
let cb

let blasen = [];
let blasenAnz = 80;


// Label (start by showing listening)
let label = "listening";
const options = { probabilityThreshold: 0.7 };
// Teachable Machine model URL:
let soundModel = "https://teachablemachine.withgoogle.com/models/RBs7ynzO2/";

function preload() {
  // Load the model
  classifier = ml5.soundClassifier(soundModel + 'model.json');
  speech = ml5.soundClassifier('SpeechCommands18w', options);

}

const checkColors = document.createElement('p')
document.body.appendChild(checkColors)

function setup() {
  createCanvas(900, 600);
  // Start classifying
  // The sound model will continuously listen to the microphone
  classifier.classify(gotResult);
  speech.classify(gotResultSpeech);
  for (let i = 0; i < blasenAnz; i++) {
    blasen[i] = new Blase();
  }
  cr = 40
  cg = 40
  cb = 40
}

function draw() {
  background(cr, cg, cb);

  // beschreibt oben die Farbwerte
  // checkColors.innerHTML = `Color values<br>red: ${cr}, green: ${cg}, blue: ${cb}`

  // Vorgaben für den Text auf dem Canvas
  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);

  // verändert die HG-Farbe
  if (confidence > 0.8){
    // text(label, width/2, height/2)

    if (label == "red"){
      cr += 0.5
    } else if (label == "green"){
      cg += 0.5
    } else if (label == "blue"){
      cb += 0.5
    }
  }

  // bewegt die Punkte
  if (confidenceSpeech > 0.7){
    // text(labelSpeech, width / 2, height / 2 + 100);
    if (labelSpeech == "stop") {
      for (let b of blasen) {
        b.show();
        b.stop();
        b.grow();
        for (let other of blasen) {
          if (b !== other && b.touch(other)) {
            b.shrink();
          }
        }
      }
    } else if (labelSpeech == "up") {
      for (let b of blasen) {
        b.show();
        b.grow();
        b.rise();
        for (let other of blasen) {
          if (b !== other && b.touch(other)) {
            b.shrink();
          }
        }
      }
    } else if (labelSpeech == "down") {
      for (let b of blasen) {
        b.show();
        b.grow();
        b.sink();
        for (let other of blasen) {
          if (b !== other && b.touch(other)) {
            b.shrink();
          }
        }
      }
    } else if (labelSpeech == "right") {
      for (let b of blasen) {
        b.show();
        b.grow();
        b.moveRight();
        for (let other of blasen) {
          if (b !== other && b.touch(other)) {
            b.shrink();
          }
        }
      }
    } else if (labelSpeech == "left") {
      for (let b of blasen) {
        b.show();
        b.grow();
        b.moveLeft();
        for (let other of blasen) {
          if (b !== other && b.touch(other)) {
            b.shrink();
          }
        }
      }
    } else {
      for (let b of blasen) {
        b.show();
        b.grow();
        if (b.state == "right") {
          b.moveRight();
        } else if (b.state == "down"){
          b.sink()
        } else if (b.state == "left") {
          b.moveLeft();
        } else if (b.state == "up") {
          b.rise();
        }
  
        for (let other of blasen) {
          if (b !== other && b.touch(other)) {
            b.shrink();
          }
        }
      }
    }
  }
}


// The model recognizing a sound will trigger this event
function gotResult(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  // The results are in an array ordered by confidence.
  // console.log(results[0]);
  label = results[0].label;
  confidence = results[0].confidence;

}

// The model recognizing a sound will trigger this event
function gotResultSpeech(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  // The results are in an array ordered by confidence.
  // console.log(results[0]);
  labelSpeech = results[0].label;
  confidenceSpeech = results[0].confidence;
  currentWord = label;

}
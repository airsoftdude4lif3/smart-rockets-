var paused = false;
// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/bGz7mv2vD6g

var population;
// Each rocket is alive till 400 frames
var lifespan = 500;
// Made to display count on screen
var lifeP;
// Keeps track of frames
var count = 0;
// Where rockets are trying to go
var target;
// Max force applied to rocket
var maxforce = 0.2;

// Dimensions of barrier
var rx = 100;
var ry = 150;
var rw = 200;
var rh = 10;

// Dimensions of barrier
var rx2 = 150;
var ry2 = 190;
var rw2 = 400;
var rh2 = 20;


function setup() {
  createCanvas(1000, 800);
  population = new Population();
  lifeP = createP();
  target = createVector(width / 2, 50);
}

function draw() {
  if (paused) {
    textSize(100); 
    text("PAUSED", 100, 150);
  } else {
    // do the normal stuff
    
    
    background(0);
    population.run();
    // Displays count to window
    lifeP.html(count);
  
    count++;
    if (count == lifespan) {
      population.evaluate();
      population.selection();
      // Population = new Population();
      count = 0;
    }
    // Renders barrier for rockets
    fill(9,0,255);
    rect(rx, ry, rw, rh);
    // Renders target
    ellipse(target.x, target.y, 16, 16);

  // Renders barrier for rockets
    fill(9,0,255);
    rect(rx2, ry2, rw2, rh2);

    
  }
}

function keyPressed() {
  if (key === 'p') {
    paused = !paused;
  }
}

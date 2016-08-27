// Rotating square

var canvasWidth = 200;
var canvasHeight = 200;
var backgroundColor = 0;
var fillColor = 0;
var strokeColor = 255;
var textFill = 255;
var textStroke = 0;

var rotations = 0.25;
var period = 1;
var fr = 60; // framerate

var frequency = 2*Math.PI / period;
var currentRotation = 0;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  background(backgroundColor);
  fill(fillColor);
  stroke(strokeColor);
  frameRate(fr);
  angleMode(RADIANS);
}

function draw() {
  background(backgroundColor);
  fill(fillColor);
  stroke(strokeColor);
  push();

  // Square
  translate(width/2, height/2);
  rotate(currentRotation);
  centerSquare(0, 0, height/3);
  currentRotation += getRotation();

  // Text
  pop();
  fill(textFill);
  stroke(textStroke);
  text(int(frameCount/fr), 10, 20);
}

function centerSquare(x, y, length) {
  rect(x - length/2, y - length/2, length, length);
}

function getRotation() {
  var time = frameCount / fr;
  var velocity = (Math.cos(frequency * time + Math.PI) + 1) * 2*Math.PI * (rotations/period);
  return velocity * (1/fr);
}

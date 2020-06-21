var xPositions = [100, 200, 300];
var yPositions = [0, 50, 100];
var xPositions2 = [100, 200, 300];
var yPositions2 = [0, 50, 100];
var canvas;
var zeros;
var ones;

function setup() {
  for (var count = 0; count < 20; count++){
    xPositions.push(random(0, 800));
    yPositions.push(random(0, 400));
    xPositions2.push(random(0, 800));
    yPositions2.push(random(0, 400));
  }
}
function draw() {
  canvas = createCanvas(800, 400);
  background("black");
  
  for (var i = 0; i < xPositions.length; i++) {
    noStroke();
    fill(random(0, 255), random(0, 255), random(0, 255));
    //rect(xPositions[i], yPositions[i], 5, 20);
    
    zeros = text("0", xPositions[i], yPositions[i]);

    yPositions[i] += random(5, 10);

    if (yPositions[i] > 400) {
        yPositions[i] = 0;
    }
    textSize(30);
    text("MAGIC RAINDROPS!", 200, 200);
  }
  for (var i = 0; i < xPositions2.length; i++) {
    noStroke();
    fill(random(0, 255), random(0, 255), random(0, 255));
    //rect(xPositions[i], yPositions[i], 5, 20);
    
    ones = text("1", xPositions2[i], yPositions2[i]);

    yPositions2[i] += random(5, 10);

    if (yPositions2[i] > 400) {
        yPositions2[i] = 0;
    }
  }
}
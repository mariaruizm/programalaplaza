let angle = 0.0;
let jitter = 0.0;
let s = 10;
let c = 10;

function setup() {
  createCanvas(192,157);
  noStroke();
  fill('#0A122A');
  rectMode(CENTER);
}
 
function draw() {
  background(0);
  if (second() % 5 === 2) {
    jitter = random(-0, 0.1);
  }
  angle = angle + jitter;
  let c = cos(angle);
  translate(width / 2, height / 2);
  rotate(c);

  fill('#2E64FE');
  ellipse(0, 0, 130, 130);
  fill('#0040FF');
  ellipse(0,0,100,100);
  fill('#0040FF');
  rect(0, 0, 80, 80);
  fill('#013ADF');
  rect(0,0,60,60);
  fill('#0431B4');
  rect(0, 0, 40, 40);
  fill('#08298A');
  rect(0,0,20,20);
  fill('#0B173B');
  rect(0, 0, 8, 8);
  fill('#000000');
  rect(50, 50, 20, 20);
  fill('#000000');
  rect(-50, 50, 20, 20);
  fill('#000000');
  rect(-50, -50, 20, 20);
  fill('#000000');
  rect(50, -50, 20, 20);

  push();
  rotate(frameCount / 30.0);
  fill('#08088A');
  scale(s);
  star(55, -55, 15, 8, 8); 
  pop();

  push();
  rotate(frameCount / 30.0);
  fill('#0B0B61');
  scale(c);
  star(35, -35, 13, 6, 6); 
  pop();

  push();
  rotate(frameCount / 30.0);
  fill('#0B0B3B');
  scale(c);
  star(20, -20, 10, 5, 5); 
  pop();

  
  rotate(frameCount / 30.0);
  fill('#0A0A2A');
  scale(c);
  star(10, -10, 8, 3, 3); 
  pop();

  push();
  rotate(frameCount / 30.0);
  fill('#08088A');
  star(55, -55, 15, 8, 8); 
  pop();

  push();
  rotate(frameCount / 30.0);
  fill('#0B0B61');
  star(35, -35, 13, 6, 6); 
  pop();

  push();
  rotate(frameCount / 30.0);
  fill('#0B0B3B');
  star(20, -20, 10, 5, 5); 
  pop();

  
  rotate(frameCount / 30.0);
  fill('#0A0A2A');
  star(10, -10, 8, 3, 3); 
  pop();

  push();
  rotate(frameCount / 30.0);
  fill('#08088A');
  star(55, -55, 15, 8, 8); 
  pop();

  push();
  rotate(frameCount / 30.0);
  fill('#0B0B61');
  star(35, -35, 13, 6, 6); 
  pop();

  push();
  rotate(frameCount / 30.0);
  fill('#0B0B3B');
  star(20, -20, 10, 5, 5); 
  pop();

  
  rotate(frameCount / 30.0);
  fill('#0A0A2A');
  star(10, -10, 8, 3, 3); 
  pop();


}
function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/1.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
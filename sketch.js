var hr,mn,sec;
var scAngle;
function setup() {
  createCanvas(400,400);
}

function draw() {
  background(0);
  translate(200,200);
  hr = hour();
  mn = minute();
  sec = second();
  angleMode(DEGREES);
  scAngle = map(sec,0,60,0,360);
  push()
  rotate(scAngle-90)
  stroke(255,0,0)
  strokeWeight(7)
  line(0,0,90,0)
  pop()

  hrAngle = map(hr%12,0,12,0,360);
  push()
  rotate(hrAngle-90)
  stroke(0,0,255)
  strokeWeight(7)
  line(0,0,40,0)
  pop()
  
  mnAngle = map(mn,0,60,0,360);
  push()
  rotate(mnAngle-90)
  stroke(0,255,0)
  strokeWeight(7)
  line(0,0,60,0)
  pop()
  noFill();
  stroke(255,0,0);
  strokeWeight(7)
  arc(0,0,200,200,-90,scAngle-90,OPEN)
  stroke(0,255,0)
  strokeWeight(7)
  arc(0,0,230,230,-90,mnAngle-90,OPEN)
  stroke(0,0,255)
  strokeWeight(7)
  arc(0,0,260,260,-90,hrAngle-90,OPEN)
}
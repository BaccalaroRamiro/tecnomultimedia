PImage hacha; 
void setup(){
  size (800,400);
  hacha = loadImage("hacha.png");
}
void draw(){
  background(220);
  strokeWeight(2);
  image(hacha,0,0,400,400);
  // mango hacha
  beginShape();
  fill(180,168,124);
  vertex(400,380);
  vertex(625,85);
  vertex(665,105);
  vertex(395,450);
  vertex(400,400);
  endShape(CLOSE);
  fill(144,121,42);
  beginShape();
  vertex(651,107);
  vertex(659,110);
  vertex(433,400);
  vertex(428,400); 
  endShape(CLOSE);
  //hoja del hacha
  beginShape();
  fill(0);
  vertex(620,90);
  vertex (618,77);
  vertex (650,45);
  vertex (707, 75);
  vertex(681,112);
  vertex(660,112);
  endShape(CLOSE);
  triangle(670,68,781,72,714,177);
  //brillo del filo
  beginShape();
  fill(120);
  vertex(780,72);
  vertex(788,72);
  vertex(717,181);
  vertex(715,177);
  vertex(781,73);
  endShape(CLOSE);
  //luces
  fill(255);
  strokeWeight(0);
  triangle (622,96,631,100,597,134);
  beginShape();
  vertex (480,325);
  vertex (553,234);
  vertex (510,280);
  endShape(CLOSE);
  noStroke();
  circle(711,79,2);
  circle(704,90,2);
  circle(723,90,2);
  circle(714,114,2);
  circle(718,133,2);
  circle(740,114,2);
  circle(730,134,2);
  circle(744,120,2);
  circle(741,89,2);
  circle(757,88,2);
  circle(653,53,2);
  circle(646,64,2);
  circle(635,76,2);
  circle(645,85,2);
  circle(664,97,2);
  circle(673,79,2);
  circle(700,100,2);
  circle(717,150,2);
  circle(682,83,2);
  circle(647,74,2);
  circle(654,84,2);
  circle(728,102,2);
}
void mousePressed(){
  
  println("mouseX" + mouseX, "mouseY" + mouseY);
}

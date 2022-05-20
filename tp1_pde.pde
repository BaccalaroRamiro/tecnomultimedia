PImage pantalla;
PImage logocreditos;
PFont fuente;
String texto;
int x,y;
void setup(){
  background (0);
  x = width/2;
  y = height;
fuente= loadFont("SitkaDisplay-Bold-48.vlw");
textFont (fuente);
  size (1440,1080);
  frameRate(60);
   pantalla = loadImage ("Screenshot_21.png");
//ntalla = loadImage ("Screenshot_21.png");
//logocreditos = loadImage("fondo.png");
imageMode (CENTER);
image(pantalla,width/2, height/2,1440,1080);
}
void draw(){
logocreditos = loadImage("fondo.png");

imageMode (CENTER);
 

println ("x:");
println (mouseX);
println("y:");
println (mouseY);
fill (202,209,15);
// \
}
void keyPressed(){
 if (keyPressed){
//background (0);
 image(logocreditos,width/2, height/2,1440,1080);
text ("Creative Director and Project Lead",720,1090-frameCount);
fill (255);
text ("Ed Boon",1250,1140 -frameCount);
fill (202,209,15);
text ("Softwere Leads",1120,1290 -frameCount);
fill(255);
text ("Programing Lead: Mike Boon \n Technical Lead: Alan Villani",830,1340-frameCount);
fill (202,209,15);
text ("Art Directors",1350,1450);
 }

 }
 

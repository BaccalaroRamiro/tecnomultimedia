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
fill (255);
text ("    Steve Beran (Characters) \n Tony Goskie (Backgrounds) \n Mike Taran (Backgrounds)\n Carlos Pesina (Animations)",850,1600-frameCount);
fill (202,209,15);
text("Senior Producer",1100,1900-frameCount);
fill(255);
text("John Podlasek", 1140,1950-frameCount);
fill (202,209,15);

text ("Game Mode Leads",1050,2100-frameCount);
fill (255);
text ("      Jay Biondo (Konquest) \n      Jim Terdina (Fighting) \n Nick Shin (Motor Kombat)",880,2150-frameCount);
fill (202,209,15);
text ("Character Desing and Modeling" ,790,2350-frameCount);
fill (255);
text ("  Luis Mangubat \n Jennifer Hedrick \n Hernan Sanchez \n     Steve Beran",1050,2400-frameCount);
fill (202,209,15);
text ("Designers",1200,2700-frameCount);
fill(255);
text ("   Paulo Garcia \n Brian Lebaron \n Eddie Ferrier \n John Edwards",1120,2750-frameCount);
fill (202,209,15);
text("Audio Lead",1210,3050-frameCount);
fill(255); 
text("  Jim Bonney \n Dan Forden",1150,3100-frameCount);
 }

 }
 

 
 

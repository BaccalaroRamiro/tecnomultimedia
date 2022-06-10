 int vel;
 float posx;
 float velx;
 float tam;
 float tamy;
 void setup(){
    size (800,600);
    posx=400;
    velx =2;
   tam = 100;
   tamy = 50;
 }
   void fondorandom () {
  background (random(255),(random (255)),(random (255)));
  }
  
void draw (){
  println (posx);
  posx = posx + velx; 
  vel = frameCount;
  fondorandom();
  strokeWeight(15);
 for (int i=0; i<width; i+=30){
  line (i,0,i,height);
 }
 fill(92,234,103);
 strokeWeight(0);
 rect (posx,150,tam,50);
 fill (27,32,113);
 rect(posx,450,tam,50);
  if (keyPressed){
  if (key== 'r'){
    posx = 0;
  }
  }
 if (posx >= width-tam){
   velx = -2;
}
if (posx<=0){
  velx = +2;
}
if (keyPressed){
  if (key == 'l'){
    noStroke();
  }
  
}
if (keyPressed){
  if (key== ' '){
    fill (55,183,116,200);
    rect(posx,200,100,250);
   }
  }
}
 
 
 

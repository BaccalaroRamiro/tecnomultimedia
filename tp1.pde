int contador ;
PImage hacha;
PImage hacha2;
PImage hacha3;
String pantalla;
PFont font;
boolean apretar;
int tb;
int posXb;
int posYb;
int mover;
void setup () {
  size (640, 480);
  background(0);
  hacha = loadImage ("hacha.jpg");
  hacha2 = loadImage ("hacha2.jpg");
  hacha3 = loadImage ("Tomakawk.jpg");
  pantalla = "pantallaInicial";
  frameRate(30);
  textSize (30);
  font = loadFont("Cambria-Bold-48.vlw");
  textFont (font);
  tb = 75;
  posXb = 580;
  posYb = 420;
  
}


void draw () {
println (apretar);
  println(contador);
mover=frameCount;
  if (pantalla == "pantallaInicial") {
    contador ++;
    image (hacha, 0, 0, width, height);
    textSize (28);
    text("El hacha es una herramienta \ncon un filo metálico que está fijado de \nforma segura a un mango, generalmente \nde madera, cuya finalidad es el corte \nmediante golpes", 20, mover);

    if (contador >=200) {
      contador = 0;
      pantalla = "pantallaSecundaria";
    }
  } else if (pantalla == "pantallaSecundaria") {
    contador++;
    background(0);
    image (hacha2, 0, 0, width, height);
    push();
    textSize (mover/10);
    text ("El uso típico para las hachas \nes cortar leña y talar árboles, \npero en el pasado se usaron \ncomo armas para la caza y guerra", 0, 50);
    pop();
    if (contador >= 200) {
      contador = 0;
      pantalla = "tercerPantalla";
    }
  } else if (pantalla == "tercerPantalla") { 
    contador++;
    background(0);
    image (hacha3, 0, 0, width, height);
    push();
    fill(0, contador);
    text ("Antes del hacha moderna, el hacha de \nmano sin mango en la Edad de Piedra \nse usaba desde hace 1,5 millones de años. \nLas hachas con mango (aquellas con mango) \ndatan solo del 6000 a.C.", 10,200);
    
    fill(255,0,0);
    circle (580,420,70);
    pop();
  }
  
  
  
  
}

void mouseMoved() {
  if (pantalla.equals("tercerPantalla")) {

    if (dist(posXb, posYb, mouseX, mouseY)
      < tb/2) {
      
      apretar = true;
    } else {
      
      apretar = false;
    }
  } 
}




void mouseClicked() {

  if (pantalla.equals("tercerPantalla")) {
    if (apretar == true) {
      
      pantalla = "pantallaInicial";
      contador = 0;
      mover=0;
      
    }
  } 

    
  }

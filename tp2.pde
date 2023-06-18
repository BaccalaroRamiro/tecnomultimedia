//Ramiro Baccalaro
//Comision 5
//Legajo:91487/0
// https://youtu.be/kXCCQkraD9U

PImage ilusion;
float Brillo = 0;
float hInicial;
float radio;

void setup() {
  ilusion = loadImage("ioptica.jpg");
  size(800, 400);
  colorMode(HSB, 360, 100, 100);
  background(0);
  noFill();
  strokeWeight(15);

  hInicial = random(0, 360);
}

void draw() {
  image(ilusion, 0, 0, width/2, height);
  int NumeroDeCirculos = 12;
  float IncrementoRadio = width / (1 * NumeroDeCirculos);
  float y1 = height / 2;
  float x2 = 800;
  float y2 = height / 2;

  for (int i = 0; i < NumeroDeCirculos; i++) {
    if (i == 0) {
      radio = IncrementoRadio;
    } else {
      radio += IncrementoRadio;
    }

    float h = (hInicial + i * (360 / NumeroDeCirculos) + Brillo) % 360;
    float s = map(mouseX, 0, width, 0, 100);
    float b = map(Brillo, 0, 255, 100, 50);

    stroke(h, s, b, 75);
    ellipse(width / 2, y1, radio, radio);

    for (int j = 0; j < NumeroDeCirculos; j++) {
      stroke(h, s, b, 75); 
      ellipse(x2, y2, radio, radio);
      reinicio();
    }
  }
}




void keyPressed() {
    Brillo = sumarValor(Brillo, 10);
}
 void reinicio(){
  
if (mousePressed){
  Brillo = 0;
  }
}

float sumarValor(float valorActual, float suma) {
  float nuevoValor = valorActual + suma;
  return nuevoValor;
  
}
 

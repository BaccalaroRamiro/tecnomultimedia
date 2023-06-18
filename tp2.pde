PImage ilusion;
float colorOffset = 0;
float initialHue;
float radio;

void setup() {
  ilusion = loadImage("ioptica.jpg");
  size(800, 400);
  colorMode(HSB, 360, 100, 100);
  background(0);
  noFill();
  strokeWeight(15);

  initialHue = random(0, 360);
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
      radio += IncrementoRadio; // Incrementa el radio en cada iteración del ciclo for
    }

    float h = (initialHue + i * (360 / NumeroDeCirculos) + colorOffset) % 360;
    float s = map(mouseX, 0, width, 0, 100);
    float b = map(colorOffset, 0, 255, 100, 50);

    stroke(h, s, b, 75);
    ellipse(width / 2, y1, radio, radio);

    for (int j = 0; j < NumeroDeCirculos; j++) {
      stroke(h, s, b, 75); // Utiliza los mismos valores de h, s, y b del primer ciclo for
      ellipse(x2, y2, radio, radio);
      
    }
  }
}

void keyPressed() {
  colorOffset += 10;
}

void mousePressed() {
  colorOffset = 0;
}

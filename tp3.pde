int pantallaActual = 0;
int numeroPantallas = 12;
boolean[] botonesActivos = new boolean[numeroPantallas];
PImage[] imagenes = new PImage[numeroPantallas];
String[] textos = new String[numeroPantallas];
boolean final1Alcanzado = false;
boolean final2Alcanzado = false;

int botonSiguienteX;
int botonSiguienteY;
int boton1X;
int boton1Y;
int boton2X;
int boton2Y;
int botonReinicioX;
int botonReinicioY;

void setup() {
  size(600, 600);

  for (int i = 0; i < numeroPantallas; i++) {
    String nombreImagen = "pantalla" + i + ".jpg";
    imagenes[i] = loadImage(nombreImagen);
  }

  for (int i = 0; i < numeroPantallas; i++) {
    botonesActivos[i] = true;
  }

  textos[0] = "EL LOBO Y LOS SIETE CABRITILLOS \n click en siguente para comenzar";
  textos[1] = "La madre cabra sale de casa dejando a sus siete cabritos solos.\nNo le habran la puerta a nadie exclamó la madre antes de irse.";
  textos[2] = "El lobo malvado se acerca a la puerta y llama a los cabritos. \n¿Abrir la puerta?.";
  textos[3] = "El lobo entra por la puerta y atrapa a los cabritos.";
  textos[4] = "Los cabritos escuchan una voz ronca que dice ser su madre.";
  textos[5] = "Los cabritos saben que es el lobo quien imita su voz, su madre tiene una voz \nmucho más suave y delicada.";
  textos[6] = "El lobo se enfurece y se marcha.";
  textos[7] = "El lobo encuentra una escalera y sube al tejado de la casa\n de los cabritos. Desde allí, intenta entrar por la chimenea. \n¿Enfrentarse al lobo?.";
  textos[8] = "El lobo logra entrar por la chimenea y atrapa a los cabritos.";
  textos[9] = "La madre cabra llega a tiempo a la casa y pelea contra el lobo\n salvando a sus hijos.";
  textos[10] = "Los cabritos se reencuentran con su madre y celebran\n su regreso. Están agradecidos por su valentía y prometen ser\n más cuidadosos en el futuro.";
  textos[11] = "GRACIAS POR JUGAR\n Ramiro Baccalaro Com5\n .";

  calcularCoordenadasBotones();
}


void draw() {
  background(255);
  println(pantallaActual);
  if (pantallaActual >= 0 && pantallaActual < numeroPantallas) {
    mostrarImagen();
    if ((pantallaActual == 2 || pantallaActual == 7) && !final1Alcanzado && !final2Alcanzado) {
      mostrarBotonesOpcionales();
    } else if ((pantallaActual == 3 && final1Alcanzado) || (pantallaActual == 8 && final2Alcanzado) || pantallaActual == 11) {
      mostrarBotonReinicio();
    } else {
      mostrarBotonSiguiente();
    }
    mostrarRect();
    mostrarTexto(textos[pantallaActual]);
  }
}


void mostrarBotonesOpcionales() {
  fill(0, 255, 0);
  rect(boton1X, boton1Y, 100, 40);
  fill(0);
  text("SI", boton1X + 50, boton1Y + 25);

  fill(0, 255, 0);
  rect(boton2X, boton2Y, 100, 40);
  fill(0);
  text("NO", boton2X + 50, boton2Y + 25);
}


void mostrarBotonSiguiente() {
  if (botonesActivos[pantallaActual]) {
    fill(0, 255, 0);
  }
  rect(botonSiguienteX, botonSiguienteY, 80, 40);
  fill(0);
  text("Siguiente", botonSiguienteX + 40, botonSiguienteY + 25);
}


void mostrarBotonReinicio() {
  fill(255, 0, 0); 
  rect(botonReinicioX, botonReinicioY, 80, 40);
  fill(0);
  text("Reiniciar", botonReinicioX + 40, botonReinicioY + 25);
}


void mostrarImagen() {
  image(imagenes[pantallaActual], 0, 0, width, height);
}


void mostrarRect() {
  fill(255); // Color blanco
  rect(0, 0, width, 60);
}


void mostrarTexto(String texto) {
  fill(0);
  textSize(20);
  textAlign(CENTER);
  text(texto, width/2, 30);
}


void mouseClicked() {
  if ((pantallaActual == 2 || pantallaActual == 7) && !final1Alcanzado && !final2Alcanzado) {
    if (mouseX >= boton1X && mouseX <= boton1X + 100 && mouseY >= boton1Y && mouseY <= boton1Y + 40) {
      if (pantallaActual == 2) {
        pantallaActual = 3;
        final1Alcanzado = true;
        botonesActivos[3] = false;
        botonesActivos[4] = false;
      } else if (pantallaActual == 7) {
        pantallaActual = 8;
        final2Alcanzado = true;
        botonesActivos[8] = false;
        botonesActivos[9] = false;
      }
    } else if (mouseX >= boton2X && mouseX <= boton2X + 100 && mouseY >= boton2Y && mouseY <= boton2Y + 40) {
      if (pantallaActual == 2) {
        pantallaActual = 4;
      } else if (pantallaActual == 7) {
        pantallaActual = 9;
      }
    }
  } else if ((pantallaActual == 3 && final1Alcanzado) || (pantallaActual == 8 && final2Alcanzado) || pantallaActual == 11) {
    if (mouseX >= botonReinicioX && mouseX <= botonReinicioX + 80 && mouseY >= botonReinicioY && mouseY <= botonReinicioY + 40) {
      reiniciar();
    }
  } else {
    if (pantallaActual < numeroPantallas - 1 && botonesActivos[pantallaActual]) {
      pantallaActual++;
    }
  }

  if (pantallaActual >= 1 && pantallaActual <= 11) {
    botonesActivos[pantallaActual] = true; // Siguiente
  } else if (pantallaActual == 12) {
    botonesActivos[11] = false; // Siguiente
  }
}


void reiniciar() {
  pantallaActual = 0;
  final1Alcanzado = false;
  final2Alcanzado = false;
  for (int i = 0; i < numeroPantallas; i++) {
    botonesActivos[i] = true;
  }
}


void calcularCoordenadasBotones() {
  botonSiguienteX = width - 100;
  botonSiguienteY = height - 60;

  boton1X = width / 2 - 150;
  boton1Y = height - 60;
  boton2X = width / 2 + 50;
  boton2Y = height - 60;

  botonReinicioX = width - 100;
  botonReinicioY = height - 60;
}

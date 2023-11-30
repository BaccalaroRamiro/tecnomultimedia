class Botones {
  constructor() {
    this.botonSiguienteX = 0;
    this.botonSiguienteY = 0;
    this.boton1X = 0;
    this.boton1Y = 0;
    this.boton2X = 0;
    this.boton2Y = 0;
    this.botonReinicioX = 0;
    this.botonReinicioY = 0;
  }

  calcularCoordenadasBotones() {
    this.botonSiguienteX = width - 100;
    this.botonSiguienteY = height - 60;

    this.boton1X = width / 2 - 150;
    this.boton1Y = height - 60;
    this.boton2X = width / 2 + 50;
    this.boton2Y = height - 60;

    this.botonReinicioX = width - 100;
    this.botonReinicioY = height - 60;
  }

  dibujarBotones(pantallaActual, final1Alcanzado, final2Alcanzado) {
    if ((pantallaActual == 2 || pantallaActual == 7) && !final1Alcanzado && !final2Alcanzado) {
      fill(0, 255, 0);
      rect(this.boton1X, this.boton1Y, 100, 40);
      fill(0);
      text("SI", this.boton1X + 50, this.boton1Y + 25);

      fill(0, 255, 0);
      rect(this.boton2X, this.boton2Y, 100, 40);
      fill(0);
      text("NO", this.boton2X + 50, this.boton2Y + 25);
    } else if ((pantallaActual == 3 && final1Alcanzado) || (pantallaActual == 8 && final2Alcanzado) || pantallaActual == 11) {
      fill(255, 0, 0);
      rect(this.botonReinicioX, this.botonReinicioY, 80, 40);
      fill(0);
      text("Reiniciar", this.botonReinicioX + 40, this.botonReinicioY + 25);
    } else {
      fill(0, 255, 0);
      rect(this.botonSiguienteX, this.botonSiguienteY, 80, 40);
      fill(0);
      text("Siguiente", this.botonSiguienteX + 40, this.botonSiguienteY + 25);
    }
  }

manejarClic(pantallaActual, final1Alcanzado, final2Alcanzado) {
  if ((pantallaActual == 2 || pantallaActual == 7) && !final1Alcanzado && !final2Alcanzado) {
    if (mouseX >= this.boton1X && mouseX <= this.boton1X + 100 && mouseY >= this.boton1Y && mouseY <= this.boton1Y + 40) {
      if (pantallaActual == 2) {
        this.pantallaActual = 3;
        this.final1Alcanzado = true;
        pantalla.botonesActivos[3] = false;
        pantalla.botonesActivos[4] = false;
      } else if (pantallaActual == 7) {
        this.pantallaActual = 8;
        this.final2Alcanzado = true;
        pantalla.botonesActivos[8] = false;
        pantalla.botonesActivos[9] = false;
      }
    } else if (mouseX >= this.boton2X && mouseX <= this.boton2X + 100 && mouseY >= this.boton2Y && mouseY <= this.boton2Y + 40) {
      if (pantallaActual == 2) {
        this.pantallaActual = 4;
      } else if (pantallaActual == 7) {
        this.pantallaActual = 9;
      }
    }
  } else if ((pantallaActual == 3 && final1Alcanzado) || (pantallaActual == 8 && final2Alcanzado) || pantallaActual == 11) {
    if (mouseX >= this.botonReinicioX && mouseX <= this.botonReinicioX + 80 && mouseY >= this.botonReinicioY && mouseY <= this.botonReinicioY + 40) {
      this.reiniciar();
    }
  } else {
    if (this.pantallaActual < this.numeroPantallas - 1 && pantalla.botonesActivos[this.pantallaActual]) {
      this.pantallaActual++;
    }
  }

  if (this.pantallaActual >= 1 && this.pantallaActual <= 11) {
    pantalla.botonesActivos[this.pantallaActual] = true;
  } else if (this.pantallaActual === 12) {
    pantalla.botonesActivos[11] = false;
  }
}




}

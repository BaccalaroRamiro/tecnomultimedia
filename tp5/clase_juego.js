class Juego {
  constructor(personaje) {
    this.vidas = 3;
  }

  mostrar() {
    textSize(20);
    fill(0);
    text(`Vidas: ${this.vidas}`, 10, 30);
  }

  perderVida() {
    this.vidas--;
  }

  ganar() {
    // Ganaste el juego
    textSize(32);
    fill(0, 255, 0);
    text("¡Ganaste!", width / 2, height / 2);
    noLoop();
  }
}

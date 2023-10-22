class Juego {
  constructor(personaje) {
    this.vidas = 3;
  }

  mostrar() {
    textSize(30);
    fill(255,0,0);
    text(`Vidas: ${this.vidas}`, 60, 30);
  }

  perderVida() {
    this.vidas--;
  }

  ganar() {
    textAlign(CENTER);
    textSize(70);
    fill(0, 255, 0);
    text("¡Llegaste sano y salvo con tu madre!!", width / 2, height / 2);
    noLoop();
  }
}

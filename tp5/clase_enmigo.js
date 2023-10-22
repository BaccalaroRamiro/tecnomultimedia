class Enemigo {
  constructor() {
    this.tamano = 20;
    this.velocidad = random(1, 5);
    this.reiniciar();
  }

  mostrar() {
    fill(255, 0, 0);
    rect(this.x, this.y, this.tamano, this.tamano);
  }

  mover() {
    this.x += this.velocidad;
    if (this.x > width) {
      this.reiniciar();
    }
  }

  reiniciar() {
    this.x = 0;
    this.y = random(height / 2);
  }
}

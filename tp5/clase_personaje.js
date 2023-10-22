class Personaje {
  constructor() {
    this.x = width / 2;
    this.y = height - 20;
    this.tamano = 50;
  }

  mostrar() {
    image(imagenPersonaje, this.x, this.y, this.tamano, this.tamano);
  }

  mover(dx, dy) {
    this.x += dx * this.tamano;
    this.y += dy * this.tamano;
    this.x = constrain(this.x, 0, width - this.tamano);
    this.y = constrain(this.y, 0, height - this.tamano);
  }

  colision(enemigo) {
    return (
      this.x + this.tamano > enemigo.x &&
      this.x < enemigo.x + enemigo.tamano &&
      this.y + this.tamano > enemigo.y &&
      this.y < enemigo.y + enemigo.tamano
    );
  }
}

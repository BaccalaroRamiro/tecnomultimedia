class Minijuego {
  constructor(imagenPersonaje) {
    this.personaje = new Personaje(imagenPersonaje);
    this.juego = null;
    this.personaje = null;
    this.enemigos = [];
    this.estado = "inicio";
  //  this.imagenEnemigo = null;
    this.imagenPersonaje = null;
    this.imagenPortada = null;
    this.imagenPerdiste = null;
    this.imagenCabrita = null;
    this.imagenCamino = null;
    this.preload(); 
    this.iniciar();
    
  }

  preload() {
    this.imagenEnemigo = loadImage('data/lobo.png');
  //  this.imagenPersonaje = loadImage('data/sheep.png');
    this.imagenPortada = loadImage('data/portada2.jpg');
    this.imagenPerdiste = loadImage('data/perdiste.jpg');
    this.imagenCabrita = loadImage('data/cabrita.png');
    this.imagenCamino = loadImage('data/camino.jpg');
  }

  iniciar() {
    this.juego = new Juego();
    this.imagenPersonaje = loadImage('data/sheep.png');
    this.personaje = new Personaje(this.imagenPersonaje);
    
    for (let i = 0; i < 12; i++) {
      this.enemigos.push(new Enemigo(this.imagenEnemigo));
    }
  }
  
   cambiarEstado(nuevoEstado) {
    this.estado = nuevoEstado;
  }

  dibujar() {
    background(0);
    //imageMode(CENTER);
    image(this.imagenCamino, 0, 0, width, height);
    image(this.imagenCabrita, width / 2, 50 , 120,120);
    if (this.estado === "inicio") {
      this.mostrarPantallaInicio();
    } else if (this.estado === "perdiste") {
      this.mostrarPantallaPerdiste();
    } else {
      this.juego.mostrar();
      this.personaje.mostrar();

      for (let enemigo of this.enemigos) {
        enemigo.mostrar();
        enemigo.mover();

        if (this.personaje.colision(enemigo)) {
          this.juego.perderVida();
          enemigo.reiniciar();
          if (this.juego.vidas <= 0) {
            this.estado = "perdiste";
          }
        }

        if (this.personaje.y <= 0) {
          this.juego.ganar();
        }
      }
    }
  }

  keyPressed() {
    if (this.estado === "jugando") {
      if (keyCode === 87) {
        this.personaje.mover(0, -1);
      } else if (keyCode === 83) {
        this.personaje.mover(0, 1);
      } else if (keyCode === 65) {
        this.personaje.mover(-1, 0);
      } else if (keyCode === 68) {
        this.personaje.mover(1, 0);
      }
    }
  }

  mousePressed() {
    if (this.estado === "inicio") {
      this.estado = "jugando";
    } else if (this.estado === "perdiste") {
      this.estado = "inicio";
      this.juego.reiniciar();
    }
  }

  mostrarPantallaInicio() {
  //  imageMode(CENTER);
    image(this.imagenPortada, 0, 0, width, height);
    textSize(50);
    fill(255, 0, 0);
    textAlign(CENTER); 
    text("¡Llega con la mamá cabrita para ganar!!", width / 2, height / 2);
  }

  mostrarPantallaPerdiste() {
  //  imageMode(CENTER);
    image(this.imagenPerdiste, 0, 0, width, height );
    textSize(50);
    fill(255, 0, 0);
    textAlign(CENTER);
    text("¡Perdiste! Haz clic para volver a jugar.", width / 2, height / 2);
  }
}

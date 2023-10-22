let juego;
let personaje;
let enemigos = [];
let estado = "inicio"; // Variable de estado
let imagenEnemigo;

function setup() {
  createCanvas(1200, 800);
  juego = new Juego();
  personaje = new Personaje();
  for (let i = 0; i < 20; i++) {
    enemigos.push(new Enemigo());
  }
}

function draw() {
  background(0);

  if (estado === "inicio") {
    // Muestra la pantalla de inicio
    mostrarPantallaInicio();
  } else if (estado === "perdiste") {
    // Muestra la pantalla de "perdiste"
    mostrarPantallaPerdiste();
  } else {
    // Muestra el juego y el personaje
    juego.mostrar();
    personaje.mostrar();

    for (let enemigo of enemigos) {
      enemigo.mostrar();
      enemigo.mover();

      if (personaje.colision(enemigo)) {
        juego.perderVida();
        enemigo.reiniciar();
        if (juego.vidas <= 0) {
          estado = "perdiste"; // Cambia el estado a "perdiste" cuando se quedan sin vidas
        }
      }

      if (personaje.y <= 0) {
        juego.ganar();
      }
    }
  }
}

function keyPressed() {
  if (estado === "jugando") {
    if (keyCode === 87) {
      personaje.mover(0, -1);
    } else if (keyCode === 83) {
      personaje.mover(0, 1);
    } else if (keyCode === 65) {
      personaje.mover(-1, 0);
    } else if (keyCode === 68) {
      personaje.mover(1, 0);
    }
  }
}

function mousePressed() {
  if (estado === "inicio") {
    // Inicia el juego cuando se hace clic en la pantalla de inicio
    estado = "jugando";
  } else if (estado === "perdiste") {
    // Reinicia el juego cuando se hace clic en la pantalla de "perdiste"
    estado = "inicio";
    juego.reiniciar();
  }
}

function mostrarPantallaInicio() {
  textSize(32);
  fill(255);
  textAlign(CENTER);
  text("¡Haz clic para comenzar!", width / 2, height / 2);
}

function mostrarPantallaPerdiste() {
  textSize(32);
  fill(255);
  textAlign(CENTER);
  text("¡Perdiste! Haz clic para volver a jugar.", width / 2, height / 2);
}

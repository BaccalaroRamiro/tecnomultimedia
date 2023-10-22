let juego;
let personaje;
let enemigos = [];
let estado = "inicio"; 
let imagenEnemigo; 
let imagenPersonaje;
let imagenPortada;
let imagenPerdiste;
let imagenCabrita;
let imagenCamino;

function preload() {
  imagenEnemigo = loadImage('data/lobo.png');
  imagenPersonaje  = loadImage ('data/sheep.png');
  imagenPortada  = loadImage ('data/portada2.jpg');
  imagenPerdiste  = loadImage ('data/perdiste.jpg');
  imagenCabrita = loadImage ('data/cabrita.png');
  imagenCamino = loadImage ('data/camino.jpg');
  
}

function setup() {
  createCanvas(1200, 950);
  juego = new Juego();
  personaje = new Personaje();
  for (let i = 0; i < 12; i++) {
   enemigos.push(new Enemigo(imagenEnemigo)); 
  }
}

function draw() {
  background(0);
imageMode (CENTER);
image (imagenCamino, width / 2, height/2, width, height);
 image(imagenCabrita,width / 2, 50 , 120,120);
  if (estado === "inicio") {
    mostrarPantallaInicio();
  } else if (estado === "perdiste") {
    mostrarPantallaPerdiste();
  } else {
    juego.mostrar();
    personaje.mostrar();

    for (let enemigo of enemigos) {
      enemigo.mostrar();
      enemigo.mover();

      if (personaje.colision(enemigo)) {
        juego.perderVida();
        enemigo.reiniciar();
        if (juego.vidas <= 0) {
          estado = "perdiste";
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
    estado = "jugando";
  } else if (estado === "perdiste") {
    estado = "inicio";
    juego.reiniciar();
  }
}

function mostrarPantallaInicio() {
  imageMode (CENTER);
 image(imagenPortada, width / 2, height / 2, width, height);
  textSize(50);
  fill(255,0,0);
  textAlign(CENTER);
  text("¡Llega con la mamá cabrita para ganar!!", width / 2, height / 2);
}

 function mostrarPantallaPerdiste() {
 imageMode (CENTER);
 image(imagenPerdiste, width / 2, height / 2, width, height);
  textSize(50);
  fill(255,0,0);
  textAlign(CENTER);
  text("¡Perdiste! Haz clic para volver a jugar.", width / 2, height / 2);
}

let anchoCanvas = 800;
let altoCanvas = 500;
let xRaquetaIzquierda = 15;
let yRaquetaIzquierda = altoCanvas / 2 - 40;
let xRaquetaDerecha = anchoCanvas - 55;
let yRaquetaDerecha = altoCanvas / 2 - 40;
let anchoRaqueta = 50;
let altoRaqueta = 100;
let xPelota = anchoCanvas / 2;
let yPelota = altoCanvas / 2;
let velocidadPelotaX = 5;
let velocidadPelotaY = 5;
let tamañoPelota = 20;

let puntajeIzquierda = 0;
let puntajeDerecha = 0;

let juegoIniciado = false;
let mensajeVictoriaMostrado = false;

function preload() {
  imagenRaquetaIzq = loadImage('data/paleta1.png');
  imagenRaquetaDer = loadImage('data/paleta2.png');
  imagenFondo = loadImage('data/cancha.jpg');
  
  
}
function setup() {
  createCanvas(anchoCanvas, altoCanvas); 

}

function draw() {
  background(0);
    image(imagenFondo, 0 , 0, anchoCanvas, altoCanvas);



  if (juegoIniciado) {

    fill(255);
  image(imagenRaquetaIzq, xRaquetaIzquierda, yRaquetaIzquierda, anchoRaqueta, altoRaqueta);
  image(imagenRaquetaDer, xRaquetaDerecha, yRaquetaDerecha, anchoRaqueta, altoRaqueta);
  ellipse(xPelota, yPelota, tamañoPelota);

    if (keyIsDown(87) && yRaquetaIzquierda > 0) {
      yRaquetaIzquierda -= 5;
    }
    if (keyIsDown(83) && yRaquetaIzquierda + altoRaqueta < altoCanvas) {
      yRaquetaIzquierda += 5;
    }
    if (keyIsDown(UP_ARROW) && yRaquetaDerecha > 0) {
      yRaquetaDerecha -= 5;
    }
    if (keyIsDown(DOWN_ARROW) && yRaquetaDerecha + altoRaqueta < altoCanvas) {
      yRaquetaDerecha += 5;
    }


    xPelota += velocidadPelotaX;
    yPelota += velocidadPelotaY;

    if (xPelota < xRaquetaIzquierda + anchoRaqueta && yPelota > yRaquetaIzquierda && yPelota < yRaquetaIzquierda + altoRaqueta) {
      velocidadPelotaX *= -1;
    }
    if (xPelota + tamañoPelota > xRaquetaDerecha && yPelota > yRaquetaDerecha && yPelota < yRaquetaDerecha + altoRaqueta) {
      velocidadPelotaX *= -1;
    }

    if (yPelota < 0 || yPelota > altoCanvas) {
      velocidadPelotaY *= -1;
    }
    
    if (xPelota < 0) {
      puntajeDerecha++;
      reiniciarPelota();
    }
    if (xPelota > anchoCanvas) {
      puntajeIzquierda++;
      reiniciarPelota();
    }

    textSize(32);
    fill(255);
    text(puntajeIzquierda + " - " + puntajeDerecha, anchoCanvas / 2 - 20, 30);

    if (puntajeIzquierda >= 5 || puntajeDerecha >= 5) {
      juegoIniciado = false;
      mensajeVictoriaMostrado = true;
    }
  }

  if (!juegoIniciado || mensajeVictoriaMostrado) {
    textSize(24);
    fill(255);
    textAlign(CENTER, CENTER);

    if (mensajeVictoriaMostrado) {
      fill (0,0,255);
      let ganador = puntajeIzquierda > puntajeDerecha ? "Jugador Izquierdo" : "Jugador Derecho";
      text(ganador + " Gana!", anchoCanvas / 2, altoCanvas - 400);
      fill (255,0,0);
      text("Presiona ESPACIO para reiniciar", anchoCanvas / 2, altoCanvas / 2 + 150);
      textSize(40);
      fill (0);
      text ("Gracias por jugar", anchoCanvas / 2, altoCanvas / 2 -25 );
      textSize(24);
      text (" Ramiro Baccalaro  ", anchoCanvas / 2, altoCanvas / 2 +50);
      text ("Comisión 5 ", anchoCanvas / 2, altoCanvas / 2 +80);

    } else {
      fill (0);
      textSize(50);
      text("PONG", anchoCanvas / 2, altoCanvas / 2 - 50);
      textSize(24);
      
      text("Presiona ESPACIO para jugar", anchoCanvas / 2, altoCanvas / 2 + 150);
    }
  }
}

function keyPressed() {
  if (!juegoIniciado && keyCode === 32) {
    juegoIniciado = true;
    mensajeVictoriaMostrado = false; 
    puntajeIzquierda = 0;
    puntajeDerecha = 0;
    reiniciarPelota(); 
  }
}

function reiniciarPelota() {
  xPelota = anchoCanvas / 2;
  yPelota = altoCanvas / 2;
  velocidadPelotaX = 5;
  velocidadPelotaY = random(-5, 5); 
}

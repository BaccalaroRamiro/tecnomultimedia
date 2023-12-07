let aventura;
let minijuego;
let imagenPersonaje;
function preload() {
  aventura = new Aventura(); 
  
  imagenPersonaje = loadImage ('data/sheep.png' , img => {
    
    imagenPersonaje = img; 
    
    
    minijuego = new Minijuego(imagenPersonaje);
  });

}

function setup() {
  createCanvas(600, 600);

}

function draw() {
  background(255);
    
  if (aventura.pantallaActual >= 0 && aventura.pantallaActual < aventura.numeroPantallas) {
  aventura.calcularCoordenadasBotones(); 
    aventura.mostrarImagen();
    aventura.mostrarRect();
    aventura.mostrarTexto(aventura.textos[aventura.pantallaActual]);
    aventura.dibujar();

    if ((aventura.pantallaActual == 2 || aventura.pantallaActual == 7) && !aventura.final1Alcanzado && !aventura.final2Alcanzado) {
      aventura.mostrarBotones2();
    } else if ((aventura.pantallaActual == 3 && aventura.final1Alcanzado) || (aventura.pantallaActual == 8 && aventura.final2Alcanzado) || aventura.pantallaActual == 11) {
      aventura.mostrarBotonReinicio();
    } else {
      aventura.mostrarBotonSiguiente();
    }
    aventura.mostrarRect();
    aventura.mostrarTexto(aventura.textos[aventura.pantallaActual]);
    
    if (aventura.pantallaActual === 10) {
      minijuego.dibujar(); 
     minijuego.personaje.mover();
     
     minijuego.personaje.mostrar();
    }
    
    
    
     if (imagenPersonaje) {
    image(imagenPersonaje, width / 2, height / 2, 100, 100);

  } else {
    text('Cargando...', 10, 20);
  } 
    
    
  }
}

  

function mouseClicked() {
  aventura.mouseClicked();
  
  if (aventura.pantallaActual === 10) {
    minijuego.mousePressed();
  }
  
}

  function keyPressed() {
  aventura.keyPressed();
  
  
  if (aventura.pantallaActual === 10) {
    minijuego.keyPressed();
    
  }
}

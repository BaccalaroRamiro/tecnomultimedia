let pantalla;
let botones;
function setup() {
  createCanvas(600, 600);
  pantalla = new Pantalla();
  botones = new Botones();
  pantalla.botones = botones;
  pantalla.inicializar();
}

function draw() {
  pantalla.dibujarPantalla();
}

function mouseClicked() {
  pantalla.manejarClic();
}

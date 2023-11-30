class Pantalla {
  constructor() {
    this.pantallaActual = 0;
    this.numeroPantallas = 12;
    this.botones = new Botones();
    this.final1Alcanzado = false;
    this.final2Alcanzado = false;
    this.imagenes = [];
    this.textos = [];
   
    this.textos[0] = "EL LOBO Y LOS SIETE CABRITILLOS \n click en siguiente para comenzar";
  this.textos[1] = "La madre cabra sale de casa dejando a sus siete cabritos solos.\nNo le abran la puerta a nadie exclamó la madre antes de irse.";
  this.textos[2] = "El lobo malvado se acerca a la puerta y llama a los cabritos. \n¿Abrir la puerta?.";
  this.textos[3] = "El lobo entra por la puerta y atrapa a los cabritos \n No debiste haber abierto la puerta.";
  this.textos[4] = "Los cabritos escuchan una voz ronca que dice ser su madre.";
  this.textos[5] = "Los cabritos saben que es el lobo quien imita su voz, su madre tiene una voz \nmucho más suave y delicada.";
  this.textos[6] = "El lobo se enfurece y se marcha.";
  this.textos[7] = "El lobo encuentra una escalera y sube al tejado de la casa\n de los cabritos. Desde allí, intenta entrar por la chimenea. \n¿Enfrentarse al lobo?.";
  this.textos[8] = "El lobo logra entrar por la chimenea y atrapa a los cabritos.";
  this.textos[9] = "La madre cabra llega a tiempo a la casa y pelea contra el lobo\n salvando a sus hijos.";
  this.textos[10] = "Los cabritos se reencuentran con su madre y celebran\n su regreso. Están agradecidos por su valentía y prometen ser\n más cuidadosos en el futuro.";
  this.textos[11] = "GRACIAS POR JUGAR\n Ramiro Baccalaro Com5\n .";
  }
  

  inicializar() {
   for (let i = 0; i < this.numeroPantallas; i++) {
    let nombreImagen = "pantalla" + i + ".jpg";
    this.imagenes[i] = loadImage(nombreImagen);
  }
    this.botones.calcularCoordenadasBotones();
  }

 
  

  dibujarPantalla() {
    background(255);
    if (this.pantallaActual >= 0 && this.pantallaActual < this.numeroPantallas) {
      this.mostrarImagen();
      this.botones.dibujarBotones(this.pantallaActual, this.final1Alcanzado, this.final2Alcanzado);
      this.mostrarRect();
      this.mostrarTexto(this.textos[this.pantallaActual]);
    }
  }

  mostrarImagen() {
    image(this.imagenes[this.pantallaActual], 0, 0, width, height);
  }

  mostrarRect() {
    fill(255);
    rect(0, 0, width, 60);
  }

  mostrarTexto(texto) {
    fill(0);
    textSize(15);
    textAlign(CENTER);
    text(texto, width / 2, 30);
  }

  manejarClic() {
    this.botones.manejarClic(this.pantallaActual, this.final1Alcanzado, this.final2Alcanzado);
  }

  reiniciar() {
    this.pantallaActual = 0;
    this.final1Alcanzado = false;
    this.final2Alcanzado = false;
    for (let i = 0; i < numeroPantallas; i++) {
    this.botonesActivos[i] = true;
  }
 }

 cambiarPantalla() {
    if ((this.pantallaActual == 2 || this.pantallaActual == 7) && !this.final1Alcanzado && !this.final2Alcanzado) {
      

    } else if ((this.pantallaActual == 3 && this.final1Alcanzado) || (this.pantallaActual == 8 && this.final2Alcanzado) || this.pantallaActual == 11) {
      

    } else {
      if (this.pantallaActual < this.numeroPantallas - 1 && this.botonesActivos[this.pantallaActual]) {
        this.pantallaActual++;
      }
    }

    if (this.pantallaActual >= 1 && this.pantallaActual <= 11) {
      this.botonesActivos[this.pantallaActual] = true;
    } else if (this.pantallaActual == 12) {
      this.botonesActivos[11] = false;
    }
  }
}

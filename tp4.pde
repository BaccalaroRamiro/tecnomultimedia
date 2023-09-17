let canvasWidth = 600;
let canvasHeight = 400;
let leftPaddleX = 20;
let leftPaddleY = canvasHeight / 2 - 40;
let rightPaddleX = canvasWidth - 30;
let rightPaddleY = canvasHeight / 2 - 40;
let paddleWidth = 10;
let paddleHeight = 80;
let ballX = canvasWidth / 2;
let ballY = canvasHeight / 2;
let ballSpeedX = 5;
let ballSpeedY = 5;
let ballSize = 20;

let leftScore = 0;
let rightScore = 0;


let gameStarted = false;

let victoryMessageShown = false;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
}

function draw() {
  background(0);

  if (gameStarted) {

    fill(255);
    rect(leftPaddleX, leftPaddleY, paddleWidth, paddleHeight);
    rect(rightPaddleX, rightPaddleY, paddleWidth, paddleHeight);
    ellipse(ballX, ballY, ballSize);

    if (keyIsDown(87) && leftPaddleY > 0) {
      leftPaddleY -= 5;
    }
    if (keyIsDown(83) && leftPaddleY + paddleHeight < canvasHeight) {
      leftPaddleY += 5;
    }
    if (keyIsDown(UP_ARROW) && rightPaddleY > 0) {
      rightPaddleY -= 5;
    }
    if (keyIsDown(DOWN_ARROW) && rightPaddleY + paddleHeight < canvasHeight) {
      rightPaddleY += 5;
    }

    ballX += ballSpeedX;
    ballY += ballSpeedY;


    if (ballX < leftPaddleX + paddleWidth && ballY > leftPaddleY && ballY < leftPaddleY + paddleHeight) {
      ballSpeedX *= -1;
    }
    if (ballX + ballSize > rightPaddleX && ballY > rightPaddleY && ballY < rightPaddleY + paddleHeight) {
      ballSpeedX *= -1;
    }

    if (ballY < 0 || ballY > canvasHeight) {
      ballSpeedY *= -1;
    }

    if (ballX < 0) {
      rightScore++;
      resetBall();
    }
    if (ballX > canvasWidth) {
      leftScore++;
      resetBall();
    }

    textSize(32);
    fill(255);
    text(leftScore + " - " + rightScore, canvasWidth / 2 - 20, 30);
    
    if (leftScore >= 5 || rightScore >= 5) {
      gameStarted = false;
      victoryMessageShown = true;
    }
  } 

  if (!gameStarted || victoryMessageShown) {
    // La pantalla de inicio o el mensaje de victoria
    textSize(24);
    fill(255);
    textAlign(CENTER, CENTER);
    
    if (victoryMessageShown) {
      fill (0,255,0);
      let winner = leftScore > rightScore ? "Jugador Izquierdo" : "Jugador Derecho";
      text(winner + " Gana!", canvasWidth / 2, canvasHeight - 350);
      fill (255,0,0);
      text("Presiona ESPACIO para reiniciar", canvasWidth / 2, canvasHeight / 2 + 150);
      textSize(40);
      fill (255);
      text ("Gracias por jugar", canvasWidth / 2, canvasHeight / 2 -25 );
      textSize(24);
      text ("Ramiro Baccalaro \n Comision 5 ", canvasWidth / 2, canvasHeight / 2 +50);
    } else {
      textSize(50);
      text("PONG", canvasWidth / 2, canvasHeight / 2 - 50);
      textSize(24);
      
      text("Presiona ESPACIO para jugar", canvasWidth / 2, canvasHeight / 2 + 150);
    }
  }
}

function keyPressed() {
  if (!gameStarted && keyCode === 32) {
    gameStarted = true;
    victoryMessageShown = false; 
    leftScore = 0;
    rightScore = 0;
    resetBall(); 
  }
}

function resetBall() {
  ballX = canvasWidth / 2;
  ballY = canvasHeight / 2;
  ballSpeedX = 5;
  ballSpeedY = random(-5, 5); 
}

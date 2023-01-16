const board = document.getElementById("board");
const paddleLeft = document.getElementById("paddleLeft");
const paddleRight = document.getElementById("paddleRight");
const ball = document.getElementById("ball");
const ballAttrs = {
    "posX":0,
    "posY":0,
    "speedX": 1,
    "speedY": 1
}

ball.style.left = ballAttrs.posX + "px";
ball.style.top = ballAttrs.posY + "px";


setInterval(()=>{
    const ballRightEdgePos = ballAttrs.posX + ball.offsetWidth;
    if ((ballRightEdgePos > board.offsetWidth) || (ballAttrs.posX < 0)) {
        ballAttrs.speedX = -ballAttrs.speedX;
    }
    const ballBottomEdgePos = ballAttrs.posY + ball.offsetHeight;
    if ((ballBottomEdgePos > board.offsetHeight) || (ballAttrs.posY < 0)) {
        ballAttrs.speedY = -ballAttrs.speedY;
    }
    ballAttrs.posX += ballAttrs.speedX;
    ball.style.left = ballAttrs.posX + "px";
    ballAttrs.posY += ballAttrs.speedY;
    ball.style.top = ballAttrs.posY + "px";
}, 10);


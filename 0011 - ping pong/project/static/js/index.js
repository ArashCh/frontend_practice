const board = document.getElementById("board");
const paddleLeft = document.getElementById("paddleLeft");
const paddleRight = document.getElementById("paddleRight");
const paddleWidth = paddleLeft.offsetWidth;
const paddleHeight = paddleLeft.offsetHeight;
const ball = document.getElementById("ball");
const ballAttrs = {
    "posX":board.offsetWidth/2,
    "posY":board.offsetHeight/2,
    "speedX": 2,
    "speedY": 2,
}
const paddleLeftAttrs = {
    "posY":board.offsetHeight/2 - paddleHeight/2
}
const paddleRightAttrs = {
    "posY":board.offsetHeight/2 - paddleHeight/2,
    "speedY": 2
}
const scores = {
    "player": 0,
    "CPU": 0
}

ball.style.left = ballAttrs.posX + "px";
ball.style.top = ballAttrs.posY + "px";

paddleLeft.style.left = "0px";
paddleLeft.style.top = paddleLeftAttrs.posY + "px";

paddleRight.style.right = "0px";
paddleRight.style.top = paddleRightAttrs.posY + "px";

let updateScoreBoard = () => {
    document.getElementById("scoreBoard").textContent = "You "+scores.player+" - CPU "+scores.CPU;
};

let CPUMove = () => {
    const paddleRightEdgeTop = paddleRight.offsetTop;
    const paddleRightEdgeBottom = paddleRightEdgeTop + paddleHeight;

    if (paddleRightEdgeTop < 0) paddleRightAttrs.speedY = -paddleRightAttrs.speedY;
    if (paddleRightEdgeBottom+10 > board.offsetHeight) paddleRightAttrs.speedY = -paddleRightAttrs.speedY;

    if (ballAttrs.posY > (paddleRightAttrs.posY + (paddleHeight/2))) {
        paddleRightAttrs.posY += paddleRightAttrs.speedY;
    } else {
        paddleRightAttrs.posY -= paddleRightAttrs.speedY;
    }
    paddleRight.style.top =  paddleRightAttrs.posY  + "px";
};

let ballPhysics = (ball) => {
    // if the ball hits the vertical edges
    const ballEdgeRight = ballAttrs.posX + ball.offsetWidth;
    if (ballEdgeRight > board.offsetWidth) {
        ballAttrs.speedX = -ballAttrs.speedX;
        scores.player += 1;
        updateScoreBoard();
    }
    if (ballAttrs.posX < 0) {
        ballAttrs.speedX = -ballAttrs.speedX;
        scores.CPU += 1;
        updateScoreBoard();
    }
    // if the ball hits the horizontal edges
    const ballEdgeBottom = ballAttrs.posY + ball.offsetHeight;
    if ((ballEdgeBottom > board.offsetHeight) || (ballAttrs.posY < 0)) {
        ballAttrs.speedY = -ballAttrs.speedY;
    }

    ballAttrs.posX += ballAttrs.speedX;
    ball.style.left = ballAttrs.posX + "px";
    ballAttrs.posY += ballAttrs.speedY;
    ball.style.top = ballAttrs.posY + "px";
}

let CheckPaddleCollision = () => {
    const paddleLeftEdgeTop = paddleLeft.offsetTop;
    const paddleLeftEdgeRight = paddleWidth;
    const paddleLeftEdgeBottom = paddleLeftEdgeTop + paddleHeight;
    
    const paddleRightEdgeTop = paddleRight.offsetTop;
    const paddleRightEdgeBottom = paddleRightEdgeTop + paddleHeight;
    const paddleRightEdgeLeft = paddleRight.offsetLeft;

    const ballMargin = 5;

    const ballEdgeTop = ballAttrs.posY - ballMargin;
    const ballEdgeBottom = ballAttrs.posY + ball.offsetHeight + ballMargin;
    const ballEdgeRight = ballAttrs.posX + ball.offsetWidth + ballMargin;
    const ballEdgeLeft = ballAttrs.posX - ballMargin;

    if (
            (
                (ballEdgeLeft <= paddleLeftEdgeRight) &&
                (ballEdgeBottom >= paddleLeftEdgeTop) &&
                (ballEdgeTop <= paddleLeftEdgeBottom)
            )
            ||
            (
                (ballEdgeRight >= paddleRightEdgeLeft) &&
                (ballEdgeBottom >= paddleRightEdgeTop) &&
                (ballEdgeTop <= paddleRightEdgeBottom)
            )
        ) {
            ballAttrs.speedX = -ballAttrs.speedX;
    }
};

setInterval(()=>{
    ballPhysics(ball);
    CPUMove();
    CheckPaddleCollision();
}, 10);

board.addEventListener("mousemove", (event)=>{
    const boardEdgeTop = board.offsetTop - (board.offsetHeight/2)
    const mouseY = event.clientY - boardEdgeTop;
    if (mouseY < 0) return
    if ((mouseY+paddleHeight+10) > board.offsetHeight) return
    paddleLeft.style.top = mouseY + "px";
});

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
    "speedY": 2
}
const paddleLeftAttrs = {
    "posY":board.offsetHeight/2 - paddleHeight/2
}
const paddleRightAttrs = {
    "posY":board.offsetHeight/2 - paddleHeight/2,
    "speedY": 2
}


ball.style.left = ballAttrs.posX + "px";
ball.style.top = ballAttrs.posY + "px";

paddleLeft.style.left = "0px";
paddleLeft.style.top = paddleLeftAttrs.posY + "px";

paddleRight.style.right = "0px";
paddleRight.style.top = paddleRightAttrs.posY + "px";


let CPUMove = () => {
    const paddleRightEdgeTop = paddleRight.offsetTop;
    const paddleRightEdgeBottom = paddleRightEdgeTop + paddleHeight;

    if (paddleRightEdgeTop < 0) paddleRightAttrs.speedY = -paddleRightAttrs.speedY;
    if (paddleRightEdgeBottom+10 > board.offsetHeight) paddleRightAttrs.speedY = -paddleRightAttrs.speedY;

    paddleRightAttrs.posY += paddleRightAttrs.speedY;
    paddleRight.style.top =  paddleRightAttrs.posY  + "px";
};

let ballPhysics = (ball) => {
    const ballEdgeRight = ballAttrs.posX + ball.offsetWidth;
    if ((ballEdgeRight > board.offsetWidth) || (ballAttrs.posX < 0)) {
        ballAttrs.speedX = -ballAttrs.speedX;
    }
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
    const paddleLeftEdgeRight = paddleLeft.offsetLeft + paddleWidth;
    const paddleLeftEdgeBottom = paddleLeftEdgeTop + paddleHeight;
    
    const paddleRightEdgeTop = paddleRight.offsetTop;
    const paddleRightEdgeBottom = paddleRightEdgeTop + paddleHeight;
    const paddleRightEdgeLeft = paddleRight.offsetLeft;

    const ballEdgeTop = ballAttrs.posY;
    const ballEdgeBottom = ballAttrs.posY + ball.offsetHeight;
    const ballEdgeRight = ballAttrs.posX + ball.offsetWidth;
    const ballEdgeLeft = ballAttrs.posX;

    if (
            (
                (ballEdgeLeft <= paddleLeftEdgeRight) &&
                (ballEdgeBottom >= paddleLeftEdgeTop) &&
                (ballEdgeTop <= paddleLeftEdgeBottom) &&
                (ballEdgeLeft >= 0)
            )
            ||
            (
                (ballEdgeRight <= paddleRightEdgeLeft) &&
                (ballEdgeBottom > paddleRightEdgeTop) &&
                (ballEdgeTop < paddleRightEdgeBottom) &&
                (ballEdgeRight > board.offsetWidth)
            )
        ) {
            ballAttrs.speedX = -ballAttrs.speedX;
    }
    if (
            (
                (ballEdgeLeft <= paddleLeftEdgeRight) &&
                (ballEdgeBottom > paddleLeftEdgeTop) &&
                (ballEdgeTop < paddleLeftEdgeBottom) &&
                (ballEdgeLeft > 0)
            )
            ||
            (
                (ballEdgeRight <= paddleRightEdgeLeft) &&
                (ballEdgeBottom > paddleRightEdgeTop) &&
                (ballEdgeTop < paddleRightEdgeBottom) &&
                (ballEdgeRight > board.offsetWidth)
            )
        ) {
            ballAttrs.speedX = -ballAttrs.speedX;
    }
};


setInterval(()=>{
    ballPhysics(ball);
    CPUMove();
    CheckPaddleCollision();
}, 80);

board.addEventListener("mousemove", (event)=>{
    const boardEdgeTop = board.offsetTop - (board.offsetHeight/2)
    const mouseY = event.clientY - boardEdgeTop;
    console.log(mouseY);
    if (mouseY < 0) return
    if ((mouseY+paddleHeight+10) > board.offsetHeight) return
    paddleLeft.style.top = mouseY + "px";
});


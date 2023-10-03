let crossbar = new Crossbar(300,480,150,20,'blue');
crossbar.draw();
let ball = new Ball(300,100,20,'red');
ball.drawBall();



let gameover = false;
function play() {
    if (!gameover) {
        ball.clear();
        ball.drawBall();
        ball.update();

        crossbar.draw();
        crossbar.collideBall(ball);

        requestAnimationFrame(play);

        if (ball.y >= ball.canvas.height - ball.radius ) {
            gameover = false;
            alert('You Loser');
        }
    }
}
play();

window.addEventListener('keyup', (evt) => {
    let key = evt.keyCode;
    switch (key) {
        case 37:
            crossbar.moveLeft();
            break;
        case 39:
            crossbar.moveRight();
            break;
    }
});

let arr = [];
const column = 6;
const row = 2;

function getBricks() {
    for (let i = 0; i < row; i++) {
        let item = [];
        for (let j = 0; j < column; j++) {
            let brick = new Bricks(25+j*(70+25),25+i*(15+25),70,15,'blue',25,25,i,j);
            item.push(brick);
        }
        arr.push(item);
    }
}
getBricks();

function drawBricks () {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (!arr[i][j].broken) {
                arr[i][j].drawbrick();
            }

        }
    }
}
drawBricks();

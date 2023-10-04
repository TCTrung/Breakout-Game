let crossbar = new Crossbar(300,480,150,20,'blue',50);
crossbar.draw();

let scores = new Scores(0);

let ball = new Ball(100,180,20,'red',3,3);


let arrBrick = [];
let columns = 12;
let rows = 2;
function getBrick(){
    for (let i = 0; i < rows; i++) {
        let item = []
        for (let j = 0; j < columns; j++) {
            let brick = new Brick(40, 40, 'purple', 20, 20, i, j, 10 + j*(40+20), 25 + i*(40+20))
            item.push(brick);
        }
        arrBrick.push(item);
    }
}
getBrick();

function drawBrick(){
    for (let i = 0; i < arrBrick.length; i++) {
        for (let j = 0; j < arrBrick[i].length; j++) {
            if (!arrBrick[i][j].isBroken) {
                arrBrick[i][j].drawbricks();
            }
        }
    }
}
console.log(arrBrick)




let Gameover = false;
function play() {
    if (!Gameover) {
        ball.move();
        ball.drawBall();


        drawBrick();
        ball.collisionBrick(arrBrick);
        ball.collisionWall();
        ball.update();


        crossbar.draw();
        crossbar.collideBall(ball);
        crossbar.fixedPosition();

        scores.drawPoint();

        requestAnimationFrame(play);

        if (ball.y >= ball.canvas.height - ball.radius) {
            Gameover = true;
        }
    }else {
        alert('You Loser!');
        document.location.reload();
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



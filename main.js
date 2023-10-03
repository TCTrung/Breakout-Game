let crossbar = new Crossbar(300,480,150,20,'blue',50);
crossbar.draw();
// let crossbar1 = new Crossbar(300,5,150,20,'blue',50);
// crossbar1.draw();
let scores = new Scores(0);

let ball = new Ball(100,180,20,'red',3,3);


let arrBrick = [];
const columns = 14;
const rows = 2;
function getBrick(){
    for (let i = 0; i < rows; i++) {
        let item = []
        for (let j = 0; j < columns; j++) {
            let brick = new Brick(40, 40, 'purple', 10, 10, i, j, 10 + j*(40+10), 25 + i*(40+10))
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
        // crossbar1.draw();
        crossbar.collideBall(ball);
        // crossbar1.collideBall1(ball);

        crossbar.fixedPosition();
        // crossbar1.fixedPosition();

        scores.drawPoint();

        requestAnimationFrame(play);

        if (ball.y >= ball.canvas.height - ball.radius) {
            Gameover = true;
        }
    }else {
        alert('You Loser!');
    }
}
play();

window.addEventListener('keyup', (evt) => {
    let key = evt.keyCode;
    switch (key) {
        case 37:
            crossbar.moveLeft();
            // crossbar1.moveLeft();
            break;
        case 39:
            crossbar.moveRight();
            // crossbar1.moveRight();
            break;
    }
});



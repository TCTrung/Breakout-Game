

class Crossbar {
    x;
    y;
    width;
    height;
    color;
    ctx;

    constructor(x, y, width, height,color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext('2d');
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.rect(this.x,this.y,this.width,this.height);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
    }

    move() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    moveLeft(){
        this.x -= 30;
    }

    moveRight(){
        this.x += 30;
    }

    collideBall(ball) {
        if (ball.y + ball.radius > this.y
            && this.x <= ball.x && this.x + this.width > ball.x) {
            ball.xSpeed = +ball.xSpeed;
            ball.ySpeed = -ball.ySpeed;
        }
    }


}
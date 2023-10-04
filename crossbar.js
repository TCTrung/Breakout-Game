

class Crossbar {
    x;
    y;
    width;
    height;
    color;
    ctx;
    speed;
    isleft;
    isRight;

    constructor(x, y, width, height,color,speed) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.speed = speed;
        this.isleft = false;
        this.isRight = false;
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


    moveLeft(){
        this.x -= this.speed;
    }

    moveRight(){
        this.x += this.speed;
    }

    collideBall(ball) {
        if (ball.y + ball.radius >= this.y
            && this.x <= ball.x && this.x + this.width > ball.x) {
            ball.xSpeed = +ball.xSpeed;
            ball.ySpeed = -ball.ySpeed;
        }
    }


    fixedPosition () {
        if (this.x < 0) {
            this.x = 0;
        } else if(this.x + this.width > this.canvas.width) {
            this.x = this.canvas.width - this.width;
        }
    }


}
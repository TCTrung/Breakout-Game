class Ball {
    x;
    y;
    radius;
    color;
    ctx;
    xSpeed;
    ySpeed;

    constructor(x, y, radius, color,xSpeed,ySpeed) {
        this.x = x;
        this.y = y;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
        this.radius = radius;
        this.color = color;
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');

    }

    drawBall() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
    }

    move() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }


    collisionWall() {
        if(this.x <= this.radius || this.x > this.canvas.width - this.radius) {
            this.xSpeed = -this.xSpeed;
        }
        if (this.y <= this.radius)
        {
            this.ySpeed = -this.ySpeed;
        }
    }

    update() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
    }

    collisionBrick(bricks) {
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 12; j++) {
                if (bricks[i][j].isBroken === false) {

                        if (this.y > bricks[i][j].y && this.y < bricks[i][j].y + 40
                            && this.x > bricks[i][j].x && this.x < bricks[i][j].x + 40
                        ) {
                            this.ySpeed = -this.ySpeed;
                            bricks[i][j].isBroken = true;
                            scores.point += 1;
                            console.log(1)
                        // } else if (scores.point === 23) {
                        //     alert('You Win !');
                        //     document.location.reload();
                        }
                    }
                }
        }
        if (scores.point === 23) {
            alert('You Win !');
            document.location.reload();
        }
    }



}
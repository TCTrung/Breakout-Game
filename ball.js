class Ball {
    x;
    y;
    radius;
    color;
    ctx;
    xSpeed;
    ySpeed;

    constructor(x, y, radius, color, xSpeed, ySpeed) {
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
        if (this.x <= this.radius || this.x > this.canvas.width - this.radius) {
            this.xSpeed = -this.xSpeed;
        }
        if (this.y <= this.radius) {
            this.ySpeed = -this.ySpeed;
        }
    }

    update() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
    }

    collisionBrick(bricks) {
        for (let i = 0; i < bricks.length; i++) {
            for (let j = 0; j < bricks[i].length; j++) {
                let brick = bricks[i][j];
                if (!brick.isBroken) {
                    if (this.x + this.radius >= brick.x && this.x - this.radius <= brick.x + brick.width &&
                        this.y + this.radius >= brick.y && this.y - this.radius <= brick.y + brick.height) {
                        this.ySpeed = -this.ySpeed;
                        brick.isBroken = true;
                        scores.point += 1;
                    }
                }
            }
        }
        // Kiểm tra điều kiện thắng/thua ở đây (ví dụ: điểm số đạt mức nào đó)
        if (scores.point === 24) {
            alert('You Win!');
            document.location.reload();
        }
    }
}
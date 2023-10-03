class Ball {
    x;
    y;
    radius;
    color;
    ctx;
    direction;
    xSpeed;
    ySpeed;

    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.xSpeed = 3;
        this.ySpeed =3;
        this.radius = radius;
        this.color = color;
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.direction = 'top';
    }

    drawBall() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width,this.canvas.height);
    }



    update() {

        this.x = this.x + this.xSpeed;
        this.y = this.y + this.ySpeed;


        const isCollidingWithRightSide = (this.x + this.radius >= this.canvas.width);

        if (isCollidingWithRightSide) {
            this.x = this.canvas.width - this.radius;
            this.xSpeed = -this.xSpeed;
        }

        const isCollidingWithLeftSide = (this.x - this.radius <= 0);

        if (isCollidingWithLeftSide) {
            this.x = 0 + this.radius;
            this.xSpeed = -this.xSpeed;
        }

        const isCollidingWithBottomSide = (this.y + this.radius >= this.canvas.height);

        if (isCollidingWithBottomSide) {
            this.y = this.canvas.height - this.radius;
            this.ySpeed = -this.ySpeed;
        }

        const isCollidingWithTopSide = (this.y - this.radius <= 0);

        if (isCollidingWithTopSide) {
            this.y = 0 + this.radius;
            this.ySpeed = -this.ySpeed;
        }
    }

    td() {
        this.x = this.xSpeed;
        this.y = this.ySpeed;

    }


}
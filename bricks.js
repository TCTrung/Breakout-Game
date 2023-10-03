class Bricks {
    x;
    y;
    width;
    height;
    color;
    ctx;
    i;
    j;
    margin;
    distance;
    broken;

    constructor(x, y, width, height,color,margin,distance,i,j) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.i = i;
        this.j = j;
        this.margin = margin;
        this.distance = distance;
        this.broken = false;
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext('2d');
    }

    drawbrick() {
        this.ctx.beginPath();
        this.ctx.rect(
            this.margin + this.j * (this.width +this.distance),
            this.margin + this.i * (this.height + this.distance),
            this.width,this.height);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
    }

}

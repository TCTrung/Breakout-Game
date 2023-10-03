class Brick {
    x;
    y;
    width;
    height;
    color;
    ctx;
    margin; // Lề giữa 2 viên gạch phía ngoài
    distance; //Khoảng cách giữa các viên gạch
    isBroken; // Xem gạch đã vỡ hay chưa

    constructor(
        width,
        height,
        color,
        margin,
        distance,
        i, j,
        x,y) {

        this.width = width;
        this.height = height;
        this.color = color;
        this.margin = margin;
        this.distance = distance;
        this.isBroken = false;
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.i = i;
        this.j = j;
        this.x = x;
        this.y = y;

    }

    drawbricks() {
        this.ctx.beginPath();
        this.ctx.rect(
            this.margin + this.j * (this.width + this.distance),
            this.margin + this.i * (this.height + this.distance),
            this.width,
            this.height,
        )
        this.ctx.fillStyle = this.color;
        this.ctx.fill()
        this.ctx.closePath();
    }
}
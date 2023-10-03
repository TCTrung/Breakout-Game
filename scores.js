class Scores {
    point;
    constructor(point) {
        this.point = point;
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
    }
    drawPoint () {
        this.ctx.font = '15px Verdana';
        this.ctx.fillStyle = "black";
        this.ctx.fillText(`Scores: ${this.point}`, 710, 20);
    }
}
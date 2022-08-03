class Stat{
    constructor(ctx, canvas) {
        this.c = ctx;
        this.canvas = canvas;
        this.position = {x: 925, y: 0}

        this.width = 100;
        this.height = 100;
    }

    draw(text) {
        this.c.fillStyle = 'red';
        this.c.fillRect(this.position.x, this.position.y, this.width, this.height);
        this.c.fillStyle = 'white';
        this.c.font = '50px serif';
        this.c.fillText(text, this.position.x+5, this.position.y+95);
    }
}

export default Stat;
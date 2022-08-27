class Stat{
    constructor(ctx, canvas) {
        this.c = ctx;
        this.canvas = canvas;
        this.position = {x: 925, y: 0}

        this.width = 100;
        this.height = 100;
    }

    draw(text, text2, text3, text4) {
        this.c.fillStyle = 'red';
        this.c.fillRect(this.position.x, this.position.y, this.width, this.height);
        this.c.fillStyle = 'white';
        this.c.font = '24px serif';
        this.c.fillText(text, this.position.x+5, this.position.y+25);
        this.c.font = '14px serif';
        this.c.fillText(text2, this.position.x+5, this.position.y+55);
        this.c.fillText(text3, this.position.x+5, this.position.y+75);
        this.c.fillText(text4, this.position.x+5, this.position.y+95);
    }
}

export default Stat;
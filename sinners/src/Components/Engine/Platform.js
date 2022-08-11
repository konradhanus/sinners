class Platform{
    constructor(ctx, canvas, x, y, image, blockWidth) {
        this.c = ctx;
        this.image = image;
        this.canvas = canvas;
        this.position = {x, y}

        this.width = blockWidth;
        this.height = blockWidth;
    }

    draw() {
        this.c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
        this.c.fillStyle = 'grey';
        this.c.font = '16px serif';
        this.c.fillText(`${this.position.x}, ${this.position.y}`, this.position.x+5, this.position.y-10);
    }
}

export default Platform;
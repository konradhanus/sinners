class GenericObject{
    constructor(ctx, canvas, x, y, image) {
        this.c = ctx;
        this.image = image;
        this.canvas = canvas;
        this.position = {x, y}

        this.width = image.width;
        this.height = image.height;
    }

    draw() {
        this.c.drawImage(this.image, this.position.x, this.position.y)
    }
}

export default GenericObject;
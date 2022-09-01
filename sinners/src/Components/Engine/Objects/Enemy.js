class Enemy{
    constructor(ctx, canvas, x, y, blockWidth) {
        this.c = ctx;
        this.canvas = canvas;
        this.position = {x: x, y: y}
        this.width = blockWidth;
        this.height = blockWidth;
        this.frame = 0;

        this.velocity = {
            x:-1, 
            y:0
        }
    }

    draw() {
        // this.c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
         this.c.fillRect(this.position.x, this.position.y, this.width, this.height);
         this.c.fillStyle = 'grey';
        // this.c.font = '16px serif';
        // this.c.fillText(`${this.position.x}, ${this.position.y}`, this.position.x+5, this.position.y-10);
    }

    update(){
        this.draw();
        this.position.x += this.velocity.x
        console.log('update enemie')
    }
}

export default Enemy;
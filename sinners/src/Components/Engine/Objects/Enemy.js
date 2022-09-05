class Enemy{
    constructor(ctx, canvas, image, x, y, blockWidth) {
        this.c = ctx;
        this.canvas = canvas;
        this.position = {x: x, y: y+blockWidth*0.1}
        this.image = image;
        this.width = blockWidth*0.75*0.9;
        this.height = blockWidth*0.9;
        this.frame = 0;

        this.velocity = {
            x:-1, 
            y:0
        }

        this.sprites = {
            run: this.image.run, 
        }
    }

    draw() {
         this.c.drawImage(this.sprites.run[this.frame%4], this.position.x, this.position.y, this.width, this.height);
        //  this.c.fillRect(this.position.x, this.position.y, this.width, this.height);
        //  this.c.fillStyle = 'grey';
        // this.c.font = '16px serif';
        // this.c.fillText(`${this.position.x}, ${this.position.y}`, this.position.x+5, this.position.y-10);
    }

    update(){
        this.frame++;
        this.draw();
        this.position.x += this.velocity.x
    }
}

export default Enemy;
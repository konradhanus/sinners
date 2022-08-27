import { gravity } from "../config";

export default class Player{
    constructor(ctx, canvas, image, blockWidth){
        this.defaultPostion = {
            x: 100, 
            y: 100
        };

        this.c = ctx;
        this.image = image;
        this.canvas = canvas;
        this.position ={
            x: this.defaultPostion.x, 
            y: this.defaultPostion.y
        }
        
        this.velocity = {
            x:0, 
            y:0
        }

        this.width = blockWidth;
        this.height = blockWidth;
        this.sprites = {
            stand:this.image.stand,
            run: this.image.run
        }

        this.currentSprite = this.sprites.stand;
        this.frame = 0;
        this.rightPressed = false;
    }

    draw() {
        this.currentSprite = this.rightPressed && this.frame%8 !== 0 ? this.sprites.run[this.frame%8] : this.sprites.stand[0]
        this.c.drawImage(this.currentSprite, 10, 10, 40,40, this.position.x, this.position.y, this.width, this.height)
        this.c.fillStyle = 'grey';
        this.c.font = '30px serif';
        // this.c.fillText(`${this.frame%8}`, this.position.x+5, this.position.y-10);
        // this.c.fillText(`${this.position.x}, ${this.position.y}`, this.position.x+5, this.position.y-10);
    }

    update() {
        this.frame++;
        this.draw();
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x

        if(this.position.y + 
           this.height + 
           this.velocity.y <= this.canvas.height
        )
        {
            this.velocity.y += gravity
        }else{
            // this.velocity.y = 0;
        }
    }
}
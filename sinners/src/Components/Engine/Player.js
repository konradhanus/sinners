import { gravity } from "./config";
export default class Player{
    constructor(ctx, canvas, image, blockWidth){

        
        this.c = ctx;
        this.image = image;
        this.canvas = canvas;
        this.position ={
            x: 100, 
            y: 100
        }
        
        this.velocity = {
            x:0, 
            y:0
        }

        this.width = blockWidth;
        this.height = blockWidth;
    }

    draw() {
    
        this.c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    }

    update() {
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
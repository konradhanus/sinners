import gameOver from './../../../assets/gameOver.png';
import createImage from '../helpers/createImage';

class GameOver{
    constructor(ctx, canvas) {
        this.c = ctx;
        this.canvas = canvas;
        this.position = {x: 0, y: 0}
        this.isVisible = false;
        this.width = 550;
        this.height = 550;
        this.die = false;
    }
    
    draw(livesCallback, lives) {
        this.c.drawImage(createImage(gameOver), this.canvas.width/2 - this.width/2, this.canvas.height/2 - this.height/2, this.width,this.height)
        
        if(!this.die)
        { 
            livesCallback();
            this.die = true;
        }

        const drawPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
              }, 20);
          });
          return drawPromise;
    }

}

export default GameOver;
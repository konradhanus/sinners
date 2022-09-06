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
    }



    draw() {

        const drawPromise = new Promise((resolve, reject) => {
            this.c.drawImage(createImage(gameOver), window.innerWidth/4, window.innerHeight/4, 600,600)
            resolve();
          });

          return drawPromise;
        
    }

}

export default GameOver;
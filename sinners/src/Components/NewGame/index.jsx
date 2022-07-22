import React from 'react';
import useCanvas from './useCanvas';

const gravity = 0.5;

class Player{
    constructor(ctx, canvas){
        this.c = ctx;
        this.canvas = canvas;
        this.position ={
            x: 100, 
            y: 100
        }
        
        this.velocity = {
            x:0, 
            y:1
        }

        this.width = 30
        this.height = 30
    }

    draw() {
        this.c.fillStyle = 'red';
        this.c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update() {
        this.draw();
        this.position.y += this.velocity.y

        if(this.position.y + this.height + this.velocity.y <= this.canvas.height)
        {
            this.velocity.y += gravity
        }else{
            this.velocity.y = 0;
        }
    }
}


const NewGame = () => {
    
    const animate = () => {
        
        requestAnimationFrame(animate);
        ctxState && canvasState && ctxState.clearRect(0,0, canvasState.width, canvasState.height);
        player !== undefined && player.update();
    } 
    const [player, setPlayer] = React.useState();
    const [ctxState, setCtxState] = React.useState();
    const [canvasState, setCanvasState] = React.useState();
    
    const canvasRef = useCanvas(([canvas, ctx]) => {
        canvas.width= window.innerWidth;
        canvas.height= window.innerHeight;

        const p = new Player(ctx, canvas);
        setPlayer(p)
        setCtxState(ctx);
        setCanvasState(canvas);
        p.update();
      });
    
    
    animate();
      
    return <canvas ref={canvasRef}></canvas>
}

export default NewGame;
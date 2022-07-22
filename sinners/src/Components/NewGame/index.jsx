import React, {useCallback, useEffect} from 'react';
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
            y:0
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
        this.position.x += this.velocity.x

        if(this.position.y + this.height + this.velocity.y <= this.canvas.height)
        {
            this.velocity.y += gravity
        }else{
            this.velocity.y = 0;
        }
    }
}


const NewGame = () => {
    const [player, setPlayer] = React.useState();
    const [ctxState, setCtxState] = React.useState();
    const [canvasState, setCanvasState] = React.useState();
    const [isPressedKeyLeft, setIsPressedKeyLeft] = React.useState(false);
    const [isPressedKeyRight, setIsPressedKeyRight] = React.useState(false);
    const handleUserKeyDownPress = useCallback(
        ({ keyCode }) => {
          if (keyCode === 39) {
        //    console.log(' go right')
           setIsPressedKeyRight(true);
        //    player.velocity.x = 1
          }
          if (keyCode === 37) {
            // console.log('go left');
            setIsPressedKeyLeft(true);
            //    player.velocity.x = 1
            // player.velocity.x -= 20
          }
          if (keyCode === 38) {
            console.log('jump', player);

            player.velocity.y -= 20
          }
          if (keyCode === 40) {
            console.log('fall')
          }
        },
        [player]
      );

      const handleUserKeyUpPress = useCallback(
        ({ keyCode }) => {
          if (keyCode === 39) {
           console.log(' go right');
           setIsPressedKeyRight(false);
        //    player.velocity.x += 0
          }
          if (keyCode === 37) {
            console.log('go left');
            setIsPressedKeyLeft(false);
            // player.velocity.x -= 20
          }
          if (keyCode === 38) {
            console.log('jump', player);

            player.velocity.y -= 20
          }
          if (keyCode === 40) {
            console.log('fall')
          }
        },
        [player]
      ); 

    useEffect(() => {
        // component did mount
        window.addEventListener("keydown", handleUserKeyDownPress);
        window.addEventListener("keyup", handleUserKeyUpPress);
    
        // component will unmount
        return () => {
          window.removeEventListener("keydown", handleUserKeyDownPress);
          window.removeEventListener("keyup", handleUserKeyUpPress);
        };
      }, [player]);

    const animate = () => {
        
        requestAnimationFrame(animate);
        ctxState && canvasState && ctxState.clearRect(0,0, canvasState.width, canvasState.height);
        if(player !== undefined){
            player.update();
            // console.log('a',isPressedKeyRight)
            if(isPressedKeyRight)
            {
                player.velocity.x = 1;
            }else if(isPressedKeyLeft)
            {
                player.velocity.x = -1;
            }else{
                player.velocity.x = 0;
            }

        }

    } 
    
    
    const canvasRef = useCanvas(([canvas, ctx]) => {
        canvas.width= window.innerWidth;
        canvas.height= window.innerHeight;

        const p = new Player(ctx, canvas);
        setPlayer(p)
        setCtxState(ctx);
        setCanvasState(canvas);
        p.update();
      });
    
    
    player && animate();
    return <canvas ref={canvasRef}></canvas>
}

export default NewGame;
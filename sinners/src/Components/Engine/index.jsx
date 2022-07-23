import React, {useCallback, useEffect} from 'react';
import useCanvas from './useCanvas';
import Player from './Player';
import Platform from './Platform';
import GenericObject from './GenericObject';
import { playerSpeed, windowWidth, windowHeight } from "./config";
import background from '../../assets/background.png';
import dirt1 from '../../assets/dirt1.png';
import dirt2 from '../../assets/dirt2.png';
import dirt3 from '../../assets/dirt3.png';
import createImage from './helpers/createImage';
import keys from './helpers/keys';

const Engine = ({level}) => {
    const [player, setPlayer] = React.useState();
    const [platforms, setPlatforms] = React.useState();
    const [ctxState, setCtxState] = React.useState();
    const [canvasState, setCanvasState] = React.useState();
    const [genericObjects, setGenericObjects] = React.useState();

    const handleUserKeyDownPress = useCallback(
        ({ keyCode }) => {
          if (keyCode === 39) {
            keys.right.pressed = true;
          }
          if (keyCode === 37) {
            keys.left.pressed = true;
          }
          if (keyCode === 38) {
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
           keys.right.pressed = false;
          }
          if (keyCode === 37) {
            console.log('go left');
            keys.left.pressed = false;
          }
          if (keyCode === 38) {
            console.log('jump', player);
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

    let scrollOffset = 0;

    const animate = () => {
        
        requestAnimationFrame(animate);
        if(ctxState && canvasState)
        {
            ctxState.fillStyle = "white";
            ctxState.fillRect(
                0,
                0, 
                canvasState.width, 
                canvasState.height
              );
        }

        if(genericObjects){
          genericObjects.forEach(genericObject => {
            genericObject.draw();
          })
        }

        if(player !== undefined && platforms !== undefined){
            player.update();
            // console.log('a',isPressedKeyRight)
            if(keys.right.pressed && player.position.x < 400) {
                player.velocity.x = playerSpeed;
            } else if(keys.left.pressed && player.position.x > 100) {
                player.velocity.x = -playerSpeed;
            } else {
                player.velocity.x = 0;

                if(keys.right.pressed){
                  scrollOffset += playerSpeed;

                  platforms.forEach((platform)=>{
                    platform.position.x -= playerSpeed
                  })

                  genericObjects.forEach((genericObject)=>{
                    genericObject.position.x -= playerSpeed * 0.66
                  })
                 
                } else  if(keys.left.pressed){

                  platforms.forEach((platform)=>{
                    scrollOffset -= playerSpeed;
                    platform.position.x += playerSpeed
                  })

                  genericObjects.forEach((genericObject)=>{
                    genericObject.position.x += playerSpeed * 0.66
                  })
                }
            }
            
            // platform collision detection
            platforms.forEach((platform)=> {
            if(player.position.y + player.height <= platform.position.y &&
               player.position.y + player.height + player.velocity.y >= platform.position.y && 
               player.position.x + player.width >= platform.position.x && 
               player.position.x <= platform.position.x + platform.width){
              player.velocity.y = 0;
            }
          });

          if(scrollOffset > 2000)
          {
            alert('You Win!!!')
          }

          if(player.position.y > canvasState.height)
          {
            document.location.reload(true)        
          }
        }

        if(platforms !== undefined)
        {
          platforms.forEach((platform)=>{
            platform.draw();
          })
        }

    } 
    
    const init = (canvas, ctx, level) => {
        console.log(level);
        const dirtBlock1 = createImage(dirt1);
        const dirtBlock2 = createImage(dirt2);
        const dirtBlock3 = createImage(dirt3);
       
        const p =  new Player(ctx, canvas);
        const pl1 = new Platform(ctx, canvas, -1, 470, dirtBlock1);
        const pl2 = new Platform(ctx, canvas, dirtBlock1.width-2, 470, dirtBlock2);
        const pl3 = new Platform(ctx, canvas, 2*dirtBlock2.width-2, 470, dirtBlock3);

        const pl4 = new Platform(ctx, canvas, 3*dirtBlock2.width+102, 470, dirtBlock1);
        const pl5 = new Platform(ctx, canvas, 4*dirtBlock2.width+102, 470, dirtBlock2);
        const pl6 = new Platform(ctx, canvas, 5*dirtBlock2.width+102, 470, dirtBlock3);

        const platforms = [pl1, pl2, pl3, pl4, pl5, pl6];
        
        const g1 = new GenericObject(ctx, canvas, 0, 0, createImage(background))
        const genericObjects = [g1]


        setPlayer(p);
        setPlatforms(platforms);
        setGenericObjects(genericObjects);
        setCtxState(ctx);
        setCanvasState(canvas);
        return p;
        
    }
    
    const canvasRef = useCanvas(([canvas, ctx]) => {
        canvas.width= windowWidth;
        canvas.height= windowHeight;

        const p = init(canvas, ctx, level);
        p.update();
      });
    
    
    player && animate();
    return <canvas ref={canvasRef}></canvas>
}

export default Engine;
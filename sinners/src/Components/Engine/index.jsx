import React, {useCallback, useEffect} from 'react';
import useCanvas from './useCanvas';
import Player from './Player';
import Platform from './Platform';
import GenericObject from './GenericObject';
import { playerSpeed, windowWidth, windowHeight, blockWidth } from "./config";
import background from '../../assets/background.png';
import {Toaster, toast} from 'react-hot-toast';
import dirtLeft from "../../assets/dirt1.png";
import dirtMiddle from "../../assets/dirt2.png";
import dirtRight from "../../assets/dirt3.png";
import box from "../../assets/box.png";
import hero from "../../assets/hero.png";
import star from "../../assets/star.png";
import tom from "../../assets/tom.png";
import water from "../../assets/water.png";

import createImage from './helpers/createImage';
import keys from './helpers/keys';
import { BLOCK } from "../Block/type";

const gameOver = false;

const Engine = ({level}) => {

    const [start, setStart] = React.useState(false)
    const [cavnasState, seCanvasState] = React.useState();
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
            if(!gameOver){
              gameOver = true
              console.log('win');
              
            }
          }

          if(player.position.y > canvasState.height)
          {
            //newGame();    
          }
        }

        if(platforms !== undefined)
        {
          platforms.forEach((platform)=>{
            platform.draw();
          })
        }

    } 
    
    const switchTile = (tile) => {
          switch(tile) {
          case BLOCK.DIRT_LEFT:
            return dirtLeft;
          case BLOCK.DIRT_MIDDLE:
            return dirtMiddle;
          case BLOCK.DIRT_RIGHT:
            return dirtRight;
          case BLOCK.PLAYER:
            return hero;
          case BLOCK.BOX:
            return box;
          case BLOCK.WATER:
            return water;
          case BLOCK.TOM:
            return tom;
          case BLOCK.STAR:
            return star;
      }
    };

    const init = (canvas, ctx, level) => {

        console.log('test');
        const levelPlatforms = level.map((row,rowId)=>(
          row.map((block,colId)=>{
            // console.log(`${block}-${rowId}:${colId}`);
            if(
              block !== BLOCK.EMPTY && 
              // block !== BLOCK.WATER && 
              block !== BLOCK.STAR && 
              block !== BLOCK.PLAYER && 
              block !== BLOCK.POKEMON)
            {
              return new Platform(ctx, canvas, blockWidth*colId, blockWidth*rowId, createImage(switchTile(block)), blockWidth);
            }
          })
        )).flatMap(n=>n).filter(f=>f!=undefined);

        // console.log(levelPlatforms);
        
        const g1 = new GenericObject(ctx, canvas, 0, 0, createImage(background))
        const genericObjects = [g1]
        const p =  new Player(ctx, canvas, createImage(switchTile(BLOCK.PLAYER)), blockWidth);

       
        setPlatforms(levelPlatforms);
        setPlayer(p);
        setGenericObjects(genericObjects);
        setCtxState(ctx);
        setCanvasState(canvas);
        return p;
        
    }
    
    useEffect(() => {
      // Your code here
    }, []);

    const canvasRef = useCanvas(([canvas, ctx]) => {
        canvas.width= windowWidth;
        canvas.height= windowHeight;

        const p = init(canvas, ctx, level);
        
         p.update();
      });
    
    const newGame = () => {
      const canvas = canvasRef.current;
      const ctx = canvasRef.current.getContext("2d");
      const p = init(canvas, ctx, level);
      p.update();
    }
    
    player && animate();
    return <>
        <Toaster
      position="top-center"
      reverseOrder={false}
    />
    <button onClick={newGame}>start</button>
    <canvas ref={canvasRef}></canvas>
    </>
}

export default Engine;
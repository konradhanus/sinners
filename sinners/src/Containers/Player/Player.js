import React, { useCallback, useEffect } from "react";
import Box from "../../Components/Box";
import {
  playerCoordinatesFinder,
  checkWhatIsInFrontOfMe,
  checkWhatIsBehindMe,
  checkWhatIsAboveMe,
  checkWhatIsBellowMe,
} from "./helper";
import { BLOCK } from "../../Components/Block/type";
import * as fetch from "isomorphic-fetch";
import { CompressedPixelFormat } from "three";

const Player = (props) => {
  // console.log(props);
  const handleUserKeyPres = useCallback(
    ({ key, keyCode }) => {
      if (keyCode === 39) {
        checkWhatIsInFrontOfMe(props.level) === BLOCK.EMPTY && props.goRight();
      }
      if (keyCode === 37) {
        checkWhatIsBehindMe(props.level) === BLOCK.EMPTY && props.goLeft();
      }
      if (keyCode === 38) {
        checkWhatIsAboveMe(props.level) === BLOCK.EMPTY && props.jump();
      }
      if (keyCode === 40) {
        checkWhatIsBellowMe(props.level) === BLOCK.EMPTY && props.fall();
      }
    },
    [props]
  );

  useEffect(() => {
    // component did mount
    window.addEventListener("keydown", handleUserKeyPres);

    // component will unmount
    return () => {
      window.removeEventListener("keydown", handleUserKeyPres);
    };
  }, []);

  // component did update
  useEffect(() => {
    // PROMISES
    const getPokemon = (name, success, error) => {
      return new Promise((resolve, reject) => {
        fetch(`https//pokeapi.co/api/v2/pokemon/${name}`)
          .then(function (serverPromise) {
            serverPromise
              .json()
              .then(function (j) {
                // console.log(j);
                resolve(j);
              })
              .catch(function (e) {
                reject(e);
              });
          })
          .catch(function (e) {
            console.log(e);
          });
      });
    };

    getPokemon("ditto")
      .then((value) => {
        console.log("aaa", value);
      })
      .catch((e) => {
        console.error("MY ERROR MESSAGES", e);
      })
      .finally(() => {
        console.log("allways will be display");
      });

    // TO DO REFACTOR!!!!!!!!!!!!

    // PROMISES sytax sugar (async await)
    const getPokemonAsync = async () => {
      const name = "ditto";
      const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const pokemon = await data.json();

      //or
      //   const pokemon = await getPokemon("ditto");

      console.log(pokemon);
    };

    getPokemonAsync();

    // GENERATOR
    function* it() {
      while (true) {
        yield "check if this item is on the store";
        yield "check if the use have a money on you bank account";
        yield "dispaly information that everythink is all right";
        yield "go to the stire";
        return "done";
      }
    }

    const iterator = it();

    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());

    if (checkWhatIsBellowMe(props.level) === BLOCK.WATER) {
      const promise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(playerCoordinatesFinder(props.level));
        }, 3000);
      });

      promise1.then((e) => {
        // console.log("i was there", e);
        //  console.log("now!", playerCoordinatesFinder(props.level));
        props.fall();
      });
    }

    //
    //   setTimeout = setTimeout(() => props.fall(), 500);
    //
    // .console.log("player x,y:", playerCoordinatesFinder(props.level));
  });

  return <Box onClick={() => props.fetch("pikachu")} {...props} />;
};

export default Player;

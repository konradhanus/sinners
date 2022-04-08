import React, { useCallback, useEffect } from "react";
import Box from "../../Components/Box";
import {
  playerCoordinatesFinder,
  checkWhatIsInFrontOfMe,
  checkWhatIsBehindMe,
  checkWhatIsAboveMe,
  checkWhatIsBellowMe,
} from "./helper";
import { BLOCKS } from "./../../helpers/type";

const Player = (props) => {
  console.log(props);
  const handleUserKeyPres = useCallback(
    ({ key, keyCode }) => {
      if (keyCode === 39) {
        checkWhatIsInFrontOfMe(props.level) === BLOCKS.EMPTY && props.goRight();
      }
      if (keyCode === 37) {
        checkWhatIsBehindMe(props.level) === BLOCKS.EMPTY && props.goLeft();
      }
      if (keyCode === 38) {
        checkWhatIsAboveMe(props.level) === BLOCKS.EMPTY && props.jump();
      }
      if (keyCode === 40) {
        checkWhatIsBellowMe(props.level) === BLOCKS.EMPTY && props.fall();
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
    // setTimeout(()=>console.log(1), 0)
    //
    //

    if (checkWhatIsBellowMe(props.level) === BLOCKS.WATER) {
      const promise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(playerCoordinatesFinder(props.level));
        }, 3000);
      });

      promise1.then((e) => {
        console.log("i was there", e);
        console.log("now!", playerCoordinatesFinder(props.level));
        props.fall();
      });
    }

    //
    //   setTimeout = setTimeout(() => props.fall(), 500);
    //
    // .console.log("player x,y:", playerCoordinatesFinder(props.level));
  });

  return <Box {...props} />;
};

export default Player;

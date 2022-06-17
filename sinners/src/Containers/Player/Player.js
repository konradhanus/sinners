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

const Player = (props) => {
  const justGoRight = () => {
    checkWhatIsInFrontOfMe(props.level) === BLOCK.EMPTY && props.goRight();
  };

  const isPlayerFoundStar = () => {
    if (checkWhatIsInFrontOfMe(props.level) === BLOCK.STAR) {
      props.goRight();
      return true;
    }
    justGoRight();
    return false;
  };

  const handleUserKeyPres = useCallback(
    ({ key, keyCode }) => {
      if (keyCode === 39) {
        isPlayerFoundStar();
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
    if (checkWhatIsBellowMe(props.level) === BLOCK.WATER) {
      const promise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(playerCoordinatesFinder(props.level));
        }, 3000);
      });

      promise1.then((e) => {
        props.fall();
      });
    }
  });

  return <Box onClick={() => props.fetch("pikachu")} {...props} />;
};

export default Player;

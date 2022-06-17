import React, { useCallback, useEffect } from "react";
import { connect } from "react-redux";
import Box from "../../Components/Box";
import {
  playerCoordinatesFinder,
  checkWhatIsInFrontOfMe,
  checkWhatIsBehindMe,
  checkWhatIsAboveMe,
  checkWhatIsBellowMe,
} from "./helper";
import { BLOCK } from "../../Components/Block/type";
import actionCreators from "../Score/action";
import {
  actionCreators as playerActions,
  GO_RIGHT,
  GO_LEFT,
  JUMP,
  FALL,
} from "./action";

const Player = (props) => {
  const handleUserKeyPres = useCallback(
    ({ key, keyCode }) => {
      if (keyCode === 39) {
        props.foundItem({
          go: GO_RIGHT,
          check: checkWhatIsInFrontOfMe,
          level: props.level,
        });
      }
      if (keyCode === 37) {
        props.foundItem({
          go: GO_LEFT,
          check: checkWhatIsBehindMe,
          level: props.level,
        });
      }
      if (keyCode === 38) {
        props.foundItem({
          go: JUMP,
          check: checkWhatIsAboveMe,
          level: props.level,
        });
      }
      if (keyCode === 40) {
        props.foundItem({
          go: FALL,
          check: checkWhatIsBellowMe,
          level: props.level,
        });
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

export default connect(null, { ...actionCreators, ...playerActions })(Player);

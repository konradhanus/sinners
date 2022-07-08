import React, { useState, useCallback, useEffect } from "react";
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

import useInterval from "../../hooks/useInterval";

const Player = (props) => {
  const [time, setTime] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [timeRight, setTimeRight] = useState(0);

  const [jumpStart, setJumpStart] = useState(false);

  const [goRightStart, setGoRightStart] = useState(false);
  const [goLeftStart, setGoLeftStart] = useState(false);

  const handleUserKeyPres = useCallback(
    ({ key, keyCode }) => {
      if (keyCode === 39) {
        setGoRightStart(true);
        // props.foundItem({
        //   go: GO_RIGHT,
        //   check: checkWhatIsInFrontOfMe,
        //   level: props.level,
        // });
      }
      if (keyCode === 37) {
        setGoLeftStart(true);
      }
      if (keyCode === 38) {
        console.log("jump", Date.now());
        setJumpStart(true);
        // props.foundItem({
        //   go: JUMP,
        //   check: checkWhatIsAboveMe,
        //   level: props.level,
        // });
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

  // // component did update
  // useEffect(() => {
  //   if (checkWhatIsBellowMe(props.level) === BLOCK.WATER) {
  //     const promise1 = new Promise((resolve, reject) => {
  //       setTimeout(() => {
  //         resolve(playerCoordinatesFinder(props.level));
  //       }, 3000);
  //     });

  //     promise1.then((e) => {
  //       props.fall();
  //     });
  //   }
  // });

  const jumpEquation = (t) => {
    const v0 = 10;
    const p = 10;
    const y0 = 0;
    return v0 * t - p * Math.pow(t, 2) + y0;
  };

  const goEquation = (t) => {
    return t * 4;
  };

  const fallTwice = () => {
    console.log(checkWhatIsBellowMe(props.level));
    if (checkWhatIsBellowMe(props.level) === BLOCK.EMPTY) {
      console.log("fall");
      props.foundItem({
        go: FALL,
        check: checkWhatIsBellowMe,
        level: props.level,
      });
      props.foundItem({
        go: FALL,
        check: checkWhatIsBellowMe,
        level: props.level,
      });
    }
  };

  useInterval(() => {
    // Your custom logic here
    if (jumpStart) {
      setTime(time + 16);
      // console.log("timer player", time);
      if (time >= 1000) {
        setJumpStart(false);
        setTime(0);
        // console.log("above me", checkWhatIsAboveMe(props.level));
      }

      if (time >= 500) {
        if (checkWhatIsAboveMe(props.level) !== BLOCK.EMPTY) {
          props.foundItem({
            go: JUMP,
            check: () => 0,
            level: props.level,
          });
        }
      }
    }

    if (goLeftStart) {
      setTimeLeft(timeLeft + 16);
      // console.log("go left", timeLeft);
      if (timeLeft >= 500) {
        setGoLeftStart(false);
        setTimeLeft(0);
        props.foundItem({
          go: GO_LEFT,
          check: checkWhatIsBehindMe,
          level: props.level,
        });
        fallTwice();
      }
    }

    if (goRightStart) {
      setTimeRight(timeRight + 16);
      // console.log("go left", timeRight);
      if (timeRight >= 500) {
        setGoRightStart(false);
        setTimeRight(0);
        props.foundItem({
          go: GO_RIGHT,
          check: checkWhatIsInFrontOfMe,
          level: props.level,
        });
        fallTwice();
      }
    }
  }, 16);

  // console.log(goLeftStart, goRightStart);
  return (
    <Box
      {...props}
      x={props.x - jumpEquation(time / 1000)}
      y={props.y - goEquation(timeLeft / 1000) + goEquation(timeRight / 500)}
    />
  );
};

export default connect(null, { ...actionCreators, ...playerActions })(Player);

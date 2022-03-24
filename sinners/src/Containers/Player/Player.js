import React, { useCallback, useEffect } from "react";
import Box from "../../Components/Box";

const Player = (props) => {
  console.log(props);
  const handleUserKeyPres = useCallback(
    ({ key, keyCode }) => {
      if (keyCode === 39) {
        props.goRight();
      }
      if (keyCode === 37) {
        props.goLeft();
      }
      if (keyCode === 38) {
        props.jump();
      }
      if (keyCode === 40) {
        props.fall();
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

  return <Box {...props} />;
};

export default Player;

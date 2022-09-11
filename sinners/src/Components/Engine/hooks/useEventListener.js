import React from "react";
import addEventListener from '../keyPress/addEventListener';
import removeEventListener from '../keyPress/removeEventListener';

const useEventListener = (handleUserKeyDownPress, handleUserKeyUpPress, player) => {
  React.useEffect(() => {
    // component did mount
    addEventListener(handleUserKeyDownPress, handleUserKeyUpPress)
    // window.addEventListener("touchstart", ()=>handleUserKeyDownPress({keyCode: 39}));
    // window.addEventListener("touchend", ()=>handleUserKeyUpPress({keyCode: 39}));
    // component will unmount
    return () => {
      removeEventListener(handleUserKeyDownPress, handleUserKeyUpPress);
    };
  }, [player]);

};
export default useEventListener;

import React from "react";
import addEventListener from './addEventListener';
import removeEventListener from './removeEventListener';

const useEventListener = (handleUserKeyDownPress, handleUserKeyUpPress, player) => {
  React.useEffect(() => {
    // component did mount
    addEventListener(handleUserKeyDownPress, handleUserKeyUpPress)

    // component will unmount
    return () => {
      removeEventListener(handleUserKeyDownPress, handleUserKeyUpPress);
    };
  }, [player]);

};
export default useEventListener;

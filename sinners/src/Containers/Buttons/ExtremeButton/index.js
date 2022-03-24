import React, { memo } from "react";
const ExtremeAwesomeButton = ({ children, count, callback }) => {
  console.log(`Button ${children} rendered`);

  return (
    <button onClick={callback}>
      {children} ({count})
    </button>
  );
};

export default memo(ExtremeAwesomeButton);

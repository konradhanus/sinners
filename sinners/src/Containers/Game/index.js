import React from "react";
import Platform from "../../Components/Platform";
// import level1 from "./levels/level1";

import Header from "../Header";
import { connect } from "react-redux";
import Board from "../../Components/Board";

function Game({ level, counter }) {
  return (
    <>
      <Header />
      {counter}
      <Platform>
        <Board level={level} />
      </Platform>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    level: state.map,
    counter: state.counter,
  };
};

export default connect(mapStateToProps)(Game);

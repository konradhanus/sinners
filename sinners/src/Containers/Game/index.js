import React from "react";
import Platform from "../../Components/Platform";
// import level1 from "./levels/level1";
import renderBlock from "../../helpers/renderBlock";
import Header from "../Header";
import { connect } from "react-redux";

const Game = ({ level, counter }) => (
  <>
    <Header />
    {counter}
    <Platform>
      {level.map((row, x) => row.map((tile, y) => renderBlock(tile, x, y)))}
    </Platform>
  </>
);

const mapStateToProps = (state) => {
  return {
    level: state.map,
    counter: state.counter,
  };
};

export default connect(mapStateToProps)(Game);

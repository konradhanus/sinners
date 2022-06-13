import Platform from "../../Components/Platform";
// import level1 from "./levels/level1";
import React, { useEffect } from "react";
import Header from "../Header";
import { connect } from "react-redux";
import Board from "../../Components/Board";
import actionCreators from "../Player/action";

function Game({ level, counter, fetch }) {
  useEffect(() => {
    const enemysList = ["pikachu", "ditto", "bulbasaur", "appletun"];

    Array.prototype.sample = function () {
      return this[Math.floor(Math.random() * this.length)];
    };

    const selectOneEnemy = enemysList.sample();
    console.log(selectOneEnemy);

    fetch(selectOneEnemy);
  }, []);

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

export default connect(mapStateToProps, actionCreators)(Game);

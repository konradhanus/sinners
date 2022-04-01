import React, { useState, useCallback } from "react";
import Platform from "../../Components/Platform";
// import level1 from "./levels/level1";
import renderBlock from "../../helpers/renderBlock";
import Header from "../Header";
import ExtremeButton from "../Buttons/ExtremeButton";
import { connect } from "react-redux";

function Game({ level, counter }) {
  const [likes, setLike] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const clickLike = useCallback(() => {
    setLike(likes + 1);
  }, [likes]);

  const clickDisLike = useCallback(() => {
    setDislikes(dislikes - 1);
  }, [dislikes]);

  const doNothing = useCallback(() => {}, []);

  console.log("my State", level);
  return (
    <>
      <Header />
      {counter}
      <Platform>
        {level.map((row, x) => row.map((tile, y) => renderBlock(tile, x, y)))}
      </Platform>
      <div>
        <ExtremeButton count={likes} callback={clickLike}>
          i like you
        </ExtremeButton>

        <ExtremeButton count={dislikes} callback={clickDisLike}>
          i hate you
        </ExtremeButton>

        {Array.from(Array(10).keys()).map(() => (
          <ExtremeButton count={0} callback={doNothing}>
            do nothing
          </ExtremeButton>
        ))}
      </div>
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

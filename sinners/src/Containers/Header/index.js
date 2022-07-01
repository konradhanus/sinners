import { useContext } from "react";
import Grid from "../../Components/Grid";
import Col from "../../Components/Col";
import Row from "../../Components/Row";
import Counter from "../../Containers/Counter";
import Score from "../../Containers/Score";
import newContext from "../../context";

const Header = () => {
  const value = useContext(newContext);

  return (
    <Grid width={"1000px"}>
      <Row>
        <Col size={1}>
          <Counter />
        </Col>
        <Col size={1}>
          <Score />
        </Col>
        <Col size={1}>Time: {value.time}</Col>
      </Row>
    </Grid>
  );
};

export default Header;

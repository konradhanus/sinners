import Grid from "../../Components/Grid";
import Col from "../../Components/Col";
import Row from "../../Components/Row";
import Counter from "../../Containers/Counter";
import Score from "../../Containers/Score";

const Header = () => {
  return (
    <Grid width={"1000px"}>
      <Row>
        <Col size={1}>
          <Counter />
        </Col>
        <Col size={1}>
          <Score />
        </Col>
      </Row>
    </Grid>
  );
};

export default Header;

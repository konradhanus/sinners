import { connect } from "react-redux";
import actionCreators from "./action";
import Grid from "../../Components/Grid";
import Col from "../../Components/Col";
import Row from "../../Components/Row";

const Score = ({ score, increaseScore, decreaseScore }) => (
  <Grid>
    <Row>
      <Col size={1}>
        <h2>Score: {score}</h2>
      </Col>
      <Col size={2}>
        <button onClick={increaseScore}>+</button>
        <button onClick={decreaseScore}> - </button>
      </Col>
    </Row>
  </Grid>
);

const mapStateToProps = (state) => {
  return { score: state.score };
};

export default connect(mapStateToProps, actionCreators)(Score);

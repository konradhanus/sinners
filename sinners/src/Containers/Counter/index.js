import { connect } from "react-redux";
import actionCreators from "./action";

const Counter = ({ counter, clickMe }) => {
  return <button onClick={clickMe}>Click me {counter}</button>;
};

const mapStateToProps = (state) => {
  return { counter: state.counter };
};

export default connect(mapStateToProps, actionCreators)(Counter);

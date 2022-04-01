import styled from "styled-components";
import Player from "./Player";
import actionCreators from "./action";
import { connect } from "react-redux";

const PlayerStyled = styled(Player)`
  transition: left 0.5s;
`;

export default connect(null, actionCreators)(PlayerStyled);

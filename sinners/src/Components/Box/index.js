import styled from "styled-components";
import EmptyBlock from "../EmptyBlock";

const Box = styled(EmptyBlock)`
  background: url(${(props) => props.background});
  transform: scale(${(props) => (props.scale ? props.scale : 1)});
  background-size: contain;
`;
export default Box;

import styled from "styled-components";
import EmptyBlock from "../EmptyBlock";

const Box = styled(EmptyBlock)`
  background: url(${(props) => props.background});
  background-size: contain;
`;
export default Box;

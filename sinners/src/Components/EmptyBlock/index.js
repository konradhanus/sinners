import styled from "styled-components";
import settings from "../../common/settings";

const EmptyBlock = styled.div`
  position: absolute;
  top: ${(props) => props.x * settings.tiles.height}px;
  left: ${(props) => props.y * settings.tiles.width}px;
  width: ${settings.tiles.width}px;
  height: ${settings.tiles.height}px;
  border: 1px solid black;
`;

export default EmptyBlock;

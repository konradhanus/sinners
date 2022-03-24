import styled from "styled-components";

export const Grid = styled.div`
  width: ${(props) => props.width};
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
`;

export const Col = styled.div`
  flex: ${(props) => props.size};
`;

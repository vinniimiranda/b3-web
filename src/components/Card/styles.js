import styled from "styled-components";

export const Container = styled.div`
  border-left-style: solid;
  border-left-color: ${props => props.color};
  border-left-width: 6px;
  border-radius: 8px;
  box-shadow: 0px 0px 2px #bababa;
  width: 300px;
  height: 180px;
  margin: 10px;
`;

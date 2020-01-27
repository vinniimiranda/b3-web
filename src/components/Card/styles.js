import styled from "styled-components";
import { MdKeyboardArrowUp } from "react-icons/md";

export const Container = styled.div`
  border-left-style: solid;
  border-left-color: ${props => props.color};
  border-left-width: 6px;
  border-radius: 8px;
  box-shadow: 0px 0px 2px #bababa;
  width: 100%;
  height: 180px;
  margin: 10px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  background: #111128;
  color: ${props => props.color};
  flex-direction: column;
`;

export const Area = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  text-transform: uppercase;
`;

export const Slug = styled.h4``;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
export const Price = styled.h1`
  color: ${props => (props.pctChange > 0 ? "#3d3" : "#d33")};
`;

export const Icon = styled(MdKeyboardArrowUp)``;

export const Variation = styled.div`
  display: flex;
  align-items: center;
  color: ${props => (props.pctChange > 0 ? "#3d3" : "#d33")};
  ${Icon} {
    transform: ${props =>
      props.pctChange > 0 ? "rotate(0deg)" : "rotate(180deg)"};
  }
`;

export const Date = styled.h3`
  align-self: center;
  color: #aaa;
`;

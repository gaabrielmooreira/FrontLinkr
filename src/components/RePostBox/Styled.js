import styled from "styled-components";
import { RiRepeatLine } from "react-icons/ri";

export const Container = styled.div`
  height: 53px;
  margin-bottom: -20px;
  background-color: #1e1e1e;
  border-radius: 16px;
  display: ${(props) => (props.isRePost ? "flex" : "none")};

 
`;

export const TextBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    height:33px;
    margin-left:13px;
 p {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    color: #ffffff;
    margin-left: 6px;
  }

`

export const Icon = styled(RiRepeatLine)`
  color: #ffffff;
  font-size: 20px;
  &:hover {
    cursor: pointer;
  }` 
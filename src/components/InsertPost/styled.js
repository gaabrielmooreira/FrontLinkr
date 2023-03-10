import styled from "styled-components";

export const Container = styled.div`
  width: 611px;
  height: 209px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  margin-bottom: 30px;
  padding: 20px 18px;
  display: flex;
  justify-content: space-evenly;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;

export const RightContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 502px;
  h2 {
    font-family: "Lato";
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;
    color: #707070;
    margin-bottom: 10px;
  }
`;

export const InputUrl = styled.input`
  width: 503px;
  height: 30px;
  background: #efefef;
  border-radius: 5px;
  margin-bottom: 5px;
  border: none;
  input:disabled {
    background: #52b6ff;
    opacity: 0.7;
  }
`;

export const InputDescription = styled.input`
  width: 502px;
  height: 66px;
  background: #efefef;
  border-radius: 5px;
  margin-bottom: 5px;
  border: none;
  input:disabled {
    background: #52b6ff;
    opacity: 0.7;
  }
`;

export const Button = styled.div`
  width: 502px;
  display: flex;
  justify-content: flex-end;
  button {
    width: 112px;
    height: 31px;
    background: #1877f2;
    border-radius: 5px;
    font-family: "Lato";
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: #ffffff;
    border: none;
  }
  button:disabled {
    background: #52b6ff;
    opacity: 0.7;
    border-radius: 5px;
  }
`;

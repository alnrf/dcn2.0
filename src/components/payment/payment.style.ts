import styled from "styled-components";

type PayProps = {
  isCredit: boolean;
};

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 8px;
  background-color: #fff;
  margin: 21px 0 0 0;
`;

export const Title = styled.div`
  display: flex;
  width: 100%;
  background-color: #fff;
  margin: 0 0 16px 0;
  span {
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 23px;
    color: #212529;
  }
`;

export const Button = styled.div<PayProps>`
  display: flex;
  width: 100px;
  height: 56px;
  background-color: ${({ isCredit }) => (isCredit ? "#143D6B" : "#fff")};
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  margin: 0 0 16px 0;
  span {
    font-size: 15px;
    font-style: normal;
    font-weight: ${({ isCredit }) => (isCredit ? "600" : "400")};
    line-height: 23px;
    color: ${({ isCredit }) => (isCredit ? "#f4f4f4" : "#0d1136")};
  }
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  background-color: #fff;
  align-items: center;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 175px;
  height: 86px;
  background-color: #f7f7f7;
  border-style: solid;
  border-width: 1px;
  cursor: pointer;
  border-radius: 6px;
  transition: 0.2s ease-in-out;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  img {
    width: 64px;
    height: auto;
  }
`;

export const Text = styled.span`
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 23px;
  color: #0d1136;
`;

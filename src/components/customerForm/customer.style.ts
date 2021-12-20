import styled from "styled-components";

type Prop = {
  isCpf: boolean;
};

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 8px;
  background-color: #fff;
  margin: 21px 0 0 0;
`;

export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: #fff;
  flex-direction: column;
  margin: 10px 0 0 0;
`;

export const Label = styled.span`
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  color: #212529;
  margin: 0 0 4px 0;
`;

export const Error = styled.span`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  color: red;
  margin: 2px 0 0 0;
`;

export const Input = styled.input`
  display: flex;
  width: 100%;
  height: 48px;
  background-color: #f7f7f7;
  padding: 12px;
  border: 1px solid #d8d8d8;
  border-radius: 6px;
  &:focus {
    border-color: #134b8b;
    outline: none !important;
  }
`;

export const PasswordWrap = styled.div`
  display: flex;

  height: 48px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #f7f7f7;
  padding: 12px;
  border: 1px solid #d8d8d8;
  border-radius: 6px;
  &:focus {
    border-color: #134b8b;
  }
`;

export const PassWordInput = styled.input`
  display: flex;
  width: 100%;
  background-color: #f7f7f7;
  &:focus {
    outline: none !important;
  }
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  background-color: #fff;
  flex-direction: row;
`;

export const Button = styled.div<Prop>`
  display: flex;
  width: 240px;
  height: 56px;
  background-color: #f4f9ff;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  border-style: solid;
  border-width: 1px;
  border-color: ${({ isCpf }) => (isCpf ? "#144c8b" : "#d8d8d8")};
  transition: 0.2s ease-in-out;
  cursor: pointer;
  &:nth-child(2) {
    margin: 0 0 0 16px;
  }

  span {
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px;
    color: #fff;
  }
`;

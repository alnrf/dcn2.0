import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  min-height: 768px;
  padding: 32px 16px;
  background-color: #f7f7f7;
`;

export const FormContainer = styled.div`
  display: flex;
  width:458px;
  height: 100%;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border-radius: 6px;
  padding: 40px 60px;
`;

export const Title = styled.div`
  display: flex;
  width: 100%;
  background-color: #ffffff;
  justify-content: center;
  margin: 0 0 8px 0;
  font-style: normal;
  font-weight: 600;
  font-size: 21px;
  line-height: 25px;
  color: #134b8b;
`;

export const Text = styled.span`
  background-color: #ffffff;
  justify-content: center;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 23px;
  color: #77798c;
  text-align: center;
`;

export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: #fff;
  flex-direction: column;
  margin: 10px 0 0 0;
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
  width: 100%;
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

export const BtnLogin = styled.div`
  display: flex;
  width: 100%;
  height: 48px;
  background-color: #134b8a;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  margin: 16px 0;
  cursor: pointer;
  &:hover {
    background-color: #1b5fac;
  }
`;

export const BtnTxt = styled.span`
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 23px;
  color: #ffffff;
`;

export const HDivider = styled.div`
  display: flex;
  height: 48px;
  width: 100%;
  background-color: #ffffff;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  
`;

export const HLine = styled.div`
  display: flex;
  width: 100%;
  background-color: #ffffff;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: #cccccc;
  margin: 0 8px;
`;

export const Btn = styled.div`
  display: flex;
  width: 100%;
  height: 48px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  cursor: pointer;
  margin: 8px 0;
`;

export const Link = styled.span`
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 23px;
  color: #134b8b;
  cursor: pointer;
  margin: 0 0 0 4px;
  &:hover {
    text-decoration: underline;
  }
`;

export const Recovery = styled.div`
display: flex;
width: 100%;
height: 56px;
align-items: center;
justify-content: center;
`;

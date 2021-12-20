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

export const AlertBox = styled.div`

display: flex;
width: 100%;
height: 44px;
background-color: #fff3cd;
align-items: center;
padding: 0 0 0 16px;
border-radius: 6px;
margin: 15px 0 0 0;
border: 1px solid #ffeeba;

span {
    font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 23px;
  color: #856404;
}
`;

export const ButtonActive = styled.div`

display: flex;
width: 100%;
height: 44px;
background-color: #134b8b;
align-items: center;
justify-content: center;
border-radius: 6px;
margin: 15px 0 0 0;
cursor: pointer;
&:hover {
    background-color: #466A89;
}
span {
    font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  color: #fff;
}
`;

export const ButtonInactive = styled.div`

display: flex;
width: 100%;
height: 44px;
background-color: #757575;
align-items: center;
justify-content: center;
border-radius: 6px;
margin: 15px 0 0 0;
cursor: not-allowed;
&:hover {
    background-color: #8f8f8f;
}
span {
    font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  color: #c2c3cc;
}
`;
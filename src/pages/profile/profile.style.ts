import styled from "styled-components";
import {Input} from '@chakra-ui/react'

type Prop = {
  isCpf: boolean;
};

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  padding: 32px 200px;
  background-color: #f7f7f7;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const ProfileContainer = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #f1f1f1;
  background-color: #fff;
  margin: 0 24px;
  padding: 60px 50px;
`;

export const FieldRow = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  background-color: #fff;
  flex-direction: row;
`;

export const Title = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin: 0 0 24px 0;
  font-size: 21px;
  font-weight: 600;
  font-style: normal;
  line-height: 25px;
  color: #0d1136;
`;

export const SubTitle = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  font-size: 15px;
  font-weight: 600;
  font-style: normal;
  line-height: 18px;
  color: #0d1136;
`;

export const Advice = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin: 0 0 24px 0;
  font-size: 15px;
  font-weight: 400;
  font-style: normal;
  line-height: 23px;
  color: #212529;
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
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  color: #0d1136;
`;

export const ButtonSave = styled.div`
  display: flex;
  width: 180px;
  height: 44px;
  background-color: #134b8b;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  margin: 15px 0 0 0;
  cursor: pointer;
  &:hover {
    background-color: #466a89;
  }
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  color: #fff;
`;

export const FormContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: #fff;
  margin: 0 0 16px 0;
  padding: 16px 0;
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

export const InputField = styled(Input)`
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

export const CardRow = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #FFFFFF;
  margin: 0 0 16px 0;
 
`;

export const Card = styled.div`
  display: flex;
  width: 350px;
  flex-direction: column;
  padding: 16px;
  background-color: #F4F9FF;
  border-radius: 6px;
  margin: 0 16px 0 0;
  border-style: solid;
  border-width: 1px;
  transition: 0.3s ease-in-out;
  cursor: pointer;
`;

export const AddressName = styled.span`
font-size: 13px;
font-style: normal;
font-weight: 700;
line-height: 16px;
color: #0d1136;
`;

export const AddressText = styled.span`
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: 18px;
color: #424561;
`;



export const AddAddressBtn = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  background-color: #fff;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  color: #134b8b;
  cursor: pointer;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
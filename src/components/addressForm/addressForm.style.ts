import styled from "styled-components";
import { Input } from "@chakra-ui/react";

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
  span {
    font-size: 19px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px;
    color: #0d1136;
  }
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

export const HalfInput = styled.input`
  display: flex;
  width: 50%;
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

export const Row = styled.div`
  display: flex;
  width: 100%;
  background-color: #fff;
  flex-direction: row;
`;

export const Button = styled.div`
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
    background-color: #466a89;
  }
  span {
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px;
    color: #fff;
  }
`;

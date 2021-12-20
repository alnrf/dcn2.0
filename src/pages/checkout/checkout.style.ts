import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 768px;
  flex-direction: row;
  justify-content: center;
  padding: 32px 200px;
  background-color: #f7f7f7;
`;

export const StepsContainer = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  align-items: start;
  padding: 0 32px;
`;

export const Step = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%);
  padding: 30px 30px 20px 30px;
  margin: 0 0 24px 0;
`;

export const AddressWrap = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
`;

export const AddAddressBtn = styled.div`
  display: flex;
  width: 110px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  cursor: pointer;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const AddressIconBtn = styled.div`
  display: flex;
  background-color: #fff;
  margin: 0 24px 0 0;
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

export const AddressTxtBtn = styled.div`
  display: flex;
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

export const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
`;

export const Title = styled.span`
  font-size: 21px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  color: #0d1136;
`;

export const Circle = styled.div`
  display: flex;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #134b8b;
  justify-content: center;
  align-items: center;
  font-size: 19px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  color: #fff;
  margin: 0 16px 0 0;
`;


export const ResumeContainer = styled.div`
  display: flex;
  width: 20%;
  flex-direction: column;
  border: 1px solid black;
  align-items: center;
  padding: 8px 16px;
  background-color: #fff;
`;


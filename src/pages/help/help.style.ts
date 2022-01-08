import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 738px;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: #f7f7f7;
`;

export const FAQ = styled.div`
  display: flex;
  margin: 16px 0 0 0;
  justify-content: center;
  width: 100%;
  font-size: 21px;
  font-weight: 700;
  font-style: normal;
  color: #0d1136;
  line-height: 25px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  background-color: #ffffff;
  border-radius: 6px;
  padding: 24px;
  margin: 8px 0 8px 0;
  cursor: pointer;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  font-size: 15px;
  font-weight: 700;
  font-style: normal;
  color: #0d1136;
  line-height: 23px;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  font-style: normal;
  color: #77798c;
  line-height: 26px;
  margin: 16px 0 0 0;
`;

export const Button = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

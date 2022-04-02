import styled from "styled-components";

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 36px;
  width: 100%;
  margin: 0 20px 16px 20px;
  -webkit-user-select: none; 
  -ms-user-select: none; 
  user-select: none; 
`;

export const BuyButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: #f3f3f3;
  height: 36px;
  width: 201px;
  transition: 0.35s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: #1c60ac;
    color: #fff;
  };
  -webkit-user-select: none; 
  -ms-user-select: none; 
  user-select: none; 
`;

export const BuyTxt = styled.span`
  font-size: 15px;
  font-weight: 400;
  line-height: 23px;
  font-style: normal;
  -webkit-user-select: none; 
  -ms-user-select: none; 
  user-select: none; 
`;

export const AddRmvBtn = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 36px;
  width: 201px;

  background-color: #144C8B;
  border-radius: 5px;
  -webkit-user-select: none; 
  -ms-user-select: none; 
  user-select: none; 
 
`;

export const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  -webkit-user-select: none; 
  -ms-user-select: none; 
  user-select: none; 
`;

export const Add = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  -webkit-user-select: none; 
  -ms-user-select: none; 
  user-select: none; 
`;

export const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  -webkit-user-select: none; 
  -ms-user-select: none; 
  user-select: none; 
`;

export const Txt = styled.span`
  font-size: 15px;
  font-weight: 600;
  line-height: 23px;
  font-style: normal;
  color: #fff;
  -webkit-user-select: none; 
  -ms-user-select: none; 
  user-select: none; 
`;

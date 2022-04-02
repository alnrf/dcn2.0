import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content: center;
width: 100%;
-webkit-user-select: none;
-ms-user-select: none;
user-select: none;
background-color: #fff;

`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6,1fr);
  grid-auto-rows: max-content;
  grid-gap: 10px;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;

  @media (min-width: 1921px) {    
    grid-template-columns: repeat(8,1fr);
  }
`;

export const Card = styled.div`
  background-color: #fff;
  overflow: hidden;
  border-radius: 6px;
  border: 1px solid #f3f3f3;
  display: flex;
  width: 243px;
  height: 400px;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  transition: 0.3s ease-in-out;

  :hover {
    box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%);
    transform: translateY(-5px);
  }
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 235px;
  height: 235px;
  padding: 8px;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: fill;
  border-radius: 6px;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 92px;
  padding: 0 8px;
`;

export const Price = styled.span`
  font-size: 18px;
  font-weight: 600;
  line-height: 18px;
  font-style: normal;
  color: #0d1136;
  padding: 8px 0;
`;

export const OldPrice = styled.span`
  font-size: 15px;
  font-weight: 400;
  line-height: 15px;
  font-style: normal;
  color: #77798c;
`;

export const ProductName = styled.span`
  font-size: 15px;
  font-weight: 400;
  line-height: 17px;
  font-style: normal;
  color: #999999;
`;

export const ButtonContainer = styled.div``;


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


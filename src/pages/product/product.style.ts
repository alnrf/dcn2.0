import styled from "styled-components";

type Props = {
  isSelected: boolean;
};
export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  min-height: 768px;
  padding: 16px;
`;

export const Content = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  align-items: center;
  height: auto;
  margin: 8px 8px;
 border: 1px solid #f0f0f0
;  padding: 16px;
`;

export const LinkBarWrap = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: right;
  padding: 8px;
`;

export const Product = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
`;

export const ImageWraper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  align-items: center;
  justify-content: center;
`;

export const MainImage = styled.img`
  display: flex;
  width: 350px;
  height: 350px;
  align-items: center;
  justify-content: center;
  margin: 16px;
  border-radius: 3px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.9);
  object-fit: contain;
`;

export const ThumbsImageWrap = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const ThumbsImage = styled.img<Props>`
  display: flex;
  width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;
  margin: 16px;
  border-radius: 6px;
  border-style: solid;
  border-width: 2px;
  cursor: pointer;
  border-color: ${({ isSelected }) => (isSelected ? " #144c8b" : "#f3f3f3")};
  object-fit: contain;
`;

export const InfoWraper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: start;
`;

export const ProductTitle = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin: 0 0 16px 0;

  span {
    font-size: 21px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px;
    color: #0d1136;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin: 0 0 16px 0;

  span {
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    color: #77798c;
  }
`;

export const PriceWrap = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin: 0 0 24px 0;
`;

export const Price = styled.span`
  font-size: 21px;
  font-style: normal;
  font-weight: 700;
  line-weight: 31px;
  color: #134b8b;
`;

export const PriceFrom = styled.span`
  font-size: 15px;
  font-style: italic;
  font-weight: 400;
  line-weight: 31px;
  color: #ffb369;
  text-decoration: line-through;
  margin: 0 0 0 16px;
`;

export const Description = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

`;

export const DescriptionTitle = styled.span`
  font-size: 16px;
  font-style: bold;
  font-weight: 700;
  line-weight: 19px;
  color: #134b8b;
`;

export const DescriptionContent = styled.span`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-weight: 19px;
  color: #77798c;
`;

export const BackButton = styled.div`
  display: flex;
  width: auto;
  height: 32px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: #f3f3f3;
  color: #0d1136;
  transition: 0.35s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: #144c8b;
    color: #f3f3f3;
    font-weight: 600;
  }
`;

export const ButtonTxt = styled.span`
  font-size: 15px;
  line-height: 18px;
  font-style: normal;
  font-weight: 400;
  margin: 0 16px;
`;

export const BuyButtonArea = styled.div`
display: flex;

margin: 24px 0 0 0;
`;


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



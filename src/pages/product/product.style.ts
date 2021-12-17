import styled from "styled-components";

type Props = {
  isSelected: boolean;
};
export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  min-height: 768px;
  padding: 32px 16px;
`;

export const Content = styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;
  align-items: center;
  height: auto;
  margin: 8px 8px;
  box-shadow: 0px 2px 19px 1px rgba(10, 10, 10, 0.44);
  -webkit-box-shadow: 0px 2px 19px 1px rgba(10, 10, 10, 0.44);
  -moz-box-shadow: 0px 2px 19px 1px rgba(10, 10, 10, 0.44);
  border-radius: 6px;
  padding: 16px;
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
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const MainImage = styled.div`
  display: flex;
  width: 350px;
  height: 350px;
  align-items: center;
  justify-content: center;
  margin: 16px;
  border-radius: 3px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.9);
`;

export const ThumbsImageWrap = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const ThumbsImage = styled.div<Props>`
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
    line-weight: 32px;
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
    line-weight: 20px;
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

`;

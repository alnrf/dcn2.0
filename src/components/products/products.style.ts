import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-auto-rows: max-content;
  grid-gap: 10px;
  width: 100%;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
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
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.9);
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

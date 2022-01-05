import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 738px;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: #f7f7f7;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: max-content;
  grid-gap: 32px;
  min-height: 738px;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding: 40px;
  justify-content: space-between;
  background-color: #f7f7f7;
`;

export const Card = styled.div`
  overflow: hidden;
  display: flex;
  width: 330px;
  flex-direction: column;
  align-items: center;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: fill;
`;

export const OfferInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  height: 54px;
  padding: 0 16px;
  margin: 1px 16px;
  background-color: #fff;
  border: 1px solid #f1f1f1;
  border-radius: 6px;
`;

export const OfferCoupon = styled.div`
display: flex;
width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 15px;
  font-weight: 400;
  line-height: 23px;
  font-style: normal;
  color: #0d1136;
  background-color: #fff;
`;

export const CopyButton = styled.div`
  display: flex;
  height: 32px;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  font-size: 15px;
  font-weight: 700;
  line-height: 18px;
  font-style: normal;
  color: #134b8b;
  cursor: pointer;
  
`;

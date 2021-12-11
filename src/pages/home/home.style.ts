import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  min-height: 768px;
  padding: 32px 16px;
`;

export const HomeContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const FreeDeliveryBar = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 68px;
  background-color: #fff;
  overflow: hidden;
  border-radius: 6;
  border: 1px solid #f3f3f3;
  margin-bottom: 15px;
  padding: 15px;
  color: #1b5fac;
`;

export const FreeDeliveryText = styled.span`
  font-size: 16px;
  line-height: 24px;
  font-style: normal;
  font-weight: 400;
  font-color: #1b5fac;
`;

export const BannerContent = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
  margin: 8px 8px;
`;

export const ProductsContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: auto;
  margin: 8px 8px;
`;

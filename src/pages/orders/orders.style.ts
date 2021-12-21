import styled from "styled-components";

type StatusProp = {
  status: string;
};

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 768px;
  flex-direction: row;
  justify-content: center;
  padding: 32px 200px;
  background-color: #f7f7f7;
`;

export const MyOrdersContainer = styled.div`
  display: flex;
  width: 330px;
  height: 903px;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #f1f1f1;
  background-color: #fff;
  margin: 0 24px;
  padding: 16px;
`;

export const OrderDetailContainer = styled.div`
  display: flex;
  width: 70%;
  height: 903px;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #f1f1f1;
  background-color: #fff;
`;

export const MyOrderTitle = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin: 0 0 24px 0;
  span {
    font-size: 21px;
    font-weight: 600;
    font-style: normal;
    line-height: 25px;
    color: #0d1136;
  }
`;

export const MyOrderCard = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  background-color: #fff;
  margin: 0 0 16px 0;
  cursor: pointer;
`;

export const CardHeader = styled.div`
  display: flex;
  width: 100%;
  height: 64px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  background-color: #efefef;padding: 0 8px;
`;

export const Order = styled.span`
font-size: 15px;
  font-style: normal;
  line-height: 23px;
  font-weight: 700;
  color: #0d1136;
  
`;

export const OrderNumber = styled.span`
font-size: 15px;
  font-style: normal;
  line-height: 23px;
  font-weight: 400;
  color: #0d1136;
  margin: 0 0 0 8px;
`;

export const Status = styled.div`
  display: flex;
  height: 33px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  padding: 0 8px;
  font-size: 13px;
  font-style: normal;
  line-height: 13px;
  font-weight: 400;
  color: #fff;
  background-color: ${({ status }: StatusProp) => {
    switch (status) {
      case "CREATED":
        return "#68B6A9";
      case "CONFIRMED":
        return "#4FA5E5";
      case "PREPARING":
        return "#9D68B6";
      case "DELIVERING":
        return "#3AAFCD";
      case "COMPLETED":
        return "#303030";
      case "CANCELED":
        return "#C02323";
      default:
        return "#fff";
    }
  }};
`;

export const OrderInfo = styled.div`
display: flex;
width: 100%;
flex-direction: column;
align-items: center;
background-color: #F7F7F7;
padding: 8px;
border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
`;

export const Row = styled.div`
display: flex;
width: 100%;
flex-direction: row;
align-items: center;
justify-content: space-between;
background-color: #F7F7F7;
margin: 0 0 16px 0;
`;

export const Col = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #F7F7F7;
`;

export const Text = styled.span`
font-size: 13px;
  font-style: normal;
  line-height: 20px;
  font-weight: 400;
  color: #0d1136;
`;

export const TextBold = styled.span`
font-size: 13px;
  font-style: normal;
  line-height: 20px;
  font-weight: 700;
  color: #0d1136;
`;

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
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const MyOrdersContainer = styled.div`
  display: flex;
  width: 350px;
  height: 903px;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #f1f1f1;
  background-color: #fff;
  margin: 0 24px;
  padding: 16px;
  
`;

export const CardsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
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

export const Title = styled.div`
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

  margin: 0 0 16px 0;
  cursor: pointer;
  border-style: solid;
  border-width: 2px;
  transition: 0.2s ease-in-out;
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
  background-color: #efefef;
  padding: 0 8px;
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
        case "CANCEL_REQUESTED":
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
  background-color: #f7f7f7;
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
  margin: 0 0 6px 0;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f7f7f7;
`;

export const MyOrderText = styled.span`
  font-size: 13px;
  font-style: normal;
  line-height: 20px;
  font-weight: 400;
  color: #0d1136;
`;

export const MyOrderTextBold = styled.span`
  font-size: 13px;
  font-style: normal;
  line-height: 20px;
  font-weight: 700;
  color: #0d1136;
`;

export const DetailHeader = styled.div`
  display: flex;
  width: 100%;
  height: 66px;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  padding: 0 0 4px 16px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  span {
    font-size: 21px;
    font-weight: 600;
    font-style: normal;
    line-height: 25px;
    color: #0d1136;
  }
`;

export const InfoWrap = styled.div`
  display: flex;
  width: 100%;
  height: 231px;
  flex-direction: row;
  justify-content: space-between;
  background-color: #fff;
  border-top: 1px solid #f1f1f1;
  border-bottom: 1px solid #f1f1f1;
`;

export const AddressAndPayment = styled.div`
  display: flex;
  width: 80%;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  padding: 16px;
  border-right: 1px solid #f1f1f1;
`;

export const Prices = styled.div`
  display: flex;
  width: 30%;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  padding: 16px;
  border-right: 1px solid #f1f1f1;
`;

export const DetailText = styled.span`
  font-size: 15px;
  font-style: normal;
  line-height: 23px;
  font-weight: 400;
  color: #77798c;
`;

export const ResumeValuesText = styled.span`
  font-size: 15px;
  font-style: normal;
  line-height: 23px;
  font-weight: 400;
`;

export const DetailTextBold = styled.span`
  font-size: 15px;
  font-style: normal;
  line-height: 23px;
  font-weight: 700;
  color: #0d1136;
`;

export const DetailTextBoldGray = styled.span`
  font-size: 15px;
  font-style: normal;
  line-height: 23px;
  font-weight: 700;
  color: #77798c;
`;

export const AddressWrap = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: #fff;
`;

export const StepperContainer = styled.div`
  display: flex;
  width: 100%;
  height: 135px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-bottom: 1px solid #f1f1f1;
`;

export const ProductTableHeader = styled.div`
  display: flex;
  width: 100%;
  height: 36px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #f7f7f7;
  border-bottom: 1px solid #f1f1f1;
  padding: 16px;
`;

export const ProductTitleItem = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: start;

  background-color: #f7f7f7;
  font-size: 13px;
  font-style: normal;
  line-height: 20px;
  font-weight: 700;
  color: #0d1136;
`;

export const ProductTitleQttyPrice = styled.div`
  display: flex;
  width: 40%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #f7f7f7;
  font-size: 13px;
  font-style: normal;
  line-height: 20px;
  font-weight: 700;
  color: #0d1136;
`;


export const ProductList = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: #fff;
  border-bottom: 1px solid #f1f1f1;
  padding: 16px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 16px 0;
  background-color: #fff;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
`;

export const Button = styled.div`
  display: flex;
  height: 38px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  padding: 0 16px;
  background-color: #ea4d4a;
  cursor: pointer;
  span {
    font-size: 15px;
    font-style: normal;
    line-height: 23px;
    font-weight: 700;
    color: #fff;
  }
  &:hover {
    background-color: #ff5b60;
  }
`;

export const ProductWrapRow = styled.div`
display: flex;
width: 100%;
align-items: center;
justify-content: center;
flex-direction: row;
background-color: #fff;
margin: 0 0 16px 0;
`;

export const ProductWrapQttyPrice = styled.div`
  display: flex;
  width: 40%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  font-size: 13px;
  font-style: normal;
  line-height: 20px;
  font-weight: 700;
  color: #0d1136;
`;

export const ProductWrapItem = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: left;
  justify-content: start;
  background-color: #fff;
`;
export const WrapCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
  background-color: #fff;
  margin: 0 0 0 16px;
`;
export const ProductImage = styled.img`
  width: 75px;
  height: 75px;
  display: flex;
  object-fit: fill;
  border-radius: 6px;
`;

export const NoOrder = styled.div`
   display: flex;
  width: 100%;
  flex-direction: row;
  align-items: left;
  justify-content: center;
  font-size: 13px;
  font-style: normal;
  line-height: 13px;
  font-weight: 400;
  color: #fff;
`;

import styled from "styled-components";
import { Link } from "react-router-dom";
import { Icon } from "@chakra-ui/react";

export const CartPopup = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #134b8b;
  padding: 16px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  border: 0;
  outline: 0;
  cursor: pointer;
  position: fixed;
  right: 0;
  top: 50%;
  margin-top: -46px;
  z-index: 99;

  @media (max-width: 580px) {
    display: none;
  }
`;

export const ItemWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ItemText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px;
  color: #fff;
  margin: 0 0 0 8px;
`;

export const ItemPrice = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px;
  color: #134b8b;
  padding: 8px;
  background-color: #fff;
  border-radius: 6px;
  margin: 8px 0 0 0;
`;

export const CartSideBar = styled.div`
  height: 100%;
  width: 420px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 99;
  background-color: #fff;
  border: 1px solid #f7f7f7;
  transform: 0.5s ease;
  -webkit-box-shadow: 0px 5px 13px 2px rgba(0, 0, 0, 0.46);
  box-shadow: 0px 5px 13px 2px rgba(0, 0, 0, 0.46);
`;

export const RowWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-bottom: 1px solid #f1f1f1;
  padding: 8px;
`;

export const ItemListWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding: 8px;
  overflow-y: hiden;
`;

export const CloseButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 400;
  font-style: normal;
  line-height: 23px;
  cursor: pointer;
  color: #134b8b;
  background-color: #fff;
  &:hover {
    color: #ea4d4a;
  }
`;

export const ItemTxt = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 700;
  font-style: normal;
  line-height: 23px;
  color: #134b8b;
  margin: 0 0 0 8px;
`;

export const NoProductWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
`;

export const NoProductText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  width: 100%;
  font-size: 15px;
  font-weight: 700;
  font-style: normal;
  line-height: 23px;
  color: #77798c;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  width: 100%;
`;

export const CouponWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  width: 100%;
  margin: 16px 0;
`;

export const CouponText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  width: 100%;
  font-size: 15px;
  font-weight: 700;
  font-style: normal;
  line-height: 23px;
  color: #1b5fac;
  cursor: pointer;
`;

export const CouponApplied = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

export const CouponTextApplied = styled.span`
  font-size: 15px;
  font-weight: 500;
  font-style: normal;
  line-height: 23px;
  color: #77798c;
`;

export const CouponTextError = styled.span`
  font-size: 15px;
  font-weight: 700;
  font-style: normal;
  line-height: 23px;
  color: red;
`;

export const CouponCode = styled.span`
  font-size: 15px;
  font-weight: 700;
  font-style: normal;
  line-height: 23px;
  color: #1b5fac;
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px;

  width: 90%;
  height: 50px;
  border-radius: 6px;
  background-color: #fff;
  border: 1px solid #ededed;
`;

export const Input = styled.input`
  display: flex;
  width: 100%;
  height: 40px;
  background-color: #fff;
  &:focus {
    border-color: #134b8b;
    outline: none !important;
  }
`;
export const ApplyButton = styled.div`
  display: flex;
  height: 38px;
  padding: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 700;
  font-style: normal;
  line-height: 23px;
  text-align: center;
  border-radius: 6px;
  cursor: pointer;
  color: #fff;
  background-color: #134c8e;
  &:hover {
    background-color: #1b5fac;
  }
`;

export const FinishDiv = styled(Link)`
  height: 48px;
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #134b8b;
  border-radius: 48px;
  box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px;
  cursor: pointer;
  margin-bottom: 16px;
  padding: 2px 2px 2px 32px;
  color: #fff;
  &:hover {
    color: #75a0d1;
  }
`;

export const FinishTxt = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #134b8b;
  cursor: pointer;
  font-size: 15px;
  font-weight: 700;
  font-style: normal;
  line-height: 23px;
`;

export const FinishPrice = styled.div`
  height: 44px;
  width: 150px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 700;
  font-style: normal;
  line-height: 23px;
  color: #134b8b;
  padding: 0 24px;
  background-color: #fff;
  border-radius: 48px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  width: 100%;
  height: 92px;
  padding: 4px;
  margin: 4px 0;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const ChangeQuantity = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #f7f7f7;
  width: 10%;
  height: 100%;
  border-radius: 8px;
`;

export const ChangeButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f7f7f7;
  cursor: pointer;
  width: 20px;
  height: 20px;
`;

export const ChangeItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f7f7f7;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
line-height: 23px;
color: #0d1136;
`;

export const ProductImageWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  width: 80px;
  height: 80px;
`;

export const ProductImage = styled.img`
  width: 50px;
  height: 50px;
  display: flex;
  object-fit: fill;
  border-radius: 6px;
`;

export const ProductWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
  background-color: #fff;
  width: 50%;
`;

export const ProductTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  background-color: #fff;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
line-height: 23px;
color: #0d1136;
`;
export const ProductPrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  background-color: #fff;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
line-height: 18px;
color: #134b8b;
`;

export const ProductQuantity = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  background-color: #fff;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
line-height: 20px;
color: #77798c;
`;

export const ProductTotal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  width: 30%;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
line-height: 23px;
color: #0d1136;
`;

export const DeleteButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  cursor: pointer;
`;

export const IconDelete = styled(Icon)`
color: #0d1136;
font-size: 20px;
&:hover {
  color: red;
}
`;

export const IconIncrease = styled(Icon)`
color: #0d1136;
font-size: 16px;
&:hover {
  color: #134b8b;
}
`;

export const IconDecrease = styled(Icon)`
color: #0d1136;
font-size: 16px;
&:hover {
  color: red;
}
`;

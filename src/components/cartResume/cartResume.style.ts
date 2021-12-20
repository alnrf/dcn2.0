import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 20%;
  flex-direction: column;
  
  align-items: center;
  padding: 8px 16px;
  
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 8px 0;
`;

export const CartTitle = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-conten: center;
 
  span {
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px;
    color: #0d1136;
  }
`;

export const ProductListCont = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  
`;

export const ProductWrap = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: #f7f7f7;
  border-radius: 6px;
  border: 1px solid #77798c;
  padding: 8px;
  margin: 8px 0;
`;

export const ProductRow = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #f7f7f7;
`;

export const ProductName = styled.span`
  font-size: 14px;
  font-style: normal;
  font-weight: 900;
  line-height: 21px;
  color: #77798c;
`;

export const ProductAmount = styled.span`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  color: #77798c;
`;

export const ProductQuantity = styled.div`
  display: flex;
  width: 30%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 0 8px;
  border-radius: 6px;
  span {
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    color: #0d1136;
  }
`;

export const Divider = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-bottom-color: #cccccc;
  margin: 8px 0;
`;

export const TxtNormal = styled.span`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  color: #77798c;
`;

export const TxtTotal = styled.span`
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 21px;
  color: #0d1136;
`;

export const TxtFee = styled.span`
  font-size: 11px;
  font-style: normal;
  font-weight: 700;
  line-height: 17px;
  color: #0d1136;
`;

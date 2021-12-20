import React, { useState } from "react";
import * as SC from "./cartResume.style";
import { toCurrency } from "../../utils/formatMoney";

const data = [
  {
    title: "Batata",
    amount: 999,
    quantity: 1,
  },
  {
    title: "Arroz",
    amount: 699,
    quantity: 1,
  },
  {
    title: "Macarrão",
    amount: 799,
    quantity: 4,
  },
];

function CartResume() {
  return (
    <SC.Container>
      <SC.CartTitle>
        <span>Seu pedido</span>
      </SC.CartTitle>
      <SC.Divider />
      <SC.ProductListCont>
        {data.map((item: any, index: any) => (
          <SC.ProductWrap key={index}>
            <SC.ProductRow>
              <SC.ProductName>
                {item?.title}
                <SC.TxtNormal>(0 l)</SC.TxtNormal>
              </SC.ProductName>
              <SC.ProductAmount>
                R$ {toCurrency(item?.quantity * item?.amount)}
              </SC.ProductAmount>
            </SC.ProductRow>
            <SC.ProductQuantity>
              <span style={{ cursor: "pointer" }}>-</span>
              <span>{item?.quantity}</span>
              <span style={{ cursor: "pointer" }}>+</span>
            </SC.ProductQuantity>
          </SC.ProductWrap>
        ))}
      </SC.ProductListCont>
      <SC.Divider />
      <SC.Row>
        <SC.TxtNormal>Sub-total</SC.TxtNormal>
        <SC.TxtNormal>R$ 50,00</SC.TxtNormal>
      </SC.Row>
      <SC.Row>
        <SC.TxtNormal>Taxa de entrega</SC.TxtNormal>
        <SC.TxtNormal>R$ 20,00</SC.TxtNormal>
      </SC.Row>
      <SC.Row>
        <SC.TxtNormal>Troco para</SC.TxtNormal>
        <SC.TxtNormal>R$ 0,00</SC.TxtNormal>
      </SC.Row>
      <SC.Row>
        <SC.TxtTotal>
          Total<SC.TxtFee>(Incluído NF-e)</SC.TxtFee>
        </SC.TxtTotal>
        <SC.TxtNormal>R$ 50,00</SC.TxtNormal>
      </SC.Row>
    </SC.Container>
  );
}

export default CartResume;

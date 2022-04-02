import React from "react";
import * as SC from "./noOrderSelected.style";
import { EmptyCart } from "../../assets/icons/EmptyCart";

function NoOrderSelected() {
  return (
    <SC.NoResultWrapper>
      <h3>Selecione um pedido.</h3>
      <SC.ImageWrapper>
        <EmptyCart />
      </SC.ImageWrapper>
    </SC.NoResultWrapper>
  );
}

export default NoOrderSelected;

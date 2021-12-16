import React from "react";
import * as SC from "./noproducts.style";
import { EmptyCart } from "../../assets/icons/EmptyCart";

function NoProducts() {
  return (
    <SC.NoResultWrapper>
      <h3>Desculpe, nenhum resultado foi encontrado.</h3>
      <SC.ImageWrapper>
        <EmptyCart />
      </SC.ImageWrapper>
    </SC.NoResultWrapper>
  );
}

export default NoProducts;

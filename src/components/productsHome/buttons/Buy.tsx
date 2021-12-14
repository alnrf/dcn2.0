import React from "react";
import * as SC from "./button.style";
import { BsCartPlus } from "react-icons/bs";
import { Icon } from "@chakra-ui/react";

const Buy = ({ buyAction }: any) => {
  return (
    <SC.BtnContainer onClick={buyAction}>
      <SC.BuyButton>
        <Icon as={BsCartPlus} fontSize="24px" style={{ marginRight: "8px" }} />
        <SC.BuyTxt>Comprar</SC.BuyTxt>
      </SC.BuyButton>
    </SC.BtnContainer>
  );
};

export default Buy;

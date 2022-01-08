import React, { useState } from "react";
import * as SC from "./cartSideBar.style";
import { Icon } from "@chakra-ui/react";
import { RiHandbagFill, RiCloseFill } from "react-icons/ri";
import { NoCartBag } from "../../assets/icons/NoCartBag";
import { Link } from "react-router-dom";

function CartSideBar() {
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);
  const [itemQtde, setItemQtde] = useState(1);
  const [hasCoupon, setHasCoupon] = useState(false);
  const [couponApplied, setCouponApplied] = useState(false);
  const [isCouponInvalid, setIsCouponInvalid] = useState(false);
  return (
    <>
      <SC.CartPopup onClick={() => setIsOpenSideBar(!isOpenSideBar)}>
        <SC.ItemWrap>
          <Icon as={RiHandbagFill} color="#fff" size="15px" />
          <SC.ItemText>{`${itemQtde} ${
            itemQtde > 1 ? "itens" : "item"
          }`}</SC.ItemText>
        </SC.ItemWrap>
        <SC.ItemPrice>R$ 0,00</SC.ItemPrice>
      </SC.CartPopup>
      {isOpenSideBar && (
        <SC.CartSideBar>
          <SC.RowWrap>
            <SC.ItemWrap>
              <Icon as={RiHandbagFill} color="#134b8b" size="15px" />
              <SC.ItemTxt>{`${itemQtde} ${
                itemQtde > 1 ? "itens" : "item"
              }`}</SC.ItemTxt>
            </SC.ItemWrap>
            <SC.CloseButton onClick={() => setIsOpenSideBar(!isOpenSideBar)}>
              <Icon as={RiCloseFill} />
            </SC.CloseButton>
          </SC.RowWrap>
          <SC.ItemListWrap>
            <SC.NoProductWrap>
              <NoCartBag />
              <SC.NoProductText>Nenhum produto encontrado.</SC.NoProductText>
            </SC.NoProductWrap>
          </SC.ItemListWrap>
          <SC.Footer>
            <SC.CouponWrap>
              {!hasCoupon && (
                <SC.CouponText onClick={() => setHasCoupon(!hasCoupon)}>
                  Você tem um cupom?
                </SC.CouponText>
              )}
              {hasCoupon && !couponApplied && (
                <SC.InputDiv>
                  <SC.Input
                    type="text"
                    placeholder="Digite seu código de cupom aqui."
                  />
                  <SC.ApplyButton onClick={() => setCouponApplied(true)}>
                    Aplicar
                  </SC.ApplyButton>
                </SC.InputDiv>
              )}
              {couponApplied && (
                <SC.CouponApplied>
                  <SC.CouponTextApplied>
                    Cupom aplicado {"\u00A0"}
                  </SC.CouponTextApplied>
                  <SC.CouponCode>Cupom</SC.CouponCode>
                </SC.CouponApplied>
              )}
              {isCouponInvalid && (
                <SC.CouponTextError>Cupom inválido!</SC.CouponTextError>
              )}
            </SC.CouponWrap>

            <SC.FinishDiv to="/carrinho/">
              <SC.FinishTxt>Finalizar Compra</SC.FinishTxt>
              <SC.FinishPrice>R$ 0,00</SC.FinishPrice>
            </SC.FinishDiv>
          </SC.Footer>
        </SC.CartSideBar>
      )}
    </>
  );
}

export default CartSideBar;

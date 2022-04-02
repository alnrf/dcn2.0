import React, { useState } from "react";
import * as SC from "./products.style";
import { toCurrency } from "../../utils/formatMoney";
import { Link } from "react-router-dom";
import settings from "../../services/settings";

import { Icon } from "@chakra-ui/react";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { BsCartPlus } from "react-icons/bs";
import { useDispatch } from "react-redux";
import {
  addItemToCart,
  decreaseCartItem,
  increaseCartItem,
} from "../../redux/ducks/cart/cart";

function Products({ data }: any) {
  const [qtdeCart, setItem] = useState(0);
  const dispatch = useDispatch();

  const handleAddItem = (item: any) => {
    console.log("dados", item);
    const payload = {
      id: item?.id,
      title: item?.title,
      stock_type: item?.stock_type,
      stock_unity: item?.stock_unity,
      amount: item?.amount,
      totalAmount: item?.amount,
      image: item?.image?.image_path,
      quantity: 1,
    };
    setItem(qtdeCart + 1);
    dispatch(addItemToCart(payload));
  };

  const handleIncreaseItem = (id: any) => {
    if (qtdeCart >= 1) {
      setItem(qtdeCart + 1);
      dispatch(increaseCartItem(id));
    }
  };

  const handleDecreaseItem = (id: any) => {
    if (qtdeCart > 0) {
      setItem(qtdeCart - 1);
      dispatch(decreaseCartItem(id));
    }
  };

  return (
    <SC.Container>
      <SC.Grid>
        {data.map((item: any) => (
          <SC.Card key={item?.uuid}>
            <Link to={`/produto/${item?.id}`}>
              <SC.ImageContainer>
                <SC.Image
                  src={`${settings.UPLOAD_API_ENDPOINT}${item?.image?.image_path}`}
                />
              </SC.ImageContainer>
              <SC.ProductInfo>
                <SC.OldPrice>
                  {item?.from_amount > 0
                    ? `De: R$${toCurrency(item?.from_amount)}`
                    : ""}
                </SC.OldPrice>
                <SC.Price>
                  {item?.from_amount > 0 ? "Por: R$" : "R$"}
                  {toCurrency(item?.amount)}
                </SC.Price>
                <SC.ProductName>{item?.title}</SC.ProductName>
              </SC.ProductInfo>
            </Link>
            {item?.stock_quantity > 0 ? (
              <SC.ButtonContainer>
                {qtdeCart === 0 ? (
                  <>
                    <SC.BtnContainer onClick={() => handleAddItem(item)}>
                      <SC.BuyButton>
                        <Icon
                          as={BsCartPlus}
                          fontSize="24px"
                          style={{ marginRight: "8px" }}
                        />
                        <SC.BuyTxt>Comprar</SC.BuyTxt>
                      </SC.BuyButton>
                    </SC.BtnContainer>
                  </>
                ) : (
                  <>
                    <SC.BtnContainer>
                      <SC.AddRmvBtn>
                        <SC.Remove onClick={() => handleDecreaseItem(item?.id)}>
                          <Icon as={FiMinusCircle} fontSize="16px" />
                        </SC.Remove>
                        <SC.Counter>
                          <SC.Txt>{qtdeCart}</SC.Txt>
                        </SC.Counter>
                        <SC.Add onClick={() => handleIncreaseItem(item?.id)}>
                          <Icon as={FiPlusCircle} fontSize="16px" />
                        </SC.Add>
                      </SC.AddRmvBtn>
                    </SC.BtnContainer>
                  </>
                )}
              </SC.ButtonContainer>
            ) : (
              <SC.ButtonContainer>Sem estoque</SC.ButtonContainer>
            )}
          </SC.Card>
        ))}
      </SC.Grid>
    </SC.Container>
  );
}

export default Products;

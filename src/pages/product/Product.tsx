import React, { useEffect, useState } from "react";
import * as SC from "./product.style";
import { useNavigate, useParams } from "react-router-dom";
import { toCurrency } from "../../utils/formatMoney";

import { getProductDetail } from "../../services/services";
import settings from "../../services/settings";
import { getMeasureAbbreviation, getMeasure } from "../../utils/formatMeasure";
import { BsCartPlus } from "react-icons/bs";
import { Icon } from "@chakra-ui/react";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import {
  addItemToCart,
  decreaseCartItem,
  increaseCartItem,
} from "../../redux/ducks/cart/cart";
import { useDispatch } from "react-redux";

import { iProdDetail } from "./interfaces";
import CartSideBar from "../../components/cartSideBar/CartSideBar";

function Product() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const [prodData, setProdDetail] = useState<iProdDetail>();
  const [mainImg, setMainImg] = useState();
  const [qtdeCart, setItem] = useState(0);

  useEffect(() => {
    getProductDetail(params.id)
      .then((res) => {
        setProdDetail(res);
        setMainImg(res.image[0].image_path);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {}, [prodData]);

  const handleAddItem = () => {
    const payload = {
      id: prodData?.id,
      title: prodData?.title,
      stock_type: prodData?.stock_type,
      stock_unity: prodData?.stock_unity,
      amount: prodData?.amount,
      totalAmount: prodData?.amount,
      image: mainImg,
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
      <SC.Content>
        <SC.LinkBarWrap>
          <SC.BackButton onClick={() => navigate(-1)}>
            <SC.ButtonTxt>Voltar</SC.ButtonTxt>
          </SC.BackButton>
        </SC.LinkBarWrap>
        <SC.Product>
          <SC.ImageWraper>
            <SC.MainImage
              src={`${settings.UPLOAD_API_ENDPOINT}${mainImg}`}
              alt="Imagem principal"
            />

            <SC.ThumbsImageWrap>
              {prodData?.image?.map((item: any) => (
                <SC.ThumbsImage
                  isSelected={mainImg === item?.image_path}
                  key={item?.id}
                  onClick={() => setMainImg(item?.image_path)}
                  src={`${settings.UPLOAD_API_ENDPOINT}${item?.image_path}`}
                  alt="Miniatura"
                  style={{ objectFit: "contain" }}
                />
              ))}
            </SC.ThumbsImageWrap>
          </SC.ImageWraper>
          <SC.InfoWraper>
            <SC.ProductTitle>
              <span>{prodData?.title}</span>
            </SC.ProductTitle>
            <SC.ProductInfo>
              <span>{`${prodData?.stock_unity} ${getMeasureAbbreviation(
                prodData?.stock_type
              )} (${getMeasure(prodData?.stock_type)})`}</span>
            </SC.ProductInfo>
            <SC.PriceWrap>
              <SC.Price>{`R$${toCurrency(prodData?.amount)}`}</SC.Price>
              {prodData?.from_amount > 0 && (
                <SC.PriceFrom>
                  {`R$ ${toCurrency(prodData?.from_amount)}`}
                </SC.PriceFrom>
              )}
            </SC.PriceWrap>
            {/* {prodData?.description && (
              <SC.Description>
                <SC.DescriptionTitle>Descrição:</SC.DescriptionTitle>
                <SC.DescriptionContent>
                  {prodData?.description}
                </SC.DescriptionContent>
              </SC.Description>
            )} */}
          </SC.InfoWraper>
        </SC.Product>
        <SC.BuyButtonArea>
          {qtdeCart === 0 ? (
            <>
              <SC.BtnContainer onClick={() => handleAddItem()}>
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
                  <SC.Remove onClick={() => handleDecreaseItem(prodData?.id)}>
                    <Icon as={FiMinusCircle} fontSize="16px" />
                  </SC.Remove>
                  <SC.Counter>
                    <SC.Txt>{qtdeCart}</SC.Txt>
                  </SC.Counter>
                  <SC.Add onClick={() => handleIncreaseItem(prodData?.id)}>
                    <Icon as={FiPlusCircle} fontSize="16px" />
                  </SC.Add>
                </SC.AddRmvBtn>
              </SC.BtnContainer>
            </>
          )}
        </SC.BuyButtonArea>
      </SC.Content>
      <CartSideBar />
    </SC.Container>
  );
}

export default Product;

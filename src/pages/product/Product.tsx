import React, { useEffect, useState } from "react";
import * as SC from "./product.style";
import { useNavigate, useParams } from "react-router-dom";
import { toCurrency } from "../../utils/formatMoney";
import Buy from "../../components/products/buttons/Buy";
import AddOrRemove from "../../components/products/buttons/AddOrRemove";
import { getProductDetail } from "../../services/services";
import settings from "../../services/settings";
import { getMeasureAbbreviation, getMeasure } from "../../utils/formatMeasure";

interface iCategory {
  id?: number;
  title?: string;
  seo_url?: string;
}

interface iProdDetail {
  id?: number;
  uuid?: string;
  code?: string;
  title?: string;
  from_amount?: any;
  amount?: any;
  stock_type?: string;
  stock_unity?: number;
  seo_url?: string;
  full_seo_url?: string;
  main_image_id?: number;
  show_home?: string;
  image?: [
    {
      id?: number;
      main?: boolean;
      path?: string | undefined;
      image?: string | undefined;
      image_thumb?: string | undefined;
      image_path?: string | undefined;
      image_url?: string | undefined;
    }
  ];
  category?: iCategory;
  subcategory?: iCategory;
}

function Product() {
  const navigate = useNavigate();
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
                  {`R$${toCurrency(prodData?.from_amount)}`}
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
            <Buy buyAction={() => setItem(qtdeCart + 1)} />
          ) : (
            <AddOrRemove />
          )}
        </SC.BuyButtonArea>
      </SC.Content>
    </SC.Container>
  );
}

export default Product;

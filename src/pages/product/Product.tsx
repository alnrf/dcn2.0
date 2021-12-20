import React, { useState } from "react";
import * as SC from "./product.style";
import { useNavigate, useParams } from "react-router-dom";
import { toCurrency } from "../../utils/formatMoney";
import Buy from "../../components/products/buttons/Buy";
import AddOrRemove from "../../components/products/buttons/AddOrRemove";

const prodData = {
  title: "Tomate",
  id: 8,
  amount: 1499,
  from_amount: 1555,
  stock_type: "Kilograma",
  stock_unit: "kg",
  stock_qtde: 1,
  highlight: "Oferta",
  description:
    "O tomate é o fruto[1] do tomateiro (Solanum lycopersicum; Solanaceae). Da sua família, fazem também parte as berinjelas, as pimentas e os pimentões, além de algumas espécies não comestíveis. A palavra portuguesa tomate vem do castelhano tomate, derivada do náuatle (língua asteca) tomatl. Esta apareceu pela primeira vez na imprensa em 1595. As espécies são originárias das Américas Central e do Sul; sua utilização como alimentos teve origem no México,[3] espalhando-se por todo o mundo depois da colonização das Américas pelos europeus. Suas muitas variedades são agora amplamente cultivadas, às vezes em estufas em climas mais frios. As plantas crescem tipicamente entre 1-3 metros (3-10 pés) de altura e desenvolvendo hastes fracas que se estendem sobre o chão ou trepam pelas outras plantas. É uma planta perene no seu habitat nativo, embora seja muitas vezes cultivada em climas temperados como anual. Um tomate comum médio pesa cerca de 100 gramas (4 oz).",
  images: [
    {
      id: 1,
      url: "http://poa01.datacubo.net:3030/image/3/17992501-47a6-4a4f-b07f-b4c13ab5bb73ae9115b9-9bc0-4571-a43f-dd9678beacbf_1618507768_thumb.png",
    },
    {
      id: 2,
      url: "http://poa01.datacubo.net:3030/image/3/6441e465-f35d-4879-b628-bd637e205f3c9fbe23b2-f95b-4aec-bda9-d10f1cce6af2_1618508148_thumb.jpg",
    },
  ],
};

function Product() {
  const navigate = useNavigate();
  const params = useParams();

  const [mainImg, setMainImg] = useState(prodData.images[0].url);
  const [qtdeCart, setItem] = useState(0);

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
            <SC.MainImage>
              <img src={mainImg} alt="Imagem principal" />
            </SC.MainImage>
            <SC.ThumbsImageWrap>
              {prodData?.images?.map((item: any) => (
                <SC.ThumbsImage
                  isSelected={mainImg === item?.url}
                  key={item?.id}
                  onClick={() => setMainImg(item?.url)}
                >
                  <img src={item?.url} alt="Miniatura" />
                </SC.ThumbsImage>
              ))}
            </SC.ThumbsImageWrap>
          </SC.ImageWraper>
          <SC.InfoWraper>
            <SC.ProductTitle>
              <span>{prodData?.title}</span>
            </SC.ProductTitle>
            <SC.ProductInfo>
              <span>{`${prodData.stock_qtde} ${prodData?.stock_unit} (${prodData?.stock_type})`}</span>
            </SC.ProductInfo>
            <SC.PriceWrap>
              <SC.Price>R${toCurrency(prodData?.amount)}</SC.Price>
              {prodData?.from_amount && (
                <SC.PriceFrom>
                  R${toCurrency(prodData?.from_amount)}
                </SC.PriceFrom>
              )}
            </SC.PriceWrap>
            {prodData?.description && (
              <SC.Description>
                <SC.DescriptionTitle>Descrição:</SC.DescriptionTitle>
                <SC.DescriptionContent>
                  {prodData?.description}
                </SC.DescriptionContent>
              </SC.Description>
            )}
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

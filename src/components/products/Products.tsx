import React, { useState } from "react";
import * as SC from "./products.style";
import { toCurrency } from "../../utils/formatMoney";
import { Link } from "react-router-dom";
import settings from "../../services/settings";
import Buy from "./buttons/Buy";
import AddOrRemove from "./buttons/AddOrRemove";

function Products({ data }: any) {
  const [qtdeCart, setItem] = useState(0);

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
                  <Buy buyAction={() => setItem(qtdeCart + 1)} />
                ) : (
                  <AddOrRemove />
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

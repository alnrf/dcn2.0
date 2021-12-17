import React, { useState } from "react";
import * as SC from "./products.style";
import { toCurrency } from "../../utils/formatMoney";
import { Link } from "react-router-dom";

import Buy from "./buttons/Buy";
import AddOrRemove from "./buttons/AddOrRemove";

function Products({ data }: any) {
  const [qtdeCart, setItem] = useState(0);

  return (
    <SC.Container>
      {data.map((item: any) => (
        <SC.Card key={item?.uuid}>
          <Link to={`/produto/${item?.title}`}>
            <SC.ImageContainer>
              <SC.Image src={item?.image?.image_url} />
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
          <SC.ButtonContainer>
            {qtdeCart === 0 ? (
              <Buy buyAction={() => setItem(qtdeCart + 1)} />
            ) : (
              <AddOrRemove />
            )}
          </SC.ButtonContainer>
        </SC.Card>
      ))}
    </SC.Container>
  );
}

export default Products;

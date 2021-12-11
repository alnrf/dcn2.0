import React, { useState } from "react";
import * as SC from "./productsHome.style";
import { toCurrency } from "../../utils/formatMoney";

import Buy from "./buttons/Buy";
import AddOrRemove from "./buttons/AddOrRemove";

function ProductsHome({ data }: any) {
  const [itemCart, setItem] = useState("");

  return (
    <SC.Container>
      {data.map((item: any) => (
        <SC.Card key={item.uuid}>
          <SC.ImageContainer>
            <SC.Image src={item.image.image_url} />
          </SC.ImageContainer>
          <SC.ProductInfo>
            <SC.OldPrice>
              {item.from_amount > 0
                ? `De: R$${toCurrency(item.from_amount)}`
                : ""}
            </SC.OldPrice>
            <SC.Price>De: R${toCurrency(item.amount)}</SC.Price>
            <SC.ProductName>{item.title}</SC.ProductName>
          </SC.ProductInfo>
          <SC.ButtonContainer>
            {itemCart === "" ? (
              <Buy buyAction={() => setItem(item + 1)} />
            ) : (
              <AddOrRemove />
            )}
          </SC.ButtonContainer>
        </SC.Card>
      ))}
    </SC.Container>
  );
}

export default ProductsHome;

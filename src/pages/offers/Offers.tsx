import React, { useState } from "react";
import * as SC from "./offers.style";
import offers from "../../utils/mocks/offers.json";

function Offers() {
  const [copiedCode, setCodeCopied] = useState(null);

  const handleCopy = ({ code }: any) => {
    if (code === copiedCode) {
      setCodeCopied(null);
    } else {
      setCodeCopied(code);
    }
  };

  return (
    <SC.Container>
      {offers.map((item) => (
        <SC.Card key={item?.id}>
          <SC.ImageContainer>
            <SC.Image src={item?.image} alt={item.title} />
          </SC.ImageContainer>
          <SC.OfferInfo>
            <SC.OfferCoupon>{item?.code}</SC.OfferCoupon>
            <SC.CopyButton onClick={() => handleCopy(item)}>
              {copiedCode === item?.code ? "Copiado" : "Copiar"}
            </SC.CopyButton>
          </SC.OfferInfo>
        </SC.Card>
      ))}
    </SC.Container>
  );
}

export default Offers;

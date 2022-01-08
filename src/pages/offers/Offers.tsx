import React, { useState } from "react";
import * as SC from "./offers.style";
import offers from "../../utils/mocks/offers.json";
import CopyToClipboard from "react-copy-to-clipboard";

function Offers() {
  const [copyText, setCopyText] = useState({
    value: "",
    copied: false,
  });

  return (
    <SC.Container>
      <SC.Grid>
        {offers.map((item) => (
          <SC.Card key={item?.id}>
            <SC.ImageContainer>
              <SC.Image src={item?.image} alt={item.title} />
            </SC.ImageContainer>
            <SC.OfferInfo>
              <SC.OfferCoupon>{item?.code}</SC.OfferCoupon>
              <CopyToClipboard
                text={item?.code}
                onCopy={() =>
                  setCopyText({
                    value: item?.code,
                    copied: true,
                  })
                }
              >
                <SC.CopyButton>
                  {copyText.value === item?.code ? "Copiado" : "Copiar"}
                </SC.CopyButton>
              </CopyToClipboard>
            </SC.OfferInfo>
          </SC.Card>
        ))}
      </SC.Grid>
    </SC.Container>
  );
}

export default Offers;

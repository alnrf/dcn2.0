import React, { useState } from "react";
import * as SC from "./addressCard.style";

import Data from "../../utils/mocks/addresses.json";

function AddressCard() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelect = ({ city_id }: any) => {
    if (city_id === selectedItem) {
      setSelectedItem(null);
    } else {
      setSelectedItem(city_id);
    }
  };

  return (
    <SC.Container>
      {Data.addresses.map((item: any, index: any) => (
        <SC.Card
          key={index}
          style={{
            borderColor: selectedItem === item?.city_id ? "#144c8b" : "#d8d8d8",
          }}
          onClick={() => handleSelect(item)}
        >
          <SC.AddressName>{item?.title}</SC.AddressName>
          <SC.AddressText>{`${item?.street_name}, ${item?.number} - ${item?.complement}`}</SC.AddressText>
          <SC.AddressText>{`${item?.zipcode} - ${item?.city}`}</SC.AddressText>
        </SC.Card>
      ))}
    </SC.Container>
  );
}

export default AddressCard;

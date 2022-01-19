import React, { useState } from "react";
import * as SC from "./addressCard.style";
import { Tooltip } from "@chakra-ui/react";
import { MdEdit, MdDeleteForever } from "react-icons/md";

function AddressCard({ addressData }: any) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showCardActions, setShowCardActions] = useState(null);

  const handleSelect = ({ city_id }: any) => {
    if (city_id === selectedItem) {
      setSelectedItem(null);
    } else {
      setSelectedItem(city_id);
    }
  };

  const handleMouseHover = ({ city_id }: any) => {
    if (city_id === showCardActions) {
      setShowCardActions(null);
    } else {
      setShowCardActions(city_id);
    }
  };

  return (
    <SC.Container>
      {addressData.map((item: any, index: any) => (
        <SC.Card
          key={index}
          style={{
            borderColor: selectedItem === item?.city_id ? "#144c8b" : "#d8d8d8",
          }}
          onClick={() => handleSelect(item)}
          onMouseLeave={() => handleMouseHover(item)}
          onMouseEnter={() => handleMouseHover(item)}
        >
          <SC.AddressName>{item?.title}</SC.AddressName>
          <SC.AddressText>{`${item?.street_name}, ${item?.number} - ${item?.complement}`}</SC.AddressText>
          <SC.AddressText>{`${item?.zipcode} - ${item?.city}`}</SC.AddressText>
          {showCardActions === item?.city_id && (
            <SC.CardActions>
              <Tooltip fontSize="md" label="Editar" placement="top">
                <SC.ActionEdit onClick={() => alert("Vai editar")}>
                  <SC.IconAction as={MdEdit} />
                </SC.ActionEdit>
              </Tooltip>
              <Tooltip fontSize="md" label="Excluir" placement="top">
                <SC.ActionDelete onClick={() => alert("Vai excluir")}>
                  <SC.IconAction as={MdDeleteForever} />
                </SC.ActionDelete>
              </Tooltip>
            </SC.CardActions>
          )}
        </SC.Card>
      ))}
    </SC.Container>
  );
}

export default AddressCard;

import React, { useState } from "react";
import * as SC from "./addressCard.style";
import { Tooltip } from "@chakra-ui/react";
import { MdEdit, MdDeleteForever } from "react-icons/md";
import { useSelector } from "react-redux";
import { formatZipCode } from "../../utils/formatZipCode";

interface Actions {
  onDelete: (data: any) => void;
  onEdit: (data: any) => void;
}

function AddressCard({ onEdit, onDelete }: Actions) {
  const customerData = useSelector((data: any) => data.authStore.customer);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showCardActions, setShowCardActions] = useState(null);

  const handleSelect = ({ id }: any) => {
    if (id === selectedItem) {
      setSelectedItem(null);
    } else {
      setSelectedItem(id);
    }
  };

  const handleMouseHover = ({ id }: any) => {
    if (id === showCardActions) {
      setShowCardActions(null);
    } else {
      setShowCardActions(id);
    }
  };

  return (
    <SC.Container>
      {customerData?.addresses?.map((item: any) => (
        <SC.Card
          key={item?.id}
          style={{
            borderColor: selectedItem === item?.id ? "#144c8b" : "#d8d8d8",
          }}
          onClick={() => handleSelect(item)}
          onMouseLeave={() => handleMouseHover(item)}
          onMouseEnter={() => handleMouseHover(item)}
        >
          <SC.AddressName>{item?.title}</SC.AddressName>
          {item?.complement ? (
            <SC.AddressText>{`${item?.street_name}, ${item?.number} - ${item?.complement}`}</SC.AddressText>
          ) : (
            <SC.AddressText>{`${item?.street_name}, ${item?.number}`}</SC.AddressText>
          )}
          <SC.AddressText>{`${formatZipCode(item?.zipcode)}`}</SC.AddressText>
          <SC.AddressText>{` ${item?.city}/${item?.state_slug}`}</SC.AddressText>
          {showCardActions === item?.id && (
            <SC.CardActions>
              <Tooltip fontSize="md" label="Editar" placement="top">
                <SC.ActionEdit onClick={() => alert("Vai editar")}>
                  <SC.IconAction as={MdEdit} />
                </SC.ActionEdit>
              </Tooltip>
              <Tooltip fontSize="md" label="Excluir" placement="top">
                <SC.ActionDelete onClick={() => onDelete(item?.id)}>
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

import React, { useState } from "react";
import * as SC from "./button.style";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { Icon } from "@chakra-ui/react";

const AddOrRemove = () => {
  const [qtdeItem, setQtdeItem] = useState(0);

  return (
    <SC.BtnContainer>
      <SC.AddRmvBtn>
        <SC.Remove onClick={() => setQtdeItem(qtdeItem - 1)}>
          <Icon as={FiMinusCircle} fontSize="16px" />
        </SC.Remove>
        <SC.Counter>
          <SC.Txt>{qtdeItem}</SC.Txt>
        </SC.Counter>
        <SC.Add onClick={() => setQtdeItem(qtdeItem + 1)}>
          <Icon as={FiPlusCircle} fontSize="16px" />
        </SC.Add>
      </SC.AddRmvBtn>
    </SC.BtnContainer>
  );
};

export default AddOrRemove;

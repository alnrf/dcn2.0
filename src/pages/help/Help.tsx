import React, { useState } from "react";
import * as SC from "./help.style";
import faq from "../../utils/mocks/faq.json";
import { Icon } from "@chakra-ui/react";
import { HiMinus, HiPlus } from "react-icons/hi";

function Help() {
  const [selectedItem, setSelectedItem] = useState(0);

  const handleToggle = ({ id }: any) => {
    if (id === selectedItem) {
      setSelectedItem(0);
    } else {
      setSelectedItem(id);
    }
  };
  return (
    <SC.Container>
      <SC.FAQ>F.A.Q.</SC.FAQ>
      {faq.map((item) => (
        <SC.Card key={item?.id}>
          <SC.Row onClick={() => handleToggle(item)}>
            <SC.Title>{item?.title}</SC.Title>
            <SC.Button>
              <Icon
                as={selectedItem === item?.id ? HiMinus : HiPlus}
                color="#0d1136"
                size="15px"
              />
            </SC.Button>
          </SC.Row>
          {selectedItem === item?.id && <SC.Text>{item?.text}</SC.Text>}
        </SC.Card>
      ))}
    </SC.Container>
  );
}

export default Help;

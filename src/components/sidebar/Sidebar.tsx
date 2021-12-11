import React from "react";
import * as SC from "./sidebar.style";
import { getIcon } from "../../utils/getIcon";
import category from "../../utils/mocks/category.json";
import { Icon } from "@chakra-ui/react";

const Sidebar: React.FC = () => {
  return (
    <SC.Sidebar>
      {category.map((item) => (
        <SC.CardItem key={item.id}>
          <SC.BoxIcon>
            <Icon as={getIcon(item.icon)} fontSize="30px" color="#212121" />
          </SC.BoxIcon>
          <SC.Title>{item.title}</SC.Title>
        </SC.CardItem>
      ))}
    </SC.Sidebar>
  );
};

export default Sidebar;

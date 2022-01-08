import React from "react";
import * as SC from "./sidebar.style";
import { getIcon } from "../../utils/getIcon";
import category from "../../utils/mocks/category.json";
import { Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <SC.Sidebar>
      {category.map((item) => (
        <Link to={`/categoria/${item.seo_url}`} key={item?.id}>
          <SC.CardItem>
            <SC.BoxIcon>
              <Icon as={getIcon(item?.icon)} fontSize="40px" color="#212121" />
            </SC.BoxIcon>
            <SC.Title>{item?.title}</SC.Title>
          </SC.CardItem>
        </Link>
      ))}
    </SC.Sidebar>
  );
};

export default Sidebar;

import React, { useEffect } from "react";
import * as SC from "./sidebar.style";
import { getIcon } from "../../utils/getIcon";

import { Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../services/services";
import { setCategory } from "../../redux/ducks/product/products";

const Sidebar: React.FC = () => {
  const cat = useSelector((data: any) => data.productStore.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!cat) {
      getCategory()
        .then((res) => {
          dispatch(setCategory(res.category));
        })
        .catch((err) => console.error(err));
    }
  }, []);

  return (
    <SC.Sidebar>
      {cat.map((item: any) => (
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

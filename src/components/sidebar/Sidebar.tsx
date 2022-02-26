import React, { useEffect, useState } from "react";
import * as SC from "./sidebar.style";
import { getIcon } from "../../utils/getIcon";

import { Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../services/services";
import { setCategory } from "../../redux/ducks/product/products";
import ReactLoading from "react-loading";

interface SideBarProps {
  onGotoCategory: (data: any) => void;
}

const Sidebar = ({ onGotoCategory }: SideBarProps) => {
  const cat = useSelector((data: any) => data.productStore.categories);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getCategory()
      .then((res) => {
        dispatch(setCategory(res.category));
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <SC.Sidebar>
      {isLoading ? (
        <ReactLoading
          type="spinningBubbles"
          color="#144c8b"
          height={"10%"}
          width={"10%"}
        />
      ) : (
        <>
          {cat.map((item: any) => (
            <Link to={`/categoria/${item.seo_url}`} key={item?.id}>
              <SC.CardItem onClick={() => onGotoCategory(item?.seo_url)}>
                <SC.BoxIcon>
                  <Icon
                    as={getIcon(item?.icon)}
                    fontSize="40px"
                    color="#212121"
                  />
                </SC.BoxIcon>
                <SC.Title>{item?.title}</SC.Title>
              </SC.CardItem>
            </Link>
          ))}
        </>
      )}
    </SC.Sidebar>
  );
};

export default Sidebar;

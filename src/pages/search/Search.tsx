import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import * as SC from "./search.styled";
import Products from "../../components/products/Products";

import NoProducts from "../../components/noProducts/NoProducts";
import { useNavigate, useParams } from "react-router";
import { searchProduct } from "../../services/services";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryProducts } from "../../redux/ducks/product/products";
import { MdLocalShipping } from "react-icons/md";
import ReactLoading from "react-loading";

function Search() {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const productList = useSelector((data: any) => data.productStore.productList);

  useEffect(() => {
    setIsLoading(true);
    searchProduct(params.termo)
      .then((res) => {
        dispatch(setCategoryProducts(res.product));
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, []);

  const handleGotoCategory = (data: any) => {
    navigate(`/categoria/${data}`);
  };

  return (
    <SC.Container>
      <Sidebar onGotoCategory={(data: any) => handleGotoCategory(data)} />
      <SC.CategoryContent>
        <SC.FreeDeliveryBar>
          <MdLocalShipping size={"36px"} style={{ margin: "0 15px 0 15px" }} />
          <SC.FreeDeliveryText>
            Frete grátis para compras acima de R$ 150,00
          </SC.FreeDeliveryText>
        </SC.FreeDeliveryBar>
        {isLoading ? (
          <>
            <ReactLoading
              type="spinningBubbles"
              color="#144c8b"
              height={"10%"}
              width={"10%"}
            />
          </>
        ) : (
          <>
            {productList.length ? (
              <Products data={productList} />
            ) : (
              <NoProducts />
            )}
          </>
        )}
      </SC.CategoryContent>
    </SC.Container>
  );
}

export default Search;

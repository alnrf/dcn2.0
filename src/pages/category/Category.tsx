import React, { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import * as SC from "./category.style";
import Products from "../../components/products/Products";

import NoProducts from "../../components/noProducts/NoProducts";
import { useParams } from "react-router";
import { getCategoryProducts } from "../../services/services";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryProducts } from "../../redux/ducks/product/products";
import ReactLoading from "react-loading";

function Category() {
  const params = useParams();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const productList = useSelector((data: any) => data.productStore.productList);

  useEffect(() => {
    setIsLoading(true);
    getCategoryProducts(params.name)
      .then((res) => {
        dispatch(setCategoryProducts(res.product));
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, []);

  const handleProduct = (data: any) => {
    setIsLoading(true);
    getCategoryProducts(data)
      .then((res) => {
        dispatch(setCategoryProducts(res.product));
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  };
  return (
    <SC.Container>
      <Sidebar onGotoCategory={(data: any) => handleProduct(data)} />
      <SC.CategoryContent>
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

export default Category;

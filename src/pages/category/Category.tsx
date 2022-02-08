import React, { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import * as SC from "./category.style";
import Products from "../../components/products/Products";
import ProdData from "../../utils/mocks/productsHome.json";
import NoProducts from "../../components/noProducts/NoProducts";
import { useParams } from "react-router";
import { getCategoryProducts } from "../../services/services";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryProducts } from "../../redux/ducks/product/products";

function Category() {
  const params = useParams();
  const dispatch = useDispatch();

  const productList = useSelector((data: any) => data.productStore.productList);

  useEffect(() => {
    getCategoryProducts(params.name)
      .then((res) => {
        dispatch(setCategoryProducts(res.product));
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <SC.Container>
      <Sidebar />
      <SC.CategoryContent>
        <Products data={productList} />
      </SC.CategoryContent>
    </SC.Container>
  );
}

export default Category;

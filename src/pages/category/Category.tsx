import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import * as SC from "./category.style";
import Products from "../../components/products/Products";
import ProdData from "../../utils/mocks/productsHome.json";
import NoProducts from "../../components/noProducts/NoProducts";

function Category() {
  return (
    <SC.Container>
      <Sidebar />
      <SC.CategoryContent>
        {ProdData.product ? (
          <Products data={ProdData.product} />
        ) : (
          <NoProducts />
        )}
      </SC.CategoryContent>
    </SC.Container>
  );
}

export default Category;

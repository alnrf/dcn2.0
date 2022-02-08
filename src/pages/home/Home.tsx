import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../../components/sidebar/Sidebar";
import * as SC from "./home.style";
import { MdLocalShipping } from "react-icons/md";
import Churrasco from "../../assets/images/banner/churrasco.png";
import Banner from "../../components/bannerHome/BannerHome";
import Products from "../../components/products/Products";
import CartSideBar from "../../components/cartSideBar/CartSideBar";
import { getCategory, getProductList } from "../../services/services";
import { setCategory, setProducts } from "../../redux/ducks/product/products";

const Home = () => {
  const dispatch = useDispatch();

  const productList = useSelector((data: any) => data.productStore.products);

  useEffect(() => {
    getCategory()
      .then((res) => {
        dispatch(setCategory(res.category));
      })
      .catch((err) => console.error(err));

    getProductList()
      .then((res) => {
        dispatch(setProducts(res.product));
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <SC.Container>
      <Sidebar />
      <SC.HomeContent>
        <SC.BannerContent>
          <Banner item={Churrasco} />
        </SC.BannerContent>
        <SC.FreeDeliveryBar>
          <MdLocalShipping size={"36px"} style={{ margin: "0 15px 0 15px" }} />
          <SC.FreeDeliveryText>
            Frete grátis para compras acima de R$ 150,00
          </SC.FreeDeliveryText>
        </SC.FreeDeliveryBar>
        <SC.ProductsContent>
          <Products data={productList} />
        </SC.ProductsContent>
      </SC.HomeContent>
      <CartSideBar />
    </SC.Container>
  );
};

export default Home;

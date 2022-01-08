import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import * as SC from "./home.style";
import { MdLocalShipping } from "react-icons/md";

import Churrasco from "../../assets/images/banner/churrasco.png";

import Banner from "../../components/bannerHome/BannerHome";
import Products from "../../components/products/Products";

import ProdData from "../../utils/mocks/productsHome.json";
import CartSideBar from "../../components/cartSideBar/CartSideBar";

const Home = () => {
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
          <Products data={ProdData.product} />
        </SC.ProductsContent>
      </SC.HomeContent>
      <CartSideBar />
    </SC.Container>
  );
};

export default Home;

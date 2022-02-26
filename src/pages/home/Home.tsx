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
import { useNavigate } from "react-router-dom";
import NoProducts from "../../components/noProducts/NoProducts";
import ReactLoading from "react-loading";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productList = useSelector((data: any) => data.productStore.products);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getCategory()
      .then((res) => {
        dispatch(setCategory(res.category));
      })
      .catch((err) => console.error(err));

    getProductList()
      .then((res) => {
        dispatch(setProducts(res.product));
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
      {isLoading ? (
        <ReactLoading
          type="spinningBubbles"
          color="#144c8b"
          height={"50px"}
          width={"50px"}
        />
      ) : (
        <>
          <Sidebar onGotoCategory={(data: any) => handleGotoCategory(data)} />
        </>
      )}
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
          {isLoading ? (
            <ReactLoading
              type="spinningBubbles"
              color="#144c8b"
              height={"10%"}
              width={"10%"}
            />
          ) : (
            <>
              {productList.length ? (
                <Products data={productList} />
              ) : (
                <NoProducts />
              )}
            </>
          )}
        </SC.ProductsContent>
      </SC.HomeContent>
      <CartSideBar />
    </SC.Container>
  );
};

export default Home;

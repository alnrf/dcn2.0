import React, { useState } from "react";
import * as s from "./searchbar.style";
import { MdSearch } from "react-icons/md";
import { useNavigate, useLocation, matchPath } from "react-router";
import { searchProduct } from "../../services/services";
import { useDispatch } from "react-redux";
import { setCategoryProducts } from "../../redux/ducks/product/products";

const SearchBar = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const isSearch = matchPath("/busca/:termo", pathname);

  const handlePerformSearch = (value: any) => {
    if (isSearch) {
      searchProduct(value)
        .then((res) => {
          dispatch(setCategoryProducts(res.product));
        })
        .catch((err) => console.error(err));
      setValue("");
    } else {
      navigate(`/busca/${value}`);
      setValue("");
    }
  };
  return (
    <s.WrapSearch>
      <MdSearch
        style={{
          width: "32px",
          height: "32px",
          fill: "#888888",
          marginLeft: "8px",
        }}
      />
      <s.Input
        type="search"
        name="search"
        placeholder="Pesquise aqui seu produto"
        onChange={(e: any) => setValue(e.target.value)}
        value={value}
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            handlePerformSearch(value);
          }
        }}
      />
    </s.WrapSearch>
  );
};

export default SearchBar;

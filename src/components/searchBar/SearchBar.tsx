import React from "react";
import * as s from "./searchbar.style";
import { MdSearch } from "react-icons/md";

const SearchBar: React.FC = () => {
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
      />
    </s.WrapSearch>
  );
};

export default SearchBar;

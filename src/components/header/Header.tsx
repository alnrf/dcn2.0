import React from "react";
import * as SC from "./header.style";
import Logo from "../../assets/logos/Superbom.png";
import SearchBar from "../../components/searchBar/SearchBar";
import { MdHelp } from "react-icons/md";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <SC.HeaderWrapper>
      <Link to="/">
        <SC.LogoBox>
          <SC.LogoImage src={Logo} alt="Superbom" />
        </SC.LogoBox>
      </Link>
      <SearchBar />
      <SC.LinkWrap>
        <SC.NavLink to="/ofertas">Ofertas</SC.NavLink>
        <SC.NavLink to="/ajuda">
          <MdHelp />
          Ajuda
        </SC.NavLink>
        <SC.NavLink to="/login">
          <SC.Button>Entrar</SC.Button>
        </SC.NavLink>
      </SC.LinkWrap>
    </SC.HeaderWrapper>
  );
};

export default Header;
